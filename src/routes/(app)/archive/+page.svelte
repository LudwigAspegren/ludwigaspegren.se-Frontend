<script lang="ts">
  import type PhotosetViewModel from '$types/photosetViewModel'
  import type { PageData } from './$types'
  export let data: PageData
  let currentPhotoset: PhotosetViewModel | null = null
  let photos: HTMLAnchorElement[] = []
  let photosetDivs: HTMLDivElement[] = []
  let colors = ['text-red-300', 'text-blue-300', 'text-yellow-300', 'text-orange-300']
  const color = colors[Math.floor(Math.random() * colors.length)]
  const hoverPhotoset = (photoset: PhotosetViewModel | null) => () => {
    currentPhotoset = photoset
  }
  const highlightPhotos = () => {
    let c = color
    for (const i in photos) {
      if (currentPhotoset && data.photos[i].album == currentPhotoset.id) {
        photos[i].classList.add(color)
      } else {
        photos[i].classList.remove(color)
      }
    }
  }
  $: {
    highlightPhotos(), currentPhotoset
  }
</script>

<main class="mx-auto  px-4 max-w-6xl py-4">
  <div class="flex flex-row flex-wrap justify-between  pb-4">
    {#each data.photosets as photoset, index}
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <div
        class="hover:{color}"
        on:mouseenter={hoverPhotoset(photoset)}
        bind:this={photosetDivs[index]}
        on:mouseleave={hoverPhotoset(null)}
        on:touchstart={hoverPhotoset(photoset)}
      >
        {photoset.title}
      </div>
    {/each}
  </div>
  <div class="flex flex-row flex-wrap gap-2 mx-auto">
    {#if photos}
      {#each data.photos as photo, index}
        <a href="/photos/{photo.id}" bind:this={photos[index]}>{photo.title}</a>
      {/each}
    {/if}
  </div>
</main>
