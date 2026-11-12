import type { NextConfig } from "next";

/**
 * Dua mode build:
 *  - Default: server Next.js biasa (dipakai preview/dev).
 *  - GitHub Pages: STATIC_EXPORT=true  -> output statis di ./out
 *    NEXT_PUBLIC_BASE_PATH=/NAMA-REPO  -> untuk project site
 *    (kosongkan untuk custom domain / user site / local).
 */
const isExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export", trailingSlash: true } : {}),
  ...(basePath ? { basePath } : {}),
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_EXPORT: isExport ? "true" : "false",
  },
  reactStrictMode: true,
};

export default nextConfig;
