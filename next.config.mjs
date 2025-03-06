/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  distDir: 'out', // Specify output directory
  
  // If you have images, you'll need this
  images: {
    unoptimized: true
  }
};

export default nextConfig;