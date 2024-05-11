const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/posts/blogs/" } }
			) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`);

	const posts = result.data.allMarkdownRemark.edges;

	posts.forEach(({ node }) => {
		const slug = node.frontmatter.slug;

		createPage({
			path: `/post/${slug}`,
			component: path.resolve("./src/templates/post.js"),
			context: {
				slug: slug,
			},
		});
	});
};
