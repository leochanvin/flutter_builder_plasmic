// plasmic-loader.ts
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

// Récupère ces valeurs dans Plasmic Studio → Project Settings → Loader → API keys
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.PLASMIC_PROJECT_ID as string,
      token: process.env.PLASMIC_PUBLIC_TOKEN as string,
    },
  ],
  // Optionnel:
  // preview: true,
});