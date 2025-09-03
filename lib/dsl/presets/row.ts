// lib/dsl/presets/row.ts
import { NodeRow } from "../types";

export const RowEmpty: NodeRow = {
  uid: "static-row-empty",
  type: "Row",
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
    rowProps: {
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
  children: [],
} as const;
Object.freeze(RowEmpty);