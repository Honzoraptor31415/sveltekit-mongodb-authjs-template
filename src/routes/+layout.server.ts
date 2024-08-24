import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();
	const githubApiResponse = await fetch(
		'https://api.github.com/repos/Honzoraptor31415/sveltekit-mongodb-authjs-template'
	);
	const githubApiJson = await githubApiResponse.json();

	return {
		githubStargazersCount: githubApiJson.stargazers_count ?? 0,
		session
	};
};
