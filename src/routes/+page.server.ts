import type { DbPost } from '$lib/types/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/post/get-all');
	const data = (await response.json()) as DbPost[];

	return {
		allPosts: data ?? []
	};
};
