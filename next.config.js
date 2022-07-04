/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// next.config.js
const semi = require('@douyinfe/semi-next').default({
  /* the extension options */
})
module.exports = semi({
  // your custom Next.js configuration
})
