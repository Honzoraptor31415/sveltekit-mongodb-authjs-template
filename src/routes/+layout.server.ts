import { MongoDBAdapter } from '@auth/mongodb-adapter';
import type { LayoutServerLoad } from './$types';
import { client } from '$lib/database';
import type { DbUser } from '$lib/types/db';
import { DB_NAME } from '$env/static/private';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();
	const githubApiResponse = await fetch(
		'https://api.github.com/repos/Honzoraptor31415/sveltekit-mongodb-authjs-template'
	);
	const githubApiJson = await githubApiResponse.json();

	const adapter = MongoDBAdapter(client, {
		databaseName: DB_NAME
	});
	const dbUser: DbUser | null = session?.user
		? ((await adapter.getUserByEmail!(session?.user?.email as string)) as DbUser)
		: null;

	return {
		githubStargazersCount: githubApiJson.stargazers_count ?? 0,
		session,
		dbUser
	};
};
