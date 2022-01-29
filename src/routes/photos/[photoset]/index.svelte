<script context="module" lang="ts">
  import type Image from '$components/image.svelte'
  import { photosets } from '$stores/flickrStore'
  import type PhotosetViewModel from '$types/photosetViewModel'
  import { getPhotoset, isEmpty } from '$utils/utils'
  import { onMount } from 'svelte'
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
        }
      }
    }
  }, 100)
  export let currentPhotoset: PhotosetViewModel

  let imageUri: string
  let imageTitle: string
  let imageRef: HTMLImageElement
  let observer: IntersectionObserver
  onMount(() => {
    if (!!window.IntersectionObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              imageUri = (entry.target as HTMLAnchorElement).id
              imageTitle = (entry.target as HTMLAnchorElement).text
              imageRef.style.animation = 'none'
              window.requestAnimationFrame(function () {
                imageRef.style.animation = ' opacity 600ms ease-in 0ms both'
              })
              imageRef = imageRef.console.log(imageRef)
            }
          }
        },
        { rootMargin: '400px', threshold: 0.5 }
      )
      document.querySelectorAll('.image-title').forEach((a) => {
        observer.observe(a)
      })
    }
  })

  // let options = {
  //   root: document.querySelector('#scrollArea'),
  //   rootMargin: '0px',
  //   threshold: 1.0
  // }

  // let observer = new IntersectionObserver(callback, options)
  // let target = document.querySelector('#listItem')
  // if (target !== null) {
  //   observer.observe(target)
  // }
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
    <div class="image">
      <img src={imageUri} alt={imageTitle} bind:this={imageRef} />
    </div>
    <div class="image-column">
      {#each currentPhotoset.photos as photo}
        <a href="{currentPhotoset.id}/{photo.id}" id={photo.uri} class="image-title">
          <h1>{photo.title}</h1>
        </a>
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    grid-template-areas: '. images';
  }
  .image-column::-webkit-scrollbar {
    display: none;
  }
  .image-column {
    overflow-y: scroll;
    height: 70vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    grid-area: images;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  h1 {
    width: var(--content-width);
  }
  a {
    padding: 50% 0 50% 0;
    top: 0;
  }
  .image {
    display: grid;
    place-items: center;
    height: 100%;
  }

  img {
    opacity: 0.5;
    width: 600px;
  }
</style>
