<script context="module" lang="ts">
	import { page } from '$app/stores';
	import Image from '$components/image.svelte';
	import { photosets } from '$stores/flickrStore';
	import type PhotosetViewModel from '$types/photosetViewModel';
	import type PhotoViewModel from '$types/photoViewModel';
	import { getFlickrObject, isEmpty } from '$utils/utils';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let currentPhotoset: PhotosetViewModel = {} as PhotosetViewModel;
	let currentPhoto: PhotoViewModel = {} as PhotoViewModel;
	let isShown = false;
	$: currentPhotoset = getFlickrObject($page.params.photoset, $photosets);
	$: {
		console.log(isEmpty(currentPhotoset));
		if (!isEmpty(currentPhotoset)) {
			currentPhoto = getFlickrObject($page.params.photo, currentPhotoset.photos);
			setTimeout(() => {
				isShown = true;
			}, 1000);
		}
	}
</script>

<svelte:head>
	<title>{currentPhoto.title}</title>
</svelte:head>
<section>
	{#if !isEmpty(currentPhoto)}
		{#if isShown}
			<h1 class="fade-in">
				{currentPhoto.title}
			</h1>
			{:else}
			<h1>
				&nbsp;
			</h1>
		{/if}
		<Image photo={currentPhoto} />
		{#if isShown}
			<div>
				<p class="image-description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum pariatur illo laboriosam
					fugiat inventore odit totam molestiae ut rerum! Velit inventore eum perspiciatis autem
					error magnam dignissimos, sunt odio accusamus.
				</p>
			</div>
		{/if}
	{/if}
</section>

<style>
	@keyframes clear {
		from {
			opacity: 0.1;
		}
		to {
			opacity: 1;
		}
	}
	h1 {
		width: 35rem;
	}
	.image-description {
		animation-fill-mode: backwards;
		animation: clear ease-in 500ms;
		margin-top: 60px;
		width: 35rem;
		display: inline-block;
	}
	section {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
