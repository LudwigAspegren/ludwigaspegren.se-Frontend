<script lang="ts">
  import { page } from '$app/stores'
  import PageTransition from '$components/PageTransition.svelte'
  let url = $page.url.pathname
</script>

<PageTransition {url}>
  <slot />
</PageTransition>
