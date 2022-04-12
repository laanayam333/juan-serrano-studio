import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async (req) => {
	const slug = req.params.slug;

	try {
		const query = gql`
			query Project($slug: String!) {
				project(where: { slug: $slug }) {
					title
					materials
					year
					price
					description
					coverImage {
						url(
							transformation: {
								image: { resize: { width: 50, height: 50, fit: clip } }
								document: { output: { format: webp } }
							}
						)
						alt
					}
					images {
						url(
							transformation: {
								image: { resize: { width: 50, height: 50, fit: clip } }
								document: { output: { format: webp } }
							}
						)
						alt
					}
				}
			}
		`;
		const variables = { slug };
		const { project } = await client.request(query, variables);

		return {
			status: 200,
			body: { project }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: 'There was a server error.' }
		};
	}
};
