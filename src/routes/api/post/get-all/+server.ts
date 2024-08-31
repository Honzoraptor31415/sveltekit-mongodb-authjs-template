import database from '$lib/database';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	const isRequestFromBrowserWindow = event.request.headers.get('sec-fetch-user') !== null;

	if (isRequestFromBrowserWindow) {
		error(404);
	}

	const posts = await database.collection('posts').find().toArray();

	return json(posts);
};
