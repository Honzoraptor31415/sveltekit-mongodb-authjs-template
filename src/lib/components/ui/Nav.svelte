<script>
	import { githubUrl } from '$lib/constants';
	import StarIcon from '$lib/icons/StarIcon.svelte';
	import { authUser, dbUser, isUserLoaded } from '$lib/stores/user';

	export let githubStargazersCount = 0;
</script>

<nav class="flex justify-between items-center">
	<a href="/#" class="grid">
		<img src="/logo.svg" alt="Logo" class="max-h-20 w-auto" />
	</a>
	<div class="flex items-center gap-2 nav-buttons">
		<a href={githubUrl} class="button secondary-button flex items-center gap-2">
			<StarIcon />
			{githubStargazersCount}
		</a>
		{#if $isUserLoaded}
			{#if $authUser && $dbUser}
				<button class="primary-button font-[500]">Sign out</button>
			{:else}
				<a class="button secondary-button font-[500]" href="/signin">Sign in</a>
				<a class="button primary-button font-[500]" href="/signup">Sign up</a>
			{/if}
		{:else}
			<button class="primary-button font-[500]" disabled>Loading...</button>
		{/if}
	</div>
</nav>
