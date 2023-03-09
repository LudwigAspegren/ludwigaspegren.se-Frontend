<script lang="ts">
  import { onMount } from 'svelte'

  let moving = ''

  onMount(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'scroll')
  })

  interface link {
    name: string
    url: string
    width: string
    itemRef?: HTMLAnchorElement
  }

  let link: link | undefined
  let image: HTMLDivElement
  let heading: HTMLHeadingElement

  let links: link[] = [
    {
      name: 'photos',
      url: 'https://live.staticflickr.com/65535/51782603466_0ae79f254b_k.jpg',
      width: '70vw'
    }
    // {
    //   name: 'visualisation',
    //   url: 'https://live.staticflickr.com/65535/51811013310_efa0f759cf_k.jpg',
    //   width: '70vw'
    // },
    // {
    //   name: 'modelling',
    //   url: 'https://live.staticflickr.com/65535/51810035699_7c4c0f9264_k.jpg',
    //   width: '100vw'
    // }
  ]

  const animate = async (e: Event) => {
    let currentRef = e.target as Element
    link = links.find((l) => currentRef.id === l.name)
    for (const ref of links.map((l) => l.itemRef)) {
      if (e.type === 'mouseenter') {
        if (ref !== currentRef) {
          ref?.classList.add('move-links')
        }
      } else {
        ref?.classList.remove('move-links')
      }
    }

    if (e.type === 'mouseenter') {
      heading.classList.add('move-text')
      image.classList.add('move-image')
    } else {
      heading.classList.remove('move-text')
      image.classList.remove('move-image')
    }
    await new Promise((resolve) => setTimeout(resolve, 10000))
  }
</script>

<svelte:head>
  <title>Ludwig Aspegrén</title>
</svelte:head>

<section>
  <h1 class="{moving} transition" bind:this={heading}>
    Ludwig
    <br />
    Aspegrén
  </h1>
  <div id="links">
    {#each links as link}
      <a
        id={link.name}
        class="{moving} transition"
        href="/{link.name}/"
        bind:this={link.itemRef}
        on:mouseenter={animate}
        on:mouseleave={animate}>{link.name}</a
      >
    {/each}
  </div>
</section>
<div class="image-box transition-image" bind:this={image}>
  <img src={link?.url} style="width:{link?.width}" alt="hej" />
</div>

<style>
  .image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    opacity: 0;
    transform-origin: center;
    transform: translate(0, -110vh);
    z-index: 0;
  }
  .transition {
    transition: transform cubic-bezier(0.61, 1, 0.88, 1) 1000ms,
      opacity cubic-bezier(0.61, 1, 0.88, 1) 1000ms, color cubic-bezier(0.61, 1, 0.88, 1) 1000ms;
  }
  .transition-image {
    transition: transform cubic-bezier(0.61, 1, 0.88, 1) 1000ms,
      opacity cubic-bezier(0.32, 0, 0.67, 0) 600ms;
  }
  .move-text {
    opacity: 0.2;
    transform: translate(0, calc(5vh));
  }
  .move-links {
    opacity: 0.2;
    transform: translate(calc(2vh), 0);
  }
  .move-image {
    opacity: 0.8;
    transform: translate(0, -105vh);
  }
  img {
    pointer-events: none;
    width: 100%;
    min-width: 1000px;
  }
  #links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    grid-row: 2 / span 2;
    grid-column: 4;
  }
  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    place-items: center;
    height: 100vh;
    margin: 24px;
  }
  h1 {
    font-size: 6rem;
    grid-row: 2 / span 2;
  }
  a {
    font-size: rem;
    font-weight: 700;
    z-index: 1;
  }
  a:hover {
    pointer-events: all;
    opacity: 0.7;
  }
</style>
