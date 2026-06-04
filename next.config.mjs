/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['127.0.0.1', '192.168.29.131'],

  // Build a self-contained server bundle. Required for the Docker image we
  // push to ECR / run on Fargate / App Runner — copies only the deps the
  // server actually uses, slimming the image by ~80%.
  output: 'standalone',

  // Compression is done at the edge (CloudFront) in production; gzip from
  // Node would just burn CPU and reduce keep-alive throughput.
  compress: false,

  // Don't leak framework version in headers.
  poweredByHeader: false,

  reactStrictMode: true,

  // Smaller production bundles — drop console.* calls except errors / warns.
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },

  // Modern formats first — saves 30–60% over JPEG/PNG on supported browsers.
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Permanent redirects for renamed routes so existing bookmarks and
  // search-engine-cached links don't 404.
  async redirects() {
    return [
      { source: '/where-we-deliver', destination: '/where-you-stand', permanent: true },
      { source: '/where-we-deliver/:path*', destination: '/where-you-stand/:path*', permanent: true },
    ];
  },

  async headers() {
    return [
      // Long-cache static hero / team images (originals served from /public).
      {
        source: '/hero/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/team/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // /_next/image and /_next/static are already served with
      // Cache-Control: public, max-age=31536000, immutable by Next 16 — no
      // override needed. CloudFront honors origin cache headers by default.

      // Don't let CloudFront or browsers cache API responses by default.
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
    ];
  },
};

export default nextConfig;
