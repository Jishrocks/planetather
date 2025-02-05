/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["cdn.discordapp.com", "media.discordapp.net"],
    },
};

module.exports = nextConfig;
