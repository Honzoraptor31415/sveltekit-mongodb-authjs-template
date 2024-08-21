<script>
	import BlurryBackground from '$lib/components/ui/BlurryBackground.svelte';
	import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
	import SvelteKitIcon from '$lib/icons/skill-icons/SvelteKitIcon.svelte';
	import MongoDBIcon from '$lib/icons/skill-icons/MongoDBIcon.svelte';
	import AuthjsIcon from '$lib/icons/skill-icons/AuthjsIcon.svelte';
</script>

<header class="flex items-center justify-center min-h-[100svh]">
	<BlurryBackground />
	<div class="flex flex-col items-center gap-6 header-content">
		<h1 class="flex gap-3 items-center flex-wrap justify-center">
			<div class="flex gap-3 items-center">
				<span>SvelteKit</span>
				<SvelteKitIcon iconClass="max-h-8 w-auto" />
			</div>
			+
			<div class="flex gap-3 items-center">
				<span>MongoDB</span>
				<MongoDBIcon iconClass="max-h-8 w-auto" />
			</div>
			+
			<div class="flex gap-3 items-center">
				<span>Auth.js</span>
				<AuthjsIcon iconClass="max-h-8 w-auto" />
			</div>
		</h1>
		<div class="flex gap-4">
			<a
				href="https://github.com/new?template_name=sveltekit-mongodb-authjs-template&template_owner=Honzoraptor31415"
				class="button primary-button">Use template</a
			>
			<a
				href="https://github.com/Honzoraptor31415/sveltekit-mongodb-authjs-template/"
				class="button secondary-button flex items-center gap-2"
			>
				<GitHubIcon iconClass="max-h-5 w-auto" />
				<span>View GitHub</span>
			</a>
		</div>
	</div>
</header>

<main></main>
