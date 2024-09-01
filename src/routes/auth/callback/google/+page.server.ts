import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	console.log('Somebody just logged in with google');

	redirect(300, '/');
};
