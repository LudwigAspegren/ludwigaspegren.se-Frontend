<script lang="ts">
  import { onMount } from 'svelte'
  let mainElement: HTMLElement

  let xScroll: number
  let yScroll: number

  function parseScroll() {
    xScroll = mainElement.scrollLeft
    yScroll = mainElement.scrollTop
  }
  onMount(() => {})
</script>

<main bind:this={mainElement} on:scroll={parseScroll}>
  <div />
  {yScroll}
</main>

<style>
  main {
    height: 200vh;
  }
</style>
