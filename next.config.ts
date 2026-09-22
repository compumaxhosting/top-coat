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
        destination: "/services/epoxy-flooring-wayne-new-jersey",
        permanent: true,
      },
      {
        source: "/services/building-facades",
        destination: "/services/building-facade-contractors-wayne-nj",
        permanent: true,
      },
      {
        source: "/services/terrazzo",
        destination: "/services/terrazzo-flooring-contractors-wayne-nj",
        permanent: true,
      },
      {
        source: "/services/custom-decorative-concrete",
        destination: "/services/custom-decorative-concrete-contractors-wayne-nj",
        permanent: true,
      },
      {
        source: "/services/garage-floors",
        destination: "/services/garage-floor-coating-contractors-in-wayne-nj",
        permanent: true,
      },
      {
        source: "/services/stamped-concrete",
        destination: "/services/stamped-concrete-contractors-wayne-nj",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
