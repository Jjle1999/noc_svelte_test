import { writable } from "svelte/store";

export const session = writable();
export const csrf_name = writable();
export const csrf_token = writable();