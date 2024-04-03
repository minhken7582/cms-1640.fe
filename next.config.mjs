/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    port: 3079,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
