import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },

  async redirects() {
    return [
      { source: "/resources", destination: "/articles", permanent: true },
      { source: "/resources/articles", destination: "/articles", permanent: true },
      { source: "/resources/articles/:slug", destination: "/articles/:slug", permanent: true },
      { source: "/resources/case-studies", destination: "/case-studies", permanent: true },
      { source: "/resources/case-studies/:slug", destination: "/case-studies/:slug", permanent: true },
      { source: "/resources/comparison-boards", destination: "/comparison-board", permanent: true },
      { source: "/resources/comparison-boards/:slug", destination: "/comparison-board/:slug", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/terms-of-service.html", destination: "/terms-of-service", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*(fonts|images|css|js)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;