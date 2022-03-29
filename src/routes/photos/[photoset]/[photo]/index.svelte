<script context="module" lang="ts">
  import { photosets } from '$stores/flickrStore'
  import type PhotoViewModel from '$types/photoViewModel'
  import {
    changePhotoQuality,
    checkImgLoading,
    getPhoto,
    getPhotoset,
    isEmpty,
    qualities
  } from '$utils/utils'
  import { onMount } from 'svelte/internal'
  import { get } from 'svelte/store'
  export async function load({ params, session }: any) {
    photosets.set(session.response)
    let ps = get(photosets)
    let currentPhotoset = getPhotoset(params.photoset, ps)
    let currentPhoto = getPhoto(params.photo, currentPhotoset.photos)
    return { props: { currentPhotoset, currentPhoto } }
  }
</script>

<script lang="ts">
  export let currentPhoto: PhotoViewModel
  onMount(() => {
    let img = document.body.querySelector('img')
    if (img != null) checkImgLoading(img)
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'scroll')
  })
</script>

<svelte:head>
  <title>{currentPhoto.title}</title>
</svelte:head>

<section>
  {#if !isEmpty(currentPhoto)}
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="javascript:history.back()">
      <img
        class="loading"
        src={changePhotoQuality(qualities.medium, currentPhoto).uri}
        alt={currentPhoto.title}
        loading="lazy"
      />
    </a>
  {/if}
</section>

<style>
  .loading {
    visibility: hidden;
  }
  section {
    position: fixed;
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
  }
  img {
    max-height: 100vh;
    max-width: 100vw;
  }
</style>
