import type { AuthUser } from '$lib/types/auth';
import type { DbUser } from '$lib/types/db';
import { writable } from 'svelte/store';

const authUser = writable<AuthUser | null>();
const dbUser = writable<DbUser | null>();
const isUserLoaded = writable<boolean>(false);

export { authUser, dbUser, isUserLoaded };
