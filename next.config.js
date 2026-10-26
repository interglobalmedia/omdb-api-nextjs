const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  }
})