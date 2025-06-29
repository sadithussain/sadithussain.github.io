// next.config.ts

import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
