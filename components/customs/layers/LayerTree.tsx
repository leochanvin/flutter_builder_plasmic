import * as React from "react";
import styles from "./LayerTree.module.css";
import LayerItem from "../../LayerItem";
import { typeToIcon } from "./LayerIcons";

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
}

export default function LayerTree({
  root,
  selectedUid,
  defaultExpanded,
  onSelect,
  onRename,
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
    if (v && v !== node.name) onRename?.(uid, v, node);
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

  return (
    <div>
      <div
        className={`${styles.row} ${isSelected ? styles.selected : ""}`}
        style={{ paddingLeft: depth === 0 ? 4 : 4 }}
        onClick={() => onSelect?.(node.uid, node)}
        onDoubleClick={() => setEditingUid(node.uid)}
      >
        {caret}
        {isEditing ? (
          <input
            className={styles.nameInput}
            autoFocus
            defaultValue={node.name}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onRenameCommit(
                  node.uid,
                  node,
                  (e.target as HTMLInputElement).value
                );
              } else if (e.key === "Escape") {
                setEditingUid(null);
              }
            }}
            onBlur={(e) =>
              onRenameCommit(node.uid, node, e.currentTarget.value)
            }
          />
        ) : (
          // Render the Plasmic-designed row while passing the name and putting the type icon as children slot
          <div
            style={{
              ...(isSelected
                ? { background: "var(--token--FySWHG7u5ND)", borderRadius: 8 }
                : {}),
              flex: 1
            }}
          >
            <LayerItem data={{ name: node.name }}>{icon}</LayerItem>
          </div>
        )}
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