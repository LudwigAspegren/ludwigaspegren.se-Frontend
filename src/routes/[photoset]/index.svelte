<script context="module" lang="ts">
	import { page } from '$app/stores';
	import Image from '$components/image.svelte';
	import { photosets } from '$stores/flickrStore';
	import type PhotosetViewModel from '$types/photosetViewModel';
	import { getFlickrObject, isEmpty } from '$utils/utils';
	import { beforeUpdate } from 'svelte';
</script>

<script lang="ts">
	let images: Image[] = [];
	let scrolling = false;
	const onScroll = () => {
		scrolling = true;
	};
	setInterval(() => {
		if (scrolling) {
			scrolling = false;
			for (const ref of images) {
				if (ref != null) {
					ref.isInFrame();
				}
			}
		}
	}, 10);

	let currentPhotoset: PhotosetViewModel = {} as PhotosetViewModel;
	$: currentPhotoset = getFlickrObject($page.params.photoset, $photosets);
	$: console.log(images);
</script>

<svelte:window on:scroll={onScroll} />

<svelte:head>
	<title>{currentPhotoset.title}</title>
</svelte:head>

{#if !isEmpty(currentPhotoset)}
	<div class="center">
		<h1 style="translate">
			{currentPhotoset.title}
		</h1>
	</div>
	<section>
		{#each currentPhotoset.photos as photo, index}
			<a sveltekit:prefetch href="{$page.path}/{photo.title}" class="items">
				<Image {photo} bind:this={images[index]} />
			</a>
		{/each}
	</section>
{/if}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 60vh;
	}
	.center{
		display: flex;
		justify-content: center;
	}
	h1{
		width: 35rem;
	}
</style>
