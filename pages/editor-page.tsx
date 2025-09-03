// pages/editor-page.tsx
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/flutter_builder/PlasmicGlobalContextsProvider";
import { UnnamedGlobalGroupOfVariantsContextProvider } from "../components/plasmic/flutter_builder/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { PlasmicEditorPage } from "../components/plasmic/flutter_builder/PlasmicEditorPage";

import LayerTree, { TreeNode } from "../components/customs/layers/LayerTree"; // 👈
import { useRouter } from "next/router";

function EditorPage() {
  // État minimal d’exemple — branche-le sur ton vrai state plus tard
  const [root, setRoot] = React.useState<any>({
    uid: "abc123",
    name: "Scaffold",
    type: "Scaffold",
    children: { appBar: null, body: { uid:"col-1", name:"Column", type:"Column", children: [] } }
  });
  const [selectedUid, setSelectedUid] = React.useState<string>();

  const handleSelect = (uid: string, _node: TreeNode) => setSelectedUid(uid);
  const handleRename = (uid: string, newName: string) =>
    setRoot((prev: any) => (prev.uid === uid ? { ...prev, name: newName } : prev));

  return (
    <UnnamedGlobalGroupOfVariantsContextProvider value={undefined}>
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={useRouter()?.pathname}
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          {/* ⬇️ Tout le reste de la page reste identique ; on remplit juste le slot */}
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
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </UnnamedGlobalGroupOfVariantsContextProvider>
  );
}

export default EditorPage;