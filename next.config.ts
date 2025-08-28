import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
  // This is for the mdx parsing
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  // extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  }
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)