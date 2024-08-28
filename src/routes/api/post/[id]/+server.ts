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

export const PATCH: RequestHandler = async (event) => {
	console.log(event);

	const body = event.request;

	// const response = await database.collection('posts').updateOne(
	// 	{
	// 		_id: new ObjectId(event.params.id)
	// 	},
	// 	body
	// );

	// return json(response);

	return new Response('Yeet');
};

export const DELETE: RequestHandler = async (event) => {
	console.log(event);

	const response = await database
		.collection('posts')
		.deleteOne({ _id: new ObjectId(event.params.id) });

	return json(response);
};
