import database, { client } from '$lib/database';
import * as validation from '$lib/form-validation';
import type { DbUser } from '$lib/types/db';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	const body = await event.request.json();
	const bodyKeys = Object.keys(body);
	const session = await event.locals.auth();
	const titleCheck = validation.titleCheck(body.title);
	const textCheck = validation.textCheck(body.text);
	const adapter = MongoDBAdapter(client, {
		databaseName: 'main'
	});
	const dbUser = (await adapter.getUserByEmail!(session?.user?.email as string)) as DbUser;

	console.log('Session: ' + session);

	body.date = new Date().getTime();
	body.userId = dbUser.id;

	if (!session?.user) {
		return json({
			ok: false,
			message: 'You have to be authenticated'
		});
	} else if (!dbUser) {
		return json({
			ok: false,
			message: 'Invalid user data'
		});
	} else if (bodyKeys.length > 2) {
		return json({
			ok: false,
			message: 'Unexpected data'
		});
	} else if (bodyKeys.length === 0) {
		return json({
			ok: false,
			message: 'Please provide data'
		});
	} else if (bodyKeys.length < 2) {
		return json({
			ok: false,
			message: 'Missing property'
		});
	} else if (!titleCheck.isValid) {
		return json({
			ok: false,
			message: titleCheck.message
		});
	} else if (!textCheck.isValid) {
		return json({
			ok: false,
			message: textCheck.message
		});
	}

	const response = await database.collection('posts').insertOne(body);

	if (response.acknowledged) {
		return json({
			ok: true,
			message: 'Post created!'
		});
	} else {
		return json({
			ok: false,
			message: 'Something went wrong'
		});
	}
};
