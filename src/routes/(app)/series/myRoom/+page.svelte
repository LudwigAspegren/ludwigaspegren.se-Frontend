<script lang="ts">
  import type { PageData } from './$types'

  let zoomedIn = false
  const zoom = () => (zoomedIn = !zoomedIn)

  export let data: PageData
</script>

<svelte:head>
  <title>My Room</title>
</svelte:head>

<main class="grid place-items-center h-screen {zoomedIn ? ' bg-[rgb(50,50,50)]' : 'bg-white'}">
  <div />
  <div
    class="flex flex-1 flex-row max-h-full overflow-y-hidden {zoomedIn
      ? 'gap-x-32 px-32'
      : 'gap-x-0 px-4'}
    "
    id="hide"
    on:click={zoom}
    on:keydown={zoom}
  >
    {#each data.myRoom.photos as photo}
      <img
        src={photo.uri}
        alt={photo.title}
        class="w-fit {zoomedIn ? ' h-full' : 'md:w-36 md:overflow-visible'}"
      />{/each}
  </div>
  {#if !zoomedIn}
    <h2 class=" self-start">My Room</h2>
  {/if}
</main>

<style>
  main {
    transition: background-color 1000ms;
    max-height: 100vh;
  }
  #hide::-webkit-scrollbar {
    display: none;
  }
  #hide {
    scrollbar-width: none;
  }
</style>
