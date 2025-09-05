// components/customs/layers/EditorPage.tsx
import * as React from "react";
// depuis components/customs/layers -> remonter à components, puis aller dans plasmic/flutter_builder
import PlasmicEditorPage from "../../plasmic/flutter_builder/PlasmicEditorPage";
// LayerTree est dans le même dossier
import LayerTree, { TreeNode } from "./LayerTree";
import PropertiesDebugPanel from "../../PropertiesDebugPanel";

const initialRoot: any = {
  uid: "abc123",
  name: "Scaffold",
  type: "Scaffold",
  props: {
    visibility: { opacity: 1.0, animatedOpacity: false },
    scaffoldProps: {
      backgroundColor: null,
      safeArea: true,
      hideKeyboardOnTap: false,
      disableAndroidBackButton: false,
      disableResizeToAvoidBottomInset: false
    },
    navBarProps: { showOnNavBar: false, alwaysShowOnPage: false }
  },
  children: {
    appBar: null,
    body: {
      uid: "col-1",
      name: "Column",
      type: "Column",
      props: {
        visibility: {
          conditional: false,
          responsive: { phone: true, tablet: true, desktop: true },
          opacity: 1.0,
          animatedOpacity: false,
        },
        layout: {
          expansion: "none",
          flex: 1,
          width: 200,
          height: 100,
          padding: { l: 0, t: 0, r: 0, b: 0 },
          alignment: { slot: "center", x: 0, y: 0 },
        },
        columnProps: {
          mainAxisSize: "min",
          mainAxisAlignment: "start",
          crossAxisAlignment: "center",
          scrollable: false,
          itemsSpacing: 8.0,
          applySpacingToStartEnd: false,
          startSpacing: 0.0,
          endSpacing: 0.0,
        },
      },
      children: [
        { 
          uid: "txt-1", 
          name: "Title", 
          type: "Text", 
          props: {
            text: "Title",
            visibility: {
              conditional: false,
              responsive: { phone: true, tablet: true, desktop: true },
              opacity: 1.0,
              animatedOpacity: false,
            },
            layout: {
              expansion: "none",
              flex: 1,
              width: 150,
              height: 50,
              padding: { l: 0, t: 0, r: 0, b: 0 },
              alignment: { slot: "center", x: 0, y: 0 },
            },
            textProps: {
              themeTextStyle: null,
              fontFamily: "Primary Family",
              fontWeight: "w500",
              fontSize: 16.0,
              textColor: { role: "primaryText", hex: null },
              lineHeight: null,
              letterSpacing: null,
              textAlign: "start",
              maxLines: null,
              autoSize: false,
              selectable: false,
              shadows: [],
              gradient: null,
              animateChanges: false,
            },
          },
          children: [] 
        }
      ]
    },
    floatingActionButton: null,
    bottomNavigationBar: null,
    drawer: null
  }
};

function updateNodeName(root: any, uid: string, newName: string): any {
  if (!root) return root;
  if (root.uid === uid) return { ...root, name: newName };

  if (root.type === "Scaffold") {
    const next = { ...root.children };
    for (const k of Object.keys(next)) {
      if (next[k]) next[k] = updateNodeName(next[k], uid, newName);
    }
    return { ...root, children: next };
  }
  if (root.type === "Column" || root.type === "Row") {
    return { ...root, children: (root.children ?? []).map((c: any) => updateNodeName(c, uid, newName)) };
  }
  if (root.type === "Container" && root.child) {
    return { ...root, child: updateNodeName(root.child, uid, newName) };
  }
  return root;
}

