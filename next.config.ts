import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Evita que `next dev` reescreva AGENTS.md / CLAUDE.md no repositorio.
  agentRules: false,
};

export default nextConfig;
