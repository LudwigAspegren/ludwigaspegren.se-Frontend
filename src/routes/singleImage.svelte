<script lang="ts">
	import Image from '$components/image.svelte';
	import { photosets } from '$stores/flickrStore';
	let image: Image;
	$: console.log($photosets[0].photos[0]);
	let scrolling = false;
	const onScroll = () => {
		scrolling = true;
	};
	setInterval(() => {
		if (scrolling) {
			scrolling = false;
			image.isInFrame();
		}
	}, 10);
</script>

<svelte:window on:scroll={onScroll} />

<main>
	<h1>ludwigaspegrne</h1>
	<div style="height:150vh" />
	<Image photo={$photosets[0].photos[0]} height="30vh" bind:this={image} />
	<div style="height:150vh" />
</main>
