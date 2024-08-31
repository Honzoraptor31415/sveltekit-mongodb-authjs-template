<script lang="ts">
	import Nav from '$lib/components/ui/Nav.svelte';
	import './tailwind.css';
	import './styles.css';
	import { authUser, dbUser, isUserLoaded } from '$lib/stores/user';
	import type { AuthUser } from '$lib/types/auth';

	export let data;

	console.log(data);

	if (data.session !== undefined) {
		isUserLoaded.set(true);

		if (data.session?.user && data.dbUser) {
			authUser.set(data.session.user as AuthUser);
			dbUser.set(data.dbUser);
		} else {
			authUser.set(null);
			dbUser.set(null);
		}
	}
</script>

<Nav githubStargazersCount={data.githubStargazersCount} />

<slot />
