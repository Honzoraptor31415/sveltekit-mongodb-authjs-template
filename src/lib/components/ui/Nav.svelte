<script>
	import { authUser, dbUser, isUserLoaded } from '$lib/stores/user';
</script>

<nav class="flex justify-between items-center">
	<a href="/#" class="grid">
		<img src="/logo.svg" alt="Logo" class="max-h-20 w-auto" />
	</a>
	<div class="flex items-center gap-2">
		{#if $isUserLoaded}
			{#if $authUser && $dbUser}
				<button class="primary-button font-[500]">Sign out</button>
			{:else}
				<button class="primary-button font-[500]">Sign up</button>
				<button class="secondary-button font-[500]">Sign in</button>
			{/if}
		{:else}
			<button class="primary-button" disabled>Loading...</button>
		{/if}
	</div>
</nav>
