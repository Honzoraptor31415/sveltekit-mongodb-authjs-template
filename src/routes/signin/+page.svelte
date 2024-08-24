<script>
	import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
</script>

<form action="/signin" method="post">
	<input type="hidden" name="providerId" value="github" />
	<button type="submit" class="primary-button"
		>Sign in <GitHubIcon iconClass="max-h-6 w-auto" /></button
	>
</form>
