// components/customs/layers/EditorPage.tsx
import * as React from "react";
// depuis components/customs/layers -> remonter à components, puis aller dans plasmic/flutter_builder
import PlasmicEditorPage from "../../plasmic/flutter_builder/PlasmicEditorPage";
// LayerTree est dans le même dossier
import LayerTree, { TreeNode } from "./LayerTree";

const initialRoot: any = {
  uid: "abc123",
  name: "Scaffold",
  type: "Scaffold",
  children: {
    appBar: null,
    body: {
      uid: "col-1",
      name: "Column",
      type: "Column",
      children: [
        { uid: "txt-1", name: "Title", type: "Text", children: [] }
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

export default function EditorPage() {
  const [root, setRoot] = React.useState<any>(initialRoot);
  const [selectedUid, setSelectedUid] = React.useState<string | undefined>();

  const handleSelect = React.useCallback((uid: string, _node: TreeNode) => {
    setSelectedUid(uid);
  }, []);

  const handleRename = React.useCallback((uid: string, newName: string, _node: TreeNode) => {
    setRoot((prev: any) => updateNodeName(prev, uid, newName));
  }, []);

  return (
    <PlasmicEditorPage
      layersTree={
        <LayerTree
          root={root}
          selectedUid={selectedUid}
          onSelect={handleSelect}
          onRename={handleRename}
        />
      }
    />
  );
}