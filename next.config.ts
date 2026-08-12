import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [55, 60, 75], // 🔥 fix warning
  },

  compress: true,
  poweredByHeader: false,

  async redirects() {
    return [
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/epoxy-flooring",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/building-facades",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/terrazzo",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/custom-decorative-concrete",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/garage-floors",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
