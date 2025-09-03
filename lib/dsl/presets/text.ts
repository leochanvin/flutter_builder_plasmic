// lib/dsl/presets/text.ts
import { NodeText } from "../types";

export const TextCalendrier: NodeText = {
  uid: "static-text-calendrier",
  type: "Text",
  props: {
    text: "Text",
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
    textProps: {
      themeTextStyle: null,
      fontFamily: "Primary Family",
      fontWeight: "w500",
      fontSize: 24.0,
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
} as const;
Object.freeze(TextCalendrier);