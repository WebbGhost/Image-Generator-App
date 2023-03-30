/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    OPEN_AI_API: "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",
    OPEN_AI_ORGANIZATION: "",
  },
};

module.exports = nextConfig;
