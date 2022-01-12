<script lang="ts" context="module">
  import type PhotoViewModel from '$types/photoViewModel';
  import { onMount } from 'svelte';
</script>

<script lang="ts">
  export let photo: PhotoViewModel;
  export let height: string;
  let scale = 1;

  $: animation = 'img-zoom-in';
  let isFirstAppearance = true;
  let itemRef: HTMLImageElement;
  let viewportHeight: number;
  let xValue: number;
  let originalOffsetHeight: number;

  // f(x)=-x (x-1)
  onMount(() => {
    viewportHeight = document.documentElement.clientHeight;
    originalOffsetHeight =
      itemRef.getBoundingClientRect().top - itemRef.getBoundingClientRect().bottom;
    console.log(originalOffsetHeight);
    console.log(viewportHeight);
  });

  export const isInFrame = () => {
    let center = (itemRef.getBoundingClientRect().bottom + itemRef.getBoundingClientRect().top) / 2;
    if (
      center - originalOffsetHeight / 2 < viewportHeight &&
      center + originalOffsetHeight / 2 > 0
    ) {
      let y =
        (itemRef.getBoundingClientRect().top / (viewportHeight - originalOffsetHeight)) * 2 - 1;
      // scale = (Math.sin(2*y*Math.PI - Math.PI/2)+9)/8
      // console.log(scale);
      // console.log(y);
      console.log(scale);
      // console.log(center);
    }
    // let y =
    // 	((viewportHeight + - (itemRef.getBoundingClientRect().top + originalOffsetHeight / 2)) /
    // 		(viewportHeight- originalOffsetHeight)) *
    // 	2;
    // if (y < 2 && y > 0) {
    // 	y -= 1;
    // 	scale = ((1 + y * y) * (1 - y * y)) / 3 + 1;
    // 	console.log(y);
    // }

    // if (itemRef && isFirstAppearance) {
    // 	if (itemRef.getBoundingClientRect().top < viewPortHeight && animation !== 'image-zoom-out') {
    // 		xValue = (itemRef.getBoundingClientRect().top - viewPortHeight) / viewPortHeight;
    // 		console.log(xValue);
    // 		animation = 'img-zoom-out';
    // 		isFirstAppearance = false;
    // 	} else {
    // 		animation = 'img-zoom-in';
    // 	}
    // }
  };
  // $: isLandscape = () => {
  // 	let _isLandscape: string = 'max-width:80vw';
  // 	console.log(itemRef);
  // 	if (itemRef) {
  // 		let width = itemRef.getBoundingClientRect().width;
  // 		let height = itemRef.getBoundingClientRect().height;
  // 		console.log(width / height);
  // 		if (width / height < 1) {
  // 			_isLandscape = 'max-height:80vh';
  // 		}
  // 	}
  // 	return _isLandscape;
  // };
</script>

{#if photo}
  <div class="box" style="height:{height}; transform:scale({scale})">
    <img src={photo.uri} alt={photo.title} bind:this={itemRef} class="zoom {animation} fade-in" />
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
    transition: transform cubic-bezier(0.37, 0, 0.63, 1) 10ms;
  }
  .zoom {
    max-width: 100%;
    max-height: 100%;
    display: block;
    transition: transform ease-in var(--transition-long);
    transform-origin: center;
  }
</style>
