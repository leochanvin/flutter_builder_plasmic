// lib/dsl/presets/column.ts
import { NodeColumn } from "../types";

export const ColumnEmpty: NodeColumn = {
  uid: "static-column-empty",
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
      padding: { l: 0, t: 0, r: 0, b: 0 },
      alignment: { slot: "center", x: 0, y: 0 },
    },
    columnProps: {
      mainAxisSize: "min",
      mainAxisAlignment: "start",
      crossAxisAlignment: "center",
      scrollable: false,
      itemsSpacing: 0.0,
      applySpacingToStartEnd: false,
      startSpacing: 0.0,
      endSpacing: 0.0,
    },
  },
  children: [],
} as const;
Object.freeze(ColumnEmpty);