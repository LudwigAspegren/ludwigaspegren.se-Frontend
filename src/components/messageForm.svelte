<script lang="ts">
	import type MessageViewModel from '$types/message';
import { isEmpty } from '$utils/utils';
	import { createEventDispatcher } from 'svelte';
	export let message: MessageViewModel = {} as MessageViewModel;
	const dispatch = createEventDispatcher();
	const submit = () => dispatch('submit');
</script>

<div on:keyup={e => e.key === "Enter" && submit()}>
	<p>Title</p>
	<input type="text" bind:value={message.title} placeholder="title" />
	<p>Message</p>
	<input type="text" bind:value={message.message} placeholder="message" />
	<button disabled={isEmpty(message)} on:click={submit}>Submit</button>
</div>

<style>
	input {
		width: 100%;
	}
</style>
