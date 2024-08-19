import database from '$lib/database';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	console.log(event);

	const posts = await database.collection('posts').find().toArray();

	return json(posts);
};
