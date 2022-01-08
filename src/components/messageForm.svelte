<script lang="ts">
	import type MessageViewModel from '$types/message';
	import { isEmpty } from '$utils/utils';
	import { createEventDispatcher } from 'svelte';
	export let message: MessageViewModel = {} as MessageViewModel;
	const dispatch = createEventDispatcher();
	const submit = () => {
		dispatch('submit');
		submitted = false;
	};

	let submitted = false;
</script>

<form class:submitted on:submit|preventDefault={submit}>
	<p>Title</p>
	<input type="text" bind:value={message.title} placeholder="title" />
	<p>Message</p>
	<input type="text" bind:value={message.message} placeholder="message" />
	<button disabled={isEmpty(message)} on:click={() => (submitted = true)}>Submit</button>
</form>

<style>
	input {
		width: 100%;
	}
	.submitted input:invalid {
		border: 1px solid #c00;
		content: '';
	}
</style>

