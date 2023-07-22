/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  	unoptimized: true,
  },
  webpack: (config) => {
	  config.resolve.alias['@'] = path.join(__dirname);
	  return config;
  }
}

module.exports = nextConfig
