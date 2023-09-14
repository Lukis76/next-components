/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		mdxRs: true,
	},
	swcMinify: true,
	compress: true,
	images: {
		domains: [
			"profilinator.rishav.dev",
			"images.emojiterra.com",
			"lucas-manoguerra.netlify.app",
			"testing-library.com",
			"raw.githubusercontent.com",
		],
	},
};

module.exports = nextConfig
