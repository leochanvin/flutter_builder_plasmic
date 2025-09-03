import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { registerAll } from "../plasmic-init";

// IMPORTANT : enregistrer AVANT de rendre le host
registerAll();

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}