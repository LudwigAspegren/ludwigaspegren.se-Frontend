<script context="module" lang="ts">
  // throw new Error(
  //   '@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)'
  // )

  // import ImageModule from '$components/image.svelte'
  // import { photosets } from '$stores/flickrStore'
  // import type PhotosetViewModel from '$types/photosetViewModel'
  // import { changeAlbumQuality, getPhotoset, isEmpty, qualities } from '$utils/utils'
  // import { get } from 'svelte/store'

  // export async function load({ params }: any) {
  //   let ps = get(photosets)
  //   let currentPhotoset = getPhotoset(params.photoset, ps)
  //   return { props: { currentPhotoset } }
  // }
</script>

<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
  import Image from '$components/image.svelte'
  import { changeAlbumQuality, isEmpty, qualities } from '$utils/utils'
  import type { PageData } from './$types'
  export let data: PageData
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
          // ref.isInFrame()
        }
      }
    }
  }, 100)
</script>

<svelte:window on:scroll={onScroll} />

<svelte:head>
  <title>{data.currentPhotoset.title}</title>
</svelte:head>

{#if !isEmpty(data.currentPhotoset)}
  <div class="center">
    <h1 style="translate">
      {data.currentPhotoset.title}
    </h1>
    <h1 class="outlined">
      {data.currentPhotoset.title}
    </h1>
  </div>
  <section>
    {#each changeAlbumQuality(qualities.medium, data.currentPhotoset.photos) as photo, index}
      <a href="/photos/{photo.id}" class="items" id="image-{index}">
        <Image {photo} bind:this={images[index]} />
      </a>
    {/each}
    <div id="div-1" />
    <div id="div-2" />
    <div id="div-3" />
  </section>
{/if}

<style>
  a {
    display: inline-flex;
  }
  section {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    column-gap: 10px;
    padding: 0 300px 0 300px;
    padding-top: 200px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  h1 {
    position: fixed;
    font-weight: 800;
    z-index: 0;
    font-size: 3rem;
  }
  .outlined {
    color: rgba(0, 0, 0, 0);
    z-index: 2;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--text-color);
  }
  #image-0 {
    grid-row-start: 2;
    grid-column-start: span 3;
    place-self: end;
  }
  #image-1 {
    grid-row-start: 2;
    grid-column-start: span 2;
    place-self: end;
  }
  #image-2 {
    grid-row-start: 9;
    grid-column-start: 6;
    grid-column-end: 8;
  }
  #image-3 {
    grid-area: 1 / 3;

    place-self: end;
  }
  #image-4 {
    place-self: start;
    grid-row-start: 2;
    grid-column-end: 9;
    grid-column-start: span 2;
  }
  #image-5 {
    place-self: end;
    grid-row-start: 4;
    grid-column-start: span 2;
    grid-column-end: 6;
  }
  #image-6 {
    grid-row-start: 4;
    grid-column-start: span 3;
    grid-column-end: 9;
  }
  #image-7 {
    grid-row-start: 4;
    grid-column: span 2;
  }
  #image-8 {
    grid-row-start: 7;
    grid-column-start: 3;
    grid-column-end: 7;
  }
  #image-9 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 7;
    align-self: start;
  }
  #image-10 {
    grid-area: 5;
  }
  #image-11 {
    grid-area: 5;
  }
  #image-12 {
    grid-area: 5;
  }
  #image-13 {
    grid-area: 5;
  }
  #div-1 {
    grid-row-start: 3;
    height: 150px;
  }
  #div-2 {
    grid-row-start: 6;
    height: 150px;
  }
  #div-3 {
    grid-row-start: 8;
    height: 150px;
  }
</style>
