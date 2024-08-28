<script>
	import BlurryBackground from '$lib/components/ui/BlurryBackground.svelte';
	import { githubUrl } from '$lib/constants';
	import GitHubIcon from '$lib/icons/socials/GitHubIcon.svelte';
	import AuthjsIcon from '$lib/icons/skill-icons/AuthjsIcon.svelte';
	import MongoDbIcon from '$lib/icons/skill-icons/MongoDBIcon.svelte';
	import SvelteKitIcon from '$lib/icons/skill-icons/SvelteKitIcon.svelte';

	const newPostForm = {
		title: '',
		text: ''
	};

	async function createNewPost() {
		const response = await fetch('api/post', {
			method: 'POST',
			body: JSON.stringify(newPostForm)
		});

		const data = await response.json();

		console.log(response, data);
	}
</script>

<header class="flex items-center justify-center min-h-[100svh] relative">
	<BlurryBackground />
	<div class="flex flex-col items-center gap-6 header-content">
		<div class="flex gap-2">
			<SvelteKitIcon iconClass="max-h-9 w-auto" />
			<MongoDbIcon iconClass="max-h-9 w-auto" />
			<AuthjsIcon iconClass="max-h-9 w-auto" />
		</div>
		<h1 class="text-center">
			SvelteKit + MongoDB + Auth.js template to build your next project faster!
		</h1>
		<p class="text-lg text-gray-400 text-center">
			Start your next SvelteKit project with a fully functional database, API and user
			authentication.
		</p>
		<div class="flex gap-4">
			<a
				href="https://github.com/new?template_name=sveltekit-mongodb-authjs-template&template_owner=Honzoraptor31415"
				class="button primary-button font-[600]">Use template</a
			>
			<a href={githubUrl} class="button secondary-button flex items-center gap-2 font-[600]">
				<GitHubIcon iconClass="max-h-5 w-auto" />
				<span>View GitHub</span>
			</a>
		</div>
	</div>
</header>

<main>
	<section id="new">
		<form on:submit={createNewPost} class="card">
			<input type="text" bind:value={newPostForm.title} />
			<input type="text" bind:value={newPostForm.text} />
			<button type="submit" class="primary-button"></button>
		</form>
	</section>
</main>
