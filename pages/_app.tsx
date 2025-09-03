// pages/_app.tsx
import type { AppProps } from "next/app";
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-loader";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}