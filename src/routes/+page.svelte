<script lang="ts">
	import BlurryBackground from '$lib/components/ui/BlurryBackground.svelte';
	import { githubUrl } from '$lib/constants/app';
	import GitHubIcon from '$lib/icons/socials/GitHubIcon.svelte';
	import AuthjsIcon from '$lib/icons/skill-icons/AuthjsIcon.svelte';
	import MongoDbIcon from '$lib/icons/skill-icons/MongoDBIcon.svelte';
	import SvelteKitIcon from '$lib/icons/skill-icons/SvelteKitIcon.svelte';
	import PlusIcon from '$lib/icons/ui/PlusIcon.svelte';
	import FormElement from '$lib/components/form/FormElement.svelte';
	import { defaultCheck } from '$lib/form-validation';
	import type { ApiResponse } from '$lib/types/app';
	import toast, { type ToastOptions } from 'svelte-french-toast';
	import { toastOptions } from '$lib/constants/toast';

	const newPostForm = {
		title: '',
		text: ''
	};

	let newPostFormChecks = {
		title: defaultCheck,
		text: defaultCheck
	};

	async function createNewPost(e: SubmitEvent) {
		e.preventDefault();

		const response = await fetch('api/post', {
			method: 'POST',
			body: JSON.stringify(newPostForm)
		});

		const data = (await response.json()) as ApiResponse;

		console.log(data);

		if (data.message && !data.ok) {
			toast.error(data.message, toastOptions);
		} else if (data.message && data.ok) {
			toast.success(data.message, toastOptions);
		}

		if (data.checks) {
			newPostFormChecks = data.checks;
		} else {
			newPostFormChecks.title = defaultCheck;
			newPostFormChecks.text = defaultCheck;
		}
	}
</script>

<svelte:head>
	<title>SvelteKit + MongoDB + Auth.js template</title>
</svelte:head>

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
	<section id="new" class="flex justify-center">
		<form on:submit={createNewPost} class="card flex flex-col gap-4 align-center">
			<h2 class="text-center">Create post</h2>
			<FormElement
				inputType="text"
				bind:value={newPostForm.title}
				labelValue={newPostFormChecks.title.isValid ? 'Title' : newPostFormChecks.title.message}
				id="title"
				isValid={newPostFormChecks.title.isValid}
			/>
			<FormElement
				inputType="textarea"
				bind:value={newPostForm.text}
				labelValue={newPostFormChecks.text.isValid ? 'Text' : newPostFormChecks.text.message}
				id="text"
				isValid={newPostFormChecks.text.isValid}
			/>
			<button type="submit" class="primary-button flex gap-2 items-center justify-center"
				>Create <PlusIcon iconClass="max-h-3 w-auto" /></button
			>
		</form>
	</section>
</main>
