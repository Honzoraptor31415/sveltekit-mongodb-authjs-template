<script>
	import Nav from '$lib/components/ui/Nav.svelte';
	import './tailwind.css';
	import './styles.css';

	export let data;
</script>

<Nav githubStargazersCount={data.githubStargazersCount} />

<slot />
