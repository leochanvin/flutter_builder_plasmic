import * as React from "react";
import styles from "./LayerTree.module.css";
import LayerRowItem from "./LayerRowItem";
import { typeToIcon } from "./LayerIcons";
import PopUpAddWidget from "../../PopUpAddWidget";

/**
 * Generic tree node used by the tree after normalization
 */
export interface TreeNode {
  uid: string;
  name: string;
  type: string;
  children: TreeNode[];
}

/**
 * Normalize your heterogeneous JSON (Scaffold / Column / Row / Container / Text) into TreeNode.
 */
export function normalizeToTree(node: any): TreeNode {
  const { uid, name, type } = node;

  // Scaffold: children is an object with slots (appBar/body/...) ; we only display non-null children
  if (type === "Scaffold") {
    const slots = node?.children ?? {};
    const kids: TreeNode[] = [];
    // ordered list of scaffold slots we care about
    [
      "appBar",
      "body",
      "floatingActionButton",
      "bottomNavigationBar",
      "drawer",
    ].forEach((slotKey) => {
      const child = slots?.[slotKey];
      if (!child) return;
      kids.push(normalizeToTree(child));
    });
    return { uid, name, type, children: kids };
  }

  // Column / Row: children is an array
  if (type === "Column" || type === "Row") {
    const arr: any[] = node?.children ?? [];
    return {
      uid,
      name,
      type,
      children: arr.map((c) => normalizeToTree(c)),
    };
  }

  // Container: a single `child`
  if (type === "Container") {
    const child = node?.child;
    return {
      uid,
      name,
      type,
      children: child ? [normalizeToTree(child)] : [],
    };
  }

  // Text or leaf widgets: no children
  return { uid, name, type, children: [] };
}

type DefaultExpandedInput = Array<string | { uid: string }>;

export interface LayerTreeProps {
  /** Root JSON node (e.g., the Scaffold of the page) */
  root: any;
  /** current selection uid */
  selectedUid?: string;
  /** initial / controlled expanded uids (string[] or {uid}[]) */
  defaultExpanded?: DefaultExpandedInput;
  /** when user selects a node */
  onSelect?: (uid: string, node: TreeNode) => void;
  /** when user renames a node */
  onRename?: (uid: string, newName: string, node: TreeNode) => void;
  /** when user adds a widget from popup at a node */
  onAddWidget?: (parentUid: string, preset: any, parentNode: TreeNode) => void;
}

export default function LayerTree({
  root,
  selectedUid,
  defaultExpanded,
  onSelect,
  onRename,
  onAddWidget,
}: LayerTreeProps) {
  const tree = React.useMemo(() => normalizeToTree(root), [root]);

  const parseExpanded = React.useCallback((arr?: DefaultExpandedInput) => {
    if (!arr || !arr.length) return [] as string[];
    return arr
      .map((e) => (typeof e === "string" ? e : e?.uid))
      .filter(Boolean) as string[];
  }, []);

  const initialExpanded = React.useMemo(() => {
    const fromProp = parseExpanded(defaultExpanded);
    if (fromProp.length) return fromProp;
    // par défaut: ouvrir la racine si elle a des enfants
    return tree?.children?.length ? [tree.uid] : [];
  }, [defaultExpanded, parseExpanded, tree?.uid, tree?.children?.length]);

  const [expanded, setExpanded] = React.useState<Set<string>>(
    () => new Set(initialExpanded)
  );
  const [editingUid, setEditingUid] = React.useState<string | null>(null);

  // Si defaultExpanded change (contrôlé depuis l'extérieur), on resynchronise
  React.useEffect(() => {
    setExpanded(new Set(initialExpanded));
  }, [initialExpanded]);

  const toggle = (uid: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(uid)) next.delete(uid);
      else next.add(uid);
      return next;
    });
  };

  const handleRenameCommit = (
    uid: string,
    node: TreeNode,
    value: string
  ) => {
    const v = value.trim();
    const next = v.length === 0 ? node.name : v;
    if (next !== node.name) onRename?.(uid, next, node);
    setEditingUid(null);
  };

  return (
    <div className={styles.treeRoot} style={{ width: "100%" }}>
      <TreeRow
        node={tree}
        depth={0}
        expanded={expanded}
        onToggle={toggle}
        selectedUid={selectedUid}
        onSelect={onSelect}
        editingUid={editingUid}
        setEditingUid={setEditingUid}
        onRenameCommit={handleRenameCommit}
        onAddWidget={onAddWidget}
      />
    </div>
  );
}