function insertPreset(root: any, parentUid: string, preset: any): any {
  if (!root) return root;
  if (root.uid === parentUid) {
    if (root.type === "Column" || root.type === "Row") {
      const nextChildren = [
        ...(root.children ?? []),
        mapDslPresetToInternal(clonePresetWithNewUid(preset))
      ];
      return { ...root, children: nextChildren };
    }
    if (root.type === "Container") {
      if (!root.child)
        return {
          ...root,
          child: mapDslPresetToInternal(clonePresetWithNewUid(preset))
        };
      // already has a child; try to append into that child if it can host children
      const target = root.child;
      const updatedChild = insertPreset(target, target.uid, preset);
      return { ...root, child: updatedChild };
    }
    // Scaffold or leaf: no direct children array; try body for Scaffold
    if (root.type === "Scaffold" && root.children?.body) {
      return {
        ...root,
        children: {
          ...root.children,
          body: insertPreset(root.children.body, root.children.body.uid, preset)
        }
      };
    }
    // leaf nodes: no insertion
    return root;
  }
  if (root.type === "Scaffold") {
    const next = { ...root.children };
    for (const k of Object.keys(next)) {
      if (next[k]) next[k] = insertPreset(next[k], parentUid, preset);
    }
    return { ...root, children: next };
  }
  if (root.type === "Column" || root.type === "Row") {
    return {
      ...root,
      children: (root.children ?? []).map((c: any) => insertPreset(c, parentUid, preset))
    };
  }
  if (root.type === "Container" && root.child) {
    return { ...root, child: insertPreset(root.child, parentUid, preset) };
  }
  return root;
}

function clonePresetWithNewUid(preset: any) {
  // shallow clone with a new uid marker; in real use, generate proper unique ids
  const newUid = preset.uid + "-copy-" + Math.random().toString(36).slice(2, 7);
  const cloned = JSON.parse(JSON.stringify(preset));
  cloned.uid = newUid;
  return cloned;
}

function mapDslPresetToInternal(preset: any): any {
  const type = preset?.type || "Unknown";
  const base = {
    uid: preset?.uid ?? Math.random().toString(36).slice(2, 9),
    name: preset?.name || type,
    type,
    props: preset?.props || {}
  } as any;
  if (type === "Column" || type === "Row") {
    return { ...base, children: [] };
  }
  if (type === "Container") {
    return { ...base, child: null };
  }
  // Text and others as leaf
  return { ...base, children: [] };
}

function removeNode(root: any, targetUid: string): any {
  if (!root) return root;
  if (root.uid === targetUid) {
    return null; // caller must prune nulls
  }
  if (root.type === "Scaffold") {
    const next = { ...root.children };
    for (const k of Object.keys(next)) {
      if (next[k]) next[k] = removeNode(next[k], targetUid);
    }
    return { ...root, children: next };
  }
  if (root.type === "Column" || root.type === "Row") {
    const filtered = (root.children ?? [])
      .map((c: any) => removeNode(c, targetUid))
      .filter(Boolean);
    return { ...root, children: filtered };
  }
  if (root.type === "Container") {
    if (!root.child) return root;
    const nextChild = removeNode(root.child, targetUid);
    return { ...root, child: nextChild };
  }
  return root;
}

// Fonction pour récupérer un nœud par son UID
function findNodeByUid(root: any, uid: string): any {
  if (!root) return null;
  if (root.uid === uid) return root;
  
  if (root.type === "Scaffold") {
    const slots = root.children || {};
    for (const key of Object.keys(slots)) {
      const child = slots[key];
      if (child) {
        const found = findNodeByUid(child, uid);
        if (found) return found;
      }
    }
  }
  
  if (root.type === "Column" || root.type === "Row") {
    const children = root.children || [];
    for (const child of children) {
      const found = findNodeByUid(child, uid);
      if (found) return found;
    }
  }
  
  if (root.type === "Container" && root.child) {
    return findNodeByUid(root.child, uid);
  }
  
  return null;
}

// Fonction pour mettre à jour les propriétés d'un nœud
function updateNodeProps(root: any, uid: string, newProps: any): any {
  if (!root) return root;
  if (root.uid === uid) return { ...root, props: { ...root.props, ...newProps } };
  
  if (root.type === "Scaffold") {
    const next = { ...root.children };
    for (const k of Object.keys(next)) {
      if (next[k]) next[k] = updateNodeProps(next[k], uid, newProps);
    }
    return { ...root, children: next };
  }
  
  if (root.type === "Column" || root.type === "Row") {
    return {
      ...root,
      children: (root.children ?? []).map((c: any) => updateNodeProps(c, uid, newProps))
    };
  }
  
  if (root.type === "Container" && root.child) {
    return { ...root, child: updateNodeProps(root.child, uid, newProps) };
  }
  
  return root;
}

