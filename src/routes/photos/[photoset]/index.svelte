<script context="module" lang="ts">
  import { page } from '$app/stores'
  import Image from '$components/image.svelte'
  import { photosets } from '$stores/flickrStore'
  import type PhotosetViewModel from '$types/photosetViewModel'
  import { changeAlbumQuality, getPhotoset, isEmpty } from '$utils/utils'
  import { get } from 'svelte/store'

  export async function load({ params }: any) {
    let ps = get(photosets)
    let currentPhotoset = getPhotoset(params.photoset, ps)
    return { props: { currentPhotoset } }
  }
</script>

<script lang="ts">
  let images: Image[] = []
  let scrolling = false
  const onScroll = () => {
    scrolling = true
  }
  setInterval(() => {
    if (scrolling) {
      scrolling = false
      for (const ref of images) {
        if (ref != null) {
          ref.isInFrame()
        }
      }
    }
  }, 100)
  export let currentPhotoset: PhotosetViewModel
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
    {#each changeAlbumQuality('c', currentPhotoset.photos) as photo, index}
      <a sveltekit:prefetch href="{$page.url}/photo/{photo.id}" class="items">
        <Image height="50vh" {photo} bind:this={images[index]} />
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
    row-gap: 40vh;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  h1 {
    width: var(--content-width);
  }
</style>
