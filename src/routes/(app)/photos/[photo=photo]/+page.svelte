<script lang="ts">
  import { afterNavigate, goto } from '$app/navigation'
  import { changePhotoQuality, checkImgLoading, isEmpty, qualities } from '$utils/utils'
  import { onMount } from 'svelte'
  import type { PageData } from './$types'

  export let data: PageData
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
  onMount(() => {
    let img = document.body.querySelector('img')
    if (img != null) checkImgLoading(img)
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'scroll')
  })
  const goBack = () => {
    if (browser) {
      goto(previousPage, { replaceState: true })
    }
  }

  import { browser } from '$app/environment'
  import { base } from '$app/paths'

  let previousPage: string = base
  console.log(base)

  afterNavigate(({ from }) => {
    previousPage = from?.url.pathname || '/archive'
  })
</script>

<svelte:head>
  <title>{data.currentPhoto.title}</title>
</svelte:head>

<section>
  {#if !isEmpty(data.currentPhoto)}
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={goBack}>
      <img
        class="loading"
        src={changePhotoQuality(qualities.medium, data.currentPhoto).uri}
        alt={data.currentPhoto.title}
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
