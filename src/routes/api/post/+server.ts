import database from '$lib/database';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();

	const title = data.get('title');
	const text = data.get('text');

	console.log(data);

	const response = await database.collection('posts').insertOne({
		title: title,
		text: text
	});

	console.log(response);

	return json(response);
};
