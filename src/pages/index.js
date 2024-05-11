import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/posts/blogs/" } }
			) {
				edges {
					node {
						id
						frontmatter {
							title
							text
							slug
						}
					}
				}
			}
		}
	`);
	const markdownData = data.allMarkdownRemark.edges;

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="text-center">
				<h1 className="text-3xl font-bold mb-6">All Posts</h1>
				<ul>
					{markdownData.map(({ node }) => (
						<li key={node.id} className="mb-2">
							<Link
								to={`/post/${node.frontmatter.slug}`}
								className="text-blue-500 hover:underline"
							>
								{node.frontmatter.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
