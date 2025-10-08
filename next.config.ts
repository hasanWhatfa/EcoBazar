import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // for svgr library, now you can deal with svgs as react components
 webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
