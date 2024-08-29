<script lang="ts">
	export let id: string;
	export let labelValue: string;
	export let isValid: boolean;
	export let inputType: 'text' | 'textarea';
	export let value: string;
	export let placeholder = labelValue;
</script>

<div class="form-element flex gap-1 flex-col {!isValid ? 'invalid-form-element' : ''}">
	<label for={id} class="text-sm">{labelValue}</label>
	{#if inputType === 'text'}
		<input {placeholder} type="text" bind:value {id} />
	{:else if inputType === 'textarea'}
		<textarea {id} bind:value {placeholder}></textarea>
	{/if}
</div>
