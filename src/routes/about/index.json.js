import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async () => {
	const id = 'cl1bbfqu7kza30bt6t9oq02sq';

	try {
		const query = gql`
			query About($id: ID!) {
				about(where: { id: $id }) {
					bio {
						html
					}
					id
					name
					profilePicture {
						alt
						url(transformation: { document: { output: { format: webp } } })
					}
				}
			}
		`;
		const variables = { id };
		const { about } = await client.request(query, variables);

		return {
			status: 200,
			body: { about }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: 'There was a server error.' }
		};
	}
};
