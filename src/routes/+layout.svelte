<script>
	import Nav from '$lib/components/ui/Nav.svelte';
	import './tailwind.css';
	import './styles.css';
	import { authUser, isUserLoaded } from '$lib/stores/user';

	export let data;

	console.log(data.session);

	if (data.session !== undefined) {
		isUserLoaded.set(true);

		if (data.session?.user) {
			authUser.set(data.session.user);
		}
	}
</script>

<Nav githubStargazersCount={data.githubStargazersCount} />

<slot />
