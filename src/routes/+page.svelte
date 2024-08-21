<script>
	import BlurryBackground from '$lib/components/ui/BlurryBackground.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
</script>

<header class="flex items-center justify-center min-h-[100svh]">
	<BlurryBackground />
	<div class="flex flex-col items-center gap-6 header-content">
		<h1 class="text-center">SvelteKit + MongoDB + Auth.js</h1>
		<div class="flex gap-4">
			<a
				href="https://github.com/new?template_name=sveltekit-mongodb-authjs-template&template_owner=Honzoraptor31415"
				class="button primary-button">Use template</a
			>
			<a
				href="https://github.com/Honzoraptor31415/sveltekit-mongodb-authjs-template/"
				class="button secondary-button flex items-center gap-2"
			>
				<GitHub iconClass="max-h-5 w-auto" />
				<span>View GitHub</span>
			</a>
		</div>
	</div>
</header>
