import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const githubApiResponse = await fetch(
		'https://api.github.com/repos/Honzoraptor31415/sveltekit-mongodb-authjs-template'
	);
	const githubApiJson = await githubApiResponse.json();

	return {
		githubStargazersCount: githubApiJson.stargazers_count ?? 0
	};
};
