import type { AuthUser } from '$lib/types/auth';
import type { DbUser } from '$lib/types/db';
import { writable } from 'svelte/store';

const authUser = writable<AuthUser>();
const dbUser = writable<DbUser>();
const isUserLoaded = writable<boolean>(true);

export { authUser, dbUser, isUserLoaded };
