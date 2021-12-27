<script lang="ts">
	import type MessageViewModel from '$types/message';
	import { createEventDispatcher } from 'svelte';
	let message: MessageViewModel = {} as MessageViewModel;
	const dispatch = createEventDispatcher();
</script>

<form on:submit|preventDefault={() => dispatch('send', message)}>
	<p>Title</p>
	<input type="text" bind:value={message.title} placeholder="title" />
	<p>Message</p>
	<input type="text" bind:value={message.message} placeholder="message" />
	<button type="submit">Submit</button>
</form>

<style>
	input {
		width: 100%;
	}
</style>
