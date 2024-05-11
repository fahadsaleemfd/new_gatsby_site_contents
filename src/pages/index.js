import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
							text
						}
					}
				}
			}
		}
	`);
	const markdownData = data.allMarkdownRemark.edges;

	return (
		<div>
			<h1>Home page</h1>
			<ul>
				{markdownData.map(({ node }) => (
					<li key={node.id}>{node.frontmatter.text}</li>
				))}
			</ul>
		</div>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
