/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.cache = false; // Disable caching temporarily
        return config;
      },
};

export default nextConfig;
