import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ubersuggest-alternative", destination: "/", permanent: true },
      { source: "/semrush-alternative", destination: "/", permanent: true },
      { source: "/peec-ai-alternative", destination: "/", permanent: true },
      { source: "/otterly-ai-alternative", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
