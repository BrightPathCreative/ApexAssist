import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoids ESLint config/version mismatches failing production builds on Vercel.
  // Run `npm run lint` locally to check code quality.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
