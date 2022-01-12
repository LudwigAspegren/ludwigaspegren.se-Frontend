<script context="module" lang="ts">
  import CommentSection from '$components/CommentSection.svelte';
  import Image from '$components/image.svelte';
  import { photosets } from '$stores/flickrStore';
  import type PhotosetViewModel from '$types/photosetViewModel';
  import type PhotoViewModel from '$types/photoViewModel';
  import { getPhoto, getPhotoset, isEmpty } from '$utils/utils';
  import { get } from 'svelte/store';
  export async function load({ page }: any) {
    let ps = get(photosets);
    let currentPhotoset = getPhotoset(page.params.photoset, ps);
    let currentPhoto = getPhoto(page.params.photo, currentPhotoset.photos);
    return { props: { currentPhotoset, currentPhoto } };
  }
</script>

<script lang="ts">
  export let currentPhoto: PhotoViewModel;
  export let currentPhotoset: PhotosetViewModel;
  let showInfo = false;
  let showComments = false;
  $: {
    if (!isEmpty(currentPhotoset)) {
      setTimeout(() => {
        showInfo = true;
      }, 1000);
      setTimeout(() => {
        showComments = true;
      }, 2000);
    }
  }
</script>

<svelte:head>
  <title>{currentPhoto.title}</title>
</svelte:head>
<section>
  {#if !isEmpty(currentPhoto)}
    {#if showInfo}
      <h1 class="fade-in">
        {currentPhoto.title}
      </h1>
    {:else}
      <h1>&nbsp;</h1>
    {/if}
    <Image photo={currentPhoto} height="70vh" />
    {#if showInfo}
      <div>
        <p class="image-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum pariatur illo laboriosam
          fugiat inventore odit totam molestiae ut rerum! Velit inventore eum perspiciatis autem
          error magnam dignissimos, sunt odio accusamus.
        </p>
      </div>
    {/if}
  {/if}
  {#if showComments}
    <CommentSection />
  {/if}
</section>

<style>
  @keyframes clear {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }
  h1 {
    width: var(--content-width);
  }
  .image-description {
    animation-fill-mode: backwards;
    animation: clear ease-in var(--transition-long);
    margin-top: 60px;
    width: var(--content-width);
    display: inline-block;
  }
  section {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
