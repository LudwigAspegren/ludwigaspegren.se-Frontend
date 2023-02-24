<script lang="ts">
  import { page } from '$app/stores'
  import PageTransition from '$components/PageTransition.svelte'
  import type { LayoutData } from '../$types'
  export let data: LayoutData
  let url = $page.url.pathname
</script>

<PageTransition {url}>
  <slot />
</PageTransition>
