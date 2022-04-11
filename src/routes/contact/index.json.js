import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async () => {
	const id = 'cl1vajdl8e1zp0btgg2i6v1mb';

	try {
		const query = gql`
			query Contact($id: ID!) {
				contact(where: { id: $id }) {
					email
					phone
					instagram
				}
			}
		`;
		const variables = { id };
		const { contact } = await client.request(query, variables);

		return {
			status: 200,
			body: { contact }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: 'There was a server error.' }
		};
	}
};
