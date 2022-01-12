<script lang="ts">
  import { photosets } from '$stores/flickrStore'
  import type PhotoViewModel from '$types/photoViewModel'
  import { changeAlbumQuality } from '$utils/utils'
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'

  const randomSelection = <T extends unknown>(n: number, originalArray: Array<T>): Array<T> => {
    let random: Array<T> = []
    if (n >= originalArray.length) {
      return originalArray
    }
    for (let i = 0; i < n; i++) {
      let newElem = originalArray[Math.floor(Math.random() * originalArray.length)]
      while (random.includes(newElem)) {
        newElem = originalArray[Math.floor(Math.random() * originalArray.length)]
      }
      random.push(newElem)
    }
    return random
  }
  let numberOfPhotos = 20
  let numberOfplacements = 90 - 3

  let placement: Array<PhotoViewModel | undefined | string> = new Array(numberOfplacements).fill(
    undefined
  )

  let positions: Array<number> = Array.from(Array(numberOfplacements + 1).keys())
  let randomPositions: Array<number> = []

  let directions: Array<string> = ['glide-up', 'glide-down', 'glide-left', 'glide-right']

  let photos: PhotoViewModel[] = get(photosets)
    .map((ps) => {
      return ps.photos
    })
    .flat()
  let randomPhotos: Array<PhotoViewModel | string>
  onMount(() => {
    randomPhotos = randomSelection(numberOfPhotos, photos)
    randomPhotos = changeAlbumQuality('t', randomPhotos as Array<PhotoViewModel>)
    randomPositions = randomSelection(numberOfPhotos, positions)
    for (const [i, element] of randomPositions.entries()) {
      placement[element] = randomPhotos[i]
    }
    placement[Math.floor(Math.random() * numberOfplacements)] = ''
    console.log('hej')
  })
</script>

<svelte:head>
  <title>Photos</title>
</svelte:head>

<section>
  {#each placement as object}
    {#if object === undefined}
      <div class="child" />
    {:else if typeof object === 'string'}
      <h1>Ludwig Aspegrén</h1>
    {:else}
      <div class="child">
        <a href="/photos/{object.album}/{object.id}">
          <img src={object?.uri} alt={object?.title} class={randomSelection(1, directions)[0]} />
        </a>
      </div>
    {/if}
  {/each}
</section>

<style>
  h1 {
    font-size: 2rem;
    grid-column: span 3;
    white-space: nowrap;
  }
  img {
    max-height: 110%;
    max-width: 110%;
    transform-origin: center;
    transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 600ms,
      opacity cubic-bezier(0.075, 0.82, 0.165, 1) 600ms;
    transform: scale(1);
  }
  img:hover {
    transform: scale(0.9);
    opacity: 0.7;
  }
  section {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(9, 1fr);
    place-items: center;
    gap: 1rem;
    padding: 100px;
    box-sizing: border-box;
    height: 100%;
  }
  @keyframes glide-up {
    from {
      transform: translate(0, 5px);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes glide-down {
    from {
      transform: translate(0, -5px);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes glide-left {
    from {
      transform: translate(-5px, 0);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes glide-right {
    from {
      transform: translate(5px, 0);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .child {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
  }
  .glide-up {
    animation: glide-up 600ms cubic-bezier(0, 0.55, 0.45, 1),
      appear 700ms cubic-bezier(0.61, 1, 0.88, 1);
    animation-fill-mode: backwards;
    animation-delay: 300ms;
  }
  .glide-down {
    animation: glide-down 600ms cubic-bezier(0, 0.55, 0.45, 1),
      appear 700ms cubic-bezier(0.61, 1, 0.88, 1);
    animation-fill-mode: backwards;
    animation-delay: 300ms;
  }
  .glide-left {
    animation: glide-left 600ms cubic-bezier(0, 0.55, 0.45, 1),
      appear 700ms cubic-bezier(0.61, 1, 0.88, 1);
    animation-fill-mode: backwards;
    animation-delay: 300ms;
  }
  .glide-right {
    animation: glide-right 600ms cubic-bezier(0, 0.55, 0.45, 1),
      appear 700ms cubic-bezier(0.61, 1, 0.88, 1);
    animation-fill-mode: backwards;
    animation-delay: 300ms;
  }
</style>
