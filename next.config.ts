import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/site-sstyle-switch',
  basePath: '/site-sstyle-switch',
  images: { unoptimized: true },
};

export default nextConfig;
