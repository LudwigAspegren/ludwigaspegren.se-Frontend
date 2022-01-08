<script lang="ts">
	import MessageForm from '$components/messageForm.svelte';
	import type MessageViewModel from '$types/message';
	import { afterUpdate, beforeUpdate } from 'svelte';
	let messagess: MessageViewModel[] = [];
	const handleSubmit = () => {
		messagess = [...messagess, message];
		message = {} as MessageViewModel;
		requestAnimationFrame(() => window.scrollTo(0, y + 100));
		return true;
	};
	let isShown = false;
	const showMessageForm = () => {
		isShown = true;
	};

	let message: MessageViewModel;
	let div: any;
	let autoscroll: any;
	let y: number;
	let height: number;
	let inHeight: number;
	beforeUpdate(() => {
		console.log('updated');
		// autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;x
	});

	afterUpdate(() => {
		// if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});
</script>

<svelte:window bind:scrollY={y} bind:outerHeight={height} bind:innerHeight={inHeight} />

<section class="fade-in">
	<h2>Comments</h2>
	{#each messagess as message}
		<div class="message">
			<h6>{message.title}</h6>
			<p>{message.message}</p>
		</div>
	{/each}
	{#if !isShown}
		<div>
			<button on:click={() => showMessageForm()}>Comment</button>
		</div>
	{:else}
		<div class="form fade-in" bind:this={div}>
			<MessageForm on:submit={handleSubmit} bind:message />
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
	div {
		width: var(--content-width);
	}
</style>
