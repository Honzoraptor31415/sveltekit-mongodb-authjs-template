<script>
	import GitHubIcon from '$lib/icons/socials/GitHubIcon.svelte';
	import GoogleIcon from '$lib/icons/socials/GoogleIcon.svelte';
</script>

<form action="/signin" method="post">
	<input type="hidden" name="providerId" value="github" />
	<button type="submit" class="primary-button"
		>Sign in <GitHubIcon iconClass="max-h-6 w-auto" /></button
	>
</form>

<form action="/signin" method="post">
	<input type="hidden" name="providerId" value="google" />
	<button type="submit" class="primary-button"
		>Sign in <GoogleIcon iconClass="max-h-6 w-auto" /></button
	>
</form>
