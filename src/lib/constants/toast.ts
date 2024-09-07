import type { ToastOptions } from 'svelte-french-toast';

export const toastOptions = {
	position: 'bottom-center',
	style:
		'background: var(--sec-bg); color: white; border: 1px var(--main-border-color) solid; border-radius: var(--main-border-radius)'
} as ToastOptions;
