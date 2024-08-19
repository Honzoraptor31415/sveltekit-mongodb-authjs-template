import { json, type RequestHandler } from '@sveltejs/kit';
import database from '$lib/database';
import { ObjectId } from 'mongodb';

export const GET: RequestHandler = async (event) => {
	console.log(event);

	const posts = await database
		.collection('posts')
		.find({ _id: new ObjectId(event.params.id) })
		.toArray();

	return json(posts);
};
