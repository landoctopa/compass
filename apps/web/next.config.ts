import type { NextConfig } from "next"
import path from "path";

const nextConfig: NextConfig = {
  // turbopack is now a top-level config, not experimental
  turbopack: {
    // We use path.join to create an absolute path to the monorepo root
    root: path.join(__dirname, "../../"),
  },
};

export default nextConfig
