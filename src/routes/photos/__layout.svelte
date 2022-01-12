<script context="module" lang="ts">
  import Footer from '$components/footer.svelte';
  import Navigation from '$components/navigation.svelte';
</script>

<main>
  <Navigation />
  <section>
    <slot />
  </section>
  <Footer />
</main>

<style>
  main {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }
  section {
    flex: 1;
  }
</style>
