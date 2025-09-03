// lib/dsl/presets/container.ts
import { NodeContainer } from "../types";

export const ContainerEmpty: NodeContainer = {
  uid: "static-container-empty",
  type: "Container",
  props: {
    visibility: {
      conditional: false,
      responsive: { phone: true, tablet: true, desktop: true },
      opacity: 1.0,
      animatedOpacity: false,
    },
    layout: {
      expansion: "none",
      flex: 4,
      padding: { l: 0, t: 0, r: 0, b: 0 },
      alignment: { slot: "center", x: 0, y: 0 },
    },
    containerProps: {
      size: {
        width: { value: "inf", unit: "px" },
        height: { value: "inf", unit: "px" },
      },
      minSize: {
        w: { value: 0, unit: "px" },
        h: { value: 0, unit: "px" },
      },
      maxSize: {
        w: { value: "inf", unit: "px" },
        h: { value: "inf", unit: "px" },
      },
      fill: { role: "primaryBackground", hex: null },
      borderColor: { unset: true },
      borderRadius: { linked: false, tl: 0, tr: 0, br: 0, bl: 0 },
      borderWidth: 0,
      elevation: 0,
      clipContent: false,
      boxShadow: { enabled: false, presets: [], custom: [] },
      gradient: null,
      backgroundImage: null,
      childAlignment: { slot: "center", x: 0, y: 0 },
      implicitAnimated: false,
      safeArea: false,
    },
  },
  child: null,
} as const;
Object.freeze(ContainerEmpty);