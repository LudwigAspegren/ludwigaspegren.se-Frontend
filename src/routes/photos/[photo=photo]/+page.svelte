<script lang="ts">
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
</script>

<svelte:head>
  <title>{data.currentPhoto.title}</title>
</svelte:head>

<section>
  {#if !isEmpty(data.currentPhoto)}
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="javascript:history.back()">
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
