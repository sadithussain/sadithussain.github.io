// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for the App Router.
   * This is required for GitHub Pages.
   */
  output: "export",

  /**
   * Disable image optimization.
   * GitHub Pages is a static host and doesn't support Next.js's default image optimization.
   */
  images: {
    unoptimized: true,
  },

  /**
   * Add a trailing slash to all paths.
   * This can help resolve issues with asset paths in static exports,
   * especially with `next/font`.
   */
  trailingSlash: true,
};

module.exports = nextConfig;
