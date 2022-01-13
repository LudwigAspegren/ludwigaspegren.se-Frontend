<script context="module" lang="ts">
  import { photosets } from '$stores/flickrStore'
  import '../app.css'
  export async function load({ session }: any) {
    photosets.set(session.response)
    return {}
  }
</script>

<slot />
