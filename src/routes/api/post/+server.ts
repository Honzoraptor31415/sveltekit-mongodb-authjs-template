import database from '$lib/database';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	const data = await event.request.json();

	console.log(data);

	const response = await database.collection('posts').insertOne({
		title: data.title,
		text: data.text
	});

	console.log(response);

	return json(response);
};
