<script context="module" lang="ts">
	import Footer from '$components/footer.svelte';
	import Navigation from '$components/navigation.svelte';
	import { photosets } from '$stores/flickrStore';
	import '../app.css';
	export async function load({ page, session }: any) {
		photosets.set(session.response);
		return {};
	}
</script>

<Navigation />
<section>
	<slot />
</section>
<Footer />

<style>
	section {
		min-height: 100vh;
	}
</style>
