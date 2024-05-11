/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `My Gatsby Site`,
		siteUrl: `https://www.yourdomain.tld`,
	},

	plugins: [
		"gatsby-plugin-netlify-cms",
		"gatsby-plugin-postcss",
		"gatsby-plugin-mdx",
		`gatsby-transformer-remark`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
};

