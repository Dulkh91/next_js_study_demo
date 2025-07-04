import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/.well-known/appspecific/com.chrome.devtools.json",
        destination: "/api/404", // ឬផ្លូវទទេ
      },
    ];
  },
  
};

export default nextConfig;
