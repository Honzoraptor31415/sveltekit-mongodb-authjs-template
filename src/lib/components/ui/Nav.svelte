<script>
	import { githubUrl } from '$lib/constants';
	import CrossIcon from '$lib/icons/ui/CrossIcon.svelte';
	import MenuIcon from '$lib/icons/ui/MenuIcon.svelte';
	import PlusIcon from '$lib/icons/ui/PlusIcon.svelte';
	import StarIcon from '$lib/icons/ui/StarIcon.svelte';
	import { authUser, dbUser, isUserLoaded } from '$lib/stores/user';

	export let githubStargazersCount = 0;

	let isMobileNavShown = false;
</script>

<nav class="flex justify-between items-center desktop">
	<a href="/#" class="logo-text">Template</a>
	<div class="flex items-center gap-2 nav-buttons">
		<a href={githubUrl} class="button secondary-button flex items-center gap-2">
			<StarIcon />
			{githubStargazersCount}
		</a>
		{#if $isUserLoaded}
			{#if $authUser && $dbUser}
				<form action="/signout" method="post">
					<button class="secondary-button" type="submit">Sign out</button>
				</form>
				<a href="/#new" class="button primary-button flex gap-2 items-center justify-center"
					>Create <PlusIcon iconClass="max-h-3 w-auto" /></a
				>
			{:else}
				<a class="button secondary-button" href="/signin">Sign in</a>
				<a class="button primary-button" href="/signup">Sign up</a>
			{/if}
		{:else}
			<button class="primary-button" disabled>Loading...</button>
		{/if}
	</div>
</nav>

<nav class="flex justify-between items-center mobile">
	<a href="/#" class="logo-text">Template</a>
	<button
		class="grid no-style p-0"
		on:click={() => {
			isMobileNavShown = !isMobileNavShown;
		}}
	>
		{#if isMobileNavShown}
			<CrossIcon iconClass="max-h-6 w-auto" />
		{:else}
			<MenuIcon iconClass="max-h-6 w-auto" />
		{/if}
	</button>
</nav>

<div
	class="fixed mobile mobile-nav-content z-10"
	style="bottom: {isMobileNavShown ? '0px' : '-100vh'}"
>
	<div class="grid grid-cols-2 items-center gap-4 nav-buttons m-4">
		{#if $isUserLoaded}
			{#if $authUser}
				<a href="/#new" class="button primary-button flex gap-2 items-center justify-center"
					>Create <PlusIcon iconClass="max-h-3 w-auto" /></a
				>
				<form action="/signout" method="post">
					<button class="secondary-button font-[500] w-full" type="submit">Sign out</button>
				</form>
			{:else}
				<a class="button secondary-button font-[500] text-center" href="/signin">Sign in</a>
				<a class="button primary-button font-[500] text-center" href="/signup">Sign up</a>
			{/if}
		{:else}
			<button class="primary-button font-[500]" disabled>Loading...</button>
		{/if}
	</div>
</div>
