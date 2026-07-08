import type { NextConfig } from "next";

const repoName = "oji-ramen-website";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
