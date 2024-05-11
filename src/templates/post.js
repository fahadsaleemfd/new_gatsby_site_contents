import React from "react";
import { graphql } from "gatsby";

const PostTemplate = ({ data }) => {
	const post = data.markdownRemark;

	return (
		<div className="max-w-3xl mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4">{post.frontmatter.title}</h1>
			<p className="text-gray-600 mb-4">By {post.frontmatter.author}</p>
			<img
				src={post.frontmatter.thumbnail}
				alt={post.frontmatter.title}
				className="mb-4"
			/>
			<div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
			<div className="mt-8">
				<p className="text-gray-500">
					Categories:{" "}
					{post.frontmatter.categories.map((category, index) => (
						<span key={index} className="mr-2">
							{category}
						</span>
					))}
				</p>
				<p className="text-gray-500">Archive: {post.frontmatter.archive}</p>
			</div>
		</div>
	);
};

export default PostTemplate;

export const query = graphql`
	query ($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			id
			frontmatter {
				title
				text
				author
				archive
				categories
				thumbnail
			}
			html
		}
	}
`;
