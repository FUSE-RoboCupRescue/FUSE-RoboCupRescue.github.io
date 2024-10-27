import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. Remove the basePath configuration if you want to deploy
   * to the root level (e.g., https://fuse-robocuprescue.github.io/).
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   * 
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },

  /**
   * Use assetPrefix to ensure assets are loaded correctly when deployed.
   */
  assetPrefix: "./",
};

export default nextConfig;
//