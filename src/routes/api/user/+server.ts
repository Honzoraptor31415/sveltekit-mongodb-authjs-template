import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = (request) => {
	console.log(request);

	return new Response('GET User API route');
};

export const POST: RequestHandler = (request) => {
	console.log(request);

	return new Response('POST User API route');
};
