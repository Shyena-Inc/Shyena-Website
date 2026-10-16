import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Fully static site — export to `out/` for Cloudflare Pages (static assets,
  // no Worker runtime). Every route is prerendered.
  output: "export",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: { unoptimized: true },
  // @phosphor-icons/react ships ESM-first with a CJS fallback whose React
  // interop breaks static prerendering; transpile it into the app bundle.
  transpilePackages: ["@phosphor-icons/react"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
