const { withExpo } = require('@expo/next-adapter');
/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'twrnc',
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  typescript: {
    // Temporarily ignore TypeScript errors during build for vendor components
    ignoreBuildErrors: true,
  },
});
module.exports = nextConfig;
