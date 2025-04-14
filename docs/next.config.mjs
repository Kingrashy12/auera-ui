import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        hostname: "fastly.picsum.photos",
        protocol: "https",
        pathname: "**",
      },
    ],
  },
  turbopack: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
