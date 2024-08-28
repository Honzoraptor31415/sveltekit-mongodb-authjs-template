import database from '$lib/database';
import * as validation from '$lib/form-validation';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	const body = await event.request.json();
	const bodyKeys = Object.keys(body);
	const session = await event.locals.auth();
	const titleCheck = validation.titleCheck(body.title);
	const textCheck = validation.textCheck(body.text);

	body.date = new Date().getTime();

	console.log(session);

	if (!session?.user) {
		return json({
			message: 'You have to be authenticated'
		});
	} else if (bodyKeys.length > 2) {
		return json({
			message: 'Unexpected data'
		});
	} else if (bodyKeys.length === 0) {
		return json({
			message: 'Please provide data'
		});
	} else if (bodyKeys.length < 2) {
		return json({
			message: 'Missing property'
		});
	} else if (!titleCheck.isValid) {
		return json({
			message: titleCheck.message
		});
	} else if (!textCheck.isValid) {
		return json({
			message: textCheck.message
		});
	}

	const response = await database.collection('posts').insertOne(body);

	console.log(response);

	return json(response);
};
