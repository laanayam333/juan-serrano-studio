<script context="module">
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
	import Header from '$lib/components/navigation/Header.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import PageTransition from '$lib/components/shared/PageTransition.svelte';
	import '../app.css';
	export let url;
</script>

<div class="overflow-hidden px-4 lg:px-6">
	<Header />

	<PageTransition {url}>
		<slot />
	</PageTransition>

	<Footer />
</div>
