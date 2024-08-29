<script>
	import Nav from '$lib/components/ui/Nav.svelte';
	import './tailwind.css';
	import './styles.css';
	import { authUser, dbUser, isUserLoaded } from '$lib/stores/user';

	export let data;

	console.log(data);

	if (data.session !== undefined) {
		isUserLoaded.set(true);

		if (data.session?.user && data.dbUser) {
			authUser.set(data.session.user);
			dbUser.set(data.dbUser);
		}
	}
</script>

<Nav githubStargazersCount={data.githubStargazersCount} />

<slot />
