/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phonico.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "platform.phonico.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
