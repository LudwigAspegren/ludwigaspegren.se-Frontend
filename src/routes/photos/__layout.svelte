<script context="module" lang="ts">
  import Footer from '$components/footer.svelte'
  import Navigation from '$components/navigation.svelte'
</script>

<main>
  <Navigation />
  <section>
    <div class="main">
      <slot />
    </div>
    <div class="secondary" />
  </section>
  <Footer />
</main>

<style>
  main {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }
  .main {
    background-color: white;
    /* border-bottom: 10px solid rgba(202, 202, 202, 0.527); */
    padding-bottom: 20px;
    min-height: 100vh;
    pointer-events: visible;
    /* box-shadow: 0 4px 50px 0px rgba(1, 1, 1, 0.5); */
  }
  .secondary {
    height: 150px;
    pointer-events: none;
  }
  section {
    z-index: 3;
    pointer-events: none;
  }
</style>
