import { json, type RequestHandler } from '@sveltejs/kit';
import database from '$lib/database';

export const GET: RequestHandler = async (request) => {
	console.log(request);

	const posts = await database.collection('posts').find().toArray();

	console.log(posts);

	return json(posts);
};

export const POST: RequestHandler = (request) => {
	console.log(request);

	return new Response('POST Post API route');
};
