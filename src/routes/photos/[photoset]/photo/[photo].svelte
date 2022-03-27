<script context="module" lang="ts">
  import { photosets } from '$stores/flickrStore'
  import type PhotoViewModel from '$types/photoViewModel'
  import { changePhotoQuality, getPhoto, getPhotoset, isEmpty } from '$utils/utils'
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'
  export async function load({ params, session }: any) {
    photosets.set(session.response)
    let ps = get(photosets)
    let currentPhotoset = getPhotoset(params.photoset, ps)
    let currentPhoto = changePhotoQuality('k', getPhoto(params.photo, currentPhotoset.photos))
    // let currentPhoto = getPhoto(params.photo, currentPhotoset.photos)
    return { props: { currentPhotoset, currentPhoto } }
  }
</script>

<script lang="ts">
  export let currentPhoto: PhotoViewModel
  onMount(() => {
    document.body.style.overflow = 'hidden'
    let img = document.querySelector('img')
    if (img != null) img.addEventListener('load', removeLoadingClass)
    function removeLoadingClass() {
      if (img != null) {
        img.classList.remove('loading')
        img.classList.add('fade-in')
      }
    }
    // window.onload = function () {
    //   let img = document.querySelector('img')
    //   if (img != null) {
    //     img.classList.add('js-loading')
    //     img.onload = function () {
    //       if (img != null) img.style.remove('js-loading')
    //     }
    //   }
    // }
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
      <img class="loading" src={currentPhoto.uri} alt={currentPhoto.title} loading="lazy" />
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
