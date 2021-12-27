<script lang="ts">
	import MessageForm from '$components/messageForm.svelte';
	import { messages } from '$stores/messageStore';
	const submitMessage = (e: CustomEvent) => {
		$messages = [...$messages, e.detail];
	};
	let isShown = false;
	const showMessageForm = () => {
		isShown = true;
	};
</script>

<section class="fade-in">
	<h2>Comments</h2>
	{#each $messages as message}
		<div class="message">
			<h6>{message.title}</h6>
			<p>{message.message}</p>
		</div>
	{/each}
	{#if !isShown}
		<button on:click={() => showMessageForm()}>Comment</button>
	{:else}
		<div class="form fade-in">
			<MessageForm on:send={(e) => submitMessage(e)} />
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}
	h2 {
		width: var(--content-width);
	}
	.message {
		/* background-color: rgb(247, 247, 247); */
		/* border-radius: 5pt; */
		width: var(--content-width);
		padding: 4px 12px 4px 12px;
		margin: 0px;
		border-bottom: solid 1px rgb(245, 245, 245);
	}
	.form {
		width: var(--content-width);
	}
</style>
