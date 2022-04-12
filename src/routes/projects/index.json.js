import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async () => {
	try {
		const query = gql`
			query Projects {
				projects {
					id
					title
					slug
					coverImage {
						alt
						url(
							transformation: {
								image: { resize: { width: 50, height: 50, fit: clip } }
								document: { output: { format: webp } }
							}
						)
					}
				}
			}
		`;
		const { projects } = await client.request(query);
		return {
			status: 200,
			body: { projects }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: 'There was a server error.' }
		};
	}
};
