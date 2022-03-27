<script lang="ts" context="module">
  import type PhotoViewModel from '$types/photoViewModel'
  import { onMount } from 'svelte/internal'
</script>

<script lang="ts">
  export let photo: PhotoViewModel
  export let height: string
  let scale = 1

  $: animation = 'img-zoom-in'
  let isFirstAppearance = true
  let itemRef: HTMLImageElement
  let viewportHeight: number
  let xValue: number
  let originalOffsetHeight: number
  onMount(() => {
    viewportHeight = document.documentElement.clientHeight
    originalOffsetHeight = itemRef.getBoundingClientRect().top
    itemRef.getBoundingClientRect().bottom
  })

  export const isInFrame = () => {
    if (itemRef.parentElement !== null) {
      if (
        itemRef.parentElement.getBoundingClientRect().top > 30 &&
        itemRef.parentElement.getBoundingClientRect().bottom < viewportHeight - 30
      ) {
        itemRef.classList.add('anim')
      } else {
        itemRef.classList.remove('anim')
      }
    }
  }
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
  /* .img-zoom-in {
    transform: scale(1.03);
  }
  .img-zoom-out {
    transform: scale(1);
  } */
  .box {
    /* overflow: hidden; */
    display: inline-block;
    height: 70vh;
    transition: transform cubic-bezier(0.37, 0, 0.63, 1) 10ms;
  }
  .zoom {
    max-width: 100%;
    max-height: 100%;
    display: block;
    transition: transform cubic-bezier(0.65, 0, 0.35, 1) 300ms;
    transform-origin: center;
  }
  .anim {
    transform: scale(1.05);
  }
</style>
