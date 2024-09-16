<script lang="ts">
	export let id: string;
	export let title: string;
	export let text: string;
	export let date: number;
	export let userId: string;

	const displayedDate = new Date(date).getUTCDate();
</script>

<div class="flex gap-2 flex-col">
	<div class="flex justify-between">
		<h3>{title}</h3>
		<p class="text-gray-500 text-sm">{displayedDate}</p>
	</div>
	<p>{text}</p>
</div>
