<script lang="ts">
  import { page } from '$app/stores'
  import { onMount } from 'svelte/internal'
  onMount(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'scroll')
  })
</script>

<main>
  <section>
    <h1>Visualisation</h1>
    <a href={$page.url.origin}>
      <img src="https://live.staticflickr.com/65535/51811013310_efa0f759cf_k.jpg" alt="hej" />
    </a>
  </section>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
  }
  section {
    width: 50vw;
    display: grid;
    height: 100%;
  }
  img {
    width: 100%;
  }
  h1 {
    margin: 0;
    padding: 1rem;
    box-sizing: border-box;
  }
</style>