export default function EditorPage() {
  const [root, setRoot] = React.useState<any>(initialRoot);
  const [selectedUid, setSelectedUid] = React.useState<string | undefined>();

  // Récupérer le widget sélectionné
  const selectedNode = React.useMemo(() => {
    if (!selectedUid) return null;
    return findNodeByUid(root, selectedUid);
  }, [root, selectedUid]);

  const handleSelect = React.useCallback((uid: string, _node: TreeNode) => {
    setSelectedUid(uid);
  }, []);

  const handleRename = React.useCallback((uid: string, newName: string, _node: TreeNode) => {
    setRoot((prev: any) => updateNodeName(prev, uid, newName));
  }, []);

  const handleAddWidget = React.useCallback((parentUid: string, preset: any, _parentNode: TreeNode) => {
    console.log('[EditorPage] handleAddWidget', { parentUid, preset });
    setRoot((prev: any) => {
      const next = insertPreset(prev, parentUid, preset);
      console.log('[EditorPage] root after insert', next);
      return next;
    });
    setSelectedUid(parentUid);
  }, []);

  // Gestionnaire pour mettre à jour les propriétés
  const handleUpdateProps = React.useCallback((uid: string, newProps: any) => {
    setRoot((prev: any) => updateNodeProps(prev, uid, newProps));
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Ne pas supprimer le widget si l'utilisateur tape dans un champ de texte
      const activeElement = document.activeElement;
      const isInputField = activeElement && (
        activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        (activeElement as HTMLElement).contentEditable === 'true' ||
        activeElement.getAttribute('role') === 'textbox'
      );
      
      if ((e.key === "Delete" || e.key === "Backspace") && selectedUid && !isInputField) {
        e.preventDefault();
        setRoot((prev: any) => removeNode(prev, selectedUid));
        setSelectedUid(undefined);
      }
    };
    window.addEventListener("keydown", onKey);
    const onAdd = (e: any) => {
      const { parentUid, preset } = e.detail || {};
      console.log('[EditorPage] event dsl-add-widget', { parentUid, preset });
      setRoot((prev: any) => insertPreset(prev, parentUid, preset));
    };
    window.addEventListener('dsl-add-widget', onAdd as any);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener('dsl-add-widget', onAdd as any);
    };
  }, [selectedUid]);

  return (
    <>
      <PlasmicEditorPage
        layersTree={
          <LayerTree
            root={root}
            selectedUid={selectedUid}
            onSelect={handleSelect}
            onRename={handleRename}
            onAddWidget={handleAddWidget}
          />
        }
        overrides={{
          propertiesVisibilitySection: {
            props: {
              node: selectedNode,
              onUpdate: (newProps: any) => selectedUid && handleUpdateProps(selectedUid, newProps)
            }
          },
          propertiesLayoutSection: {
            props: {
              node: selectedNode,
              onUpdate: (newProps: any) => selectedUid && handleUpdateProps(selectedUid, newProps)
            }
          },
          propertiesAppearanceSection: {
            props: {
              node: selectedNode,
              onUpdate: (newProps: any) => selectedUid && handleUpdateProps(selectedUid, newProps)
            }
          },
          propertiesTextSection: {
            props: {
              node: selectedNode,
              onUpdate: (newProps: any) => selectedUid && handleUpdateProps(selectedUid, newProps)
            }
          }
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          maxHeight: "300px",
          background: "rgba(255,255,255,0.98)",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          zIndex: 1000,
          overflow: "auto"
        }}
      >
        <PropertiesDebugPanel node={selectedNode} />
      </div>
      
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50vw",
          maxHeight: "60vh",
          background: "rgba(255,255,255,0.95)",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          padding: 16,
          overflow: "auto",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
          fontSize: 12,
          zIndex: 1000,
          pointerEvents: "none"
        }}
      >
        <pre style={{ margin: 0 }}>{JSON.stringify(root, null, 2)}</pre>
      </div>
    </>
  );
}