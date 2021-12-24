<script lang="ts">
	import Image from '$components/image.svelte';
import InputField from '$components/inputField.svelte';
	import { photo } from '$stores/flickrStore';
	import { onMount } from 'svelte';

	let ref;
    onMount(()=> {
        console.log("hej")
        console.log(ref)
    })
</script>



<button on:click="{() => ref.focus()}">
	Focus field
</button>