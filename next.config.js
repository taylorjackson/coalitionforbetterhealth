/** @type {import('next').NextConfig} */
module.exports = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    output: 'export',
    images: { unoptimized: true },
    webpack: config => {
        config.resolve.alias.canvas = false
        return config
    },
}
