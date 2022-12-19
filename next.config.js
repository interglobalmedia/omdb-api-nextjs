const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const webpack = require('webpack')

const dotenv = require('dotenv')

dotenv.config()

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	eslint: {
		dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
    })
    config.plugins.push(
			new webpack.EnvironmentPlugin(
				'NEXT_PUBLIC_API_KEY',
			),
		)
		return config
	},
})