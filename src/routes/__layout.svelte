<script context="module">
	import Footer from '$components/footer.svelte';
	import Navigation from '$components/navigation.svelte';
	import '../app.css';
</script>

<Navigation/>
<section>
	<slot />
</section>
<Footer />

<style>
	section {
		min-height: 100vh;
	}
</style>
