import { client } from '$lib/database';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import Google from '@auth/sveltekit/providers/google';

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [GitHub, Google],
	adapter: MongoDBAdapter(client, {
		databaseName: 'main'
	})
});
