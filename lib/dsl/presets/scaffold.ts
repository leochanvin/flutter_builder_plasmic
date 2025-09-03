// lib/dsl/presets/scaffold.ts
import { NodeScaffold } from "../types";
import { ColumnEmpty } from "./column";

export const ScaffoldEmpty: NodeScaffold = {
  uid: "static-scaffold-empty",
  type: "Scaffold",
  props: {
    visibility: { opacity: 1.0, animatedOpacity: false },
    scaffoldProps: {
      backgroundColor: { role: "secondaryBackground", hex: null },
      safeArea: false,
      hideKeyboardOnTap: true,
      disableAndroidBackButton: false,
      disableResizeToAvoidBottomInset: false,
    },
    navBarProps: { showOnNavBar: false, alwaysShowOnPage: false },
  },
  children: {
    appBar: null,
    body: ColumnEmpty,
    floatingActionButton: null,
    bottomNavigationBar: null,
    drawer: null,
  },
} as const;
Object.freeze(ScaffoldEmpty);