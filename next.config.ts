import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/ai-image-marketplace-bigger-with-generative-ai",
        destination: "/blog/ai-image-marketplace-prompt-marketplaces",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
