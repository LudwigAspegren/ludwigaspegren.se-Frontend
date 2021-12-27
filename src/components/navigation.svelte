<script lang="ts">
	import { photosets } from '$stores/flickrStore';
</script>

<section>
	{#each $photosets as photoset}
		<a href="/{photoset.title}" class="fade-in">{photoset.title}</a>
	{/each}
</section>

<style>
	section {
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
