<script lang="ts" context="module">
	import type PhotoViewModel from '$types/photoViewModel';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	export let photo: PhotoViewModel;

	$: animation = 'img-zoom-in';

	let isFirstAppearance = true;
	let itemRef: HTMLImageElement;
	let viewPortHeight: number;

	onMount(() => {
		viewPortHeight = document.documentElement.clientHeight;
		console.log(viewPortHeight);
	});
	export const isInFrame = () => {
		if (itemRef && isFirstAppearance) {
			if (itemRef.getBoundingClientRect().top < viewPortHeight && animation !== 'image-zoom-out') {
				animation = 'img-zoom-out';
				isFirstAppearance = false;
			} else {
				animation = 'img-zoom-in';
			}
		}
	};
	$: isLandscape = () => {
		let _isLandscape: string = 'max-width:80vw';
		console.log(itemRef);
		if (itemRef) {
			let width = itemRef.getBoundingClientRect().width;
			let height = itemRef.getBoundingClientRect().height;
			console.log(width / height);
			if (width / height < 1) {
				_isLandscape = 'max-height:80vh';
			}
		}
		return _isLandscape;
	};
</script>

{#if photo}
	<div class="box">
		<img src={photo.uri} alt={photo.title} bind:this={itemRef} class="zoom {animation} fade-in"/>
	</div>
{/if}

<style>
	
	.img-zoom-in {
		transform: scale(1.03);
	}
	.img-zoom-out {
		transform: scale(1);
	}
	.box {
		overflow: hidden;
		display: inline-block;
		height: 70vh;
	}
	.zoom {
		max-width: 100%;
		max-height: 100%;
		display: block;
		transition: transform ease-in 600ms;
		transform-origin: center;
	}
</style>
