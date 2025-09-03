// plasmic-init.tsx
import { registerComponent } from "@plasmicapp/host";
import LayerTree from "./components/customs/layers/LayerTree";

export function registerAll() {
  registerComponent(LayerTree, {
    name: "LayerTree",
    importPath: "./components/customs/layers/LayerTree",
    importName: "default",
    description:
      "Arbre hiérarchique (expand/collapse, sélection, renommage).",
    props: {
      root: { type: "object" },
      selectedUid: { type: "string" },
      defaultExpanded: {
        type: "array",
        itemType: {
          type: "object",
          fields: { uid: { type: "string" } },
        },
        description: "Ex: [{ uid: \"abc123\" }]",
      },
      onSelect: {
        type: "eventHandler",
        argTypes: [
          { name: "uid", type: "string" },
          { name: "node", type: "object" },
        ],
      },
      onRename: {
        type: "eventHandler",
        argTypes: [
          { name: "uid", type: "string" },
          { name: "newName", type: "string" },
          { name: "node", type: "object" },
        ],
      },
    },
  });
}