interface TreeRowProps {
  node: TreeNode;
  depth: number;
  expanded: Set<string>;
  onToggle: (uid: string) => void;
  selectedUid?: string;
  onSelect?: (uid: string, node: TreeNode) => void;
  editingUid: string | null;
  setEditingUid: (uid: string | null) => void;
  onRenameCommit: (uid: string, node: TreeNode, value: string) => void;
  onAddWidget?: (parentUid: string, preset: any, parentNode: TreeNode) => void;
}

function TreeRow(props: TreeRowProps) {
  const {
    node,
    depth,
    expanded,
    onToggle,
    selectedUid,
    onSelect,
    editingUid,
    setEditingUid,
    onRenameCommit,
    onAddWidget,
  } = props;

  const hasChildren = node.children.length > 0;
  const isOpen = expanded.has(node.uid);
  const isSelected = selectedUid === node.uid;
  const isEditing = editingUid === node.uid;

  // caret icon (► / ▼)
  const caret = hasChildren ? (
    <div
      className={styles.caret}
      onClick={(e) => {
        e.stopPropagation();
        onToggle(node.uid);
      }}
      aria-label={isOpen ? "Collapse" : "Expand"}
      title={isOpen ? "Collapse" : "Expand"}
      role="button"
    >
      {isOpen ? "▼" : "▶"}
    </div>
  ) : (
    <div className={styles.caret} />
  );

  const icon = <span>{typeToIcon(node.type)}</span>;

  // Add action handled by default PopUpAddWidget styling; integration hook can be wired later

  return (
    <div>
      <div
        className={`${styles.row} ${isSelected ? styles.selected : ""} ${isEditing ? styles.editing : ""}`}
        style={{ width: "100%" }}
        onClick={() => onSelect?.(node.uid, node)}
      >
        {/* indentation spacer to keep full-width highlight */}
        <div style={{ width: depth * 16 }} />
        {caret}
        <div style={{ flex: 1, width: "100%" }}>
          <LayerRowItem
            name={node.name}
            originalName={node.name}
            icon={icon}
            isEditing={isEditing}
            onClickRow={() => onSelect?.(node.uid, node)}
            onStartEdit={() => setEditingUid(node.uid)}
            onCommit={(val) => onRenameCommit(node.uid, node, val)}
            onCancel={() => setEditingUid(null)}
            onAddWidget={(preset) => {
              console.log('[LayerTree] onAddWidget', { parentUid: node.uid, preset, node, hasHandler: !!onAddWidget });
              if (onAddWidget) {
                onAddWidget(node.uid, preset, node);
              } else {
                // Fallback global event if no handler provided by parent
                window.dispatchEvent(
                  new CustomEvent('dsl-add-widget', { detail: { parentUid: node.uid, preset } })
                );
              }
            }}
          />
        </div>
      </div>

      {hasChildren && isOpen && (
        <div className={styles.children}>
          {node.children.map((child) => (
            <TreeRow
              key={child.uid}
              node={child}
              depth={depth + 1}
              expanded={expanded}
              onToggle={onToggle}
              selectedUid={selectedUid}
              onSelect={onSelect}
              editingUid={editingUid}
              setEditingUid={setEditingUid}
              onRenameCommit={onRenameCommit}
            />
          ))}
        </div>
      )}
    </div>
  );
}