import type MessageViewModel from "$types/message";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const messages : Writable<MessageViewModel[]> = writable([])