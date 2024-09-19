/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: { and: [/\.(js|ts|md)x?$/] },
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        prettier: false,
                        svgo: true,
                        svgoConfig: { plugins: [{ removeViewBox: false }] },
                        titleProp: true,
                    },
                },
            ],
        });
        return config;
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/women-home',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
