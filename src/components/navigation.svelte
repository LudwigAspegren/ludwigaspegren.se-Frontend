<script lang="ts">
  import { page } from '$app/stores'
</script>

<section>
  {#each $page.data.photosets as photoset}
    <a href="/archive" class="fade-in">{photoset.title}</a>
  {/each}
</section>

<style>
  section {
    padding: 16px;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  a {
    transition: border-bottom var(--transition-short) ease-in;
    border-bottom: 2px solid rgba(40, 40, 40, 0);
  }
  a:hover {
    border-bottom: 2px solid rgba(40, 40, 40, 0.2);
  }
</style>
