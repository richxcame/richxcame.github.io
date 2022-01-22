/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	assetPrefix: isProd ? '/richxcame.github.io/' : '',
	reactStrictMode: true,
	webpack: config => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		});

		return config;
	},
};

module.exports = nextConfig;
