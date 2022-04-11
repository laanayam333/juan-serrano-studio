<script>
	import LinksDesktop from '$lib/components/LinksDesktop.svelte';
	import LogoSquare from '../logos/LogoSquare.svelte';
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-transparent px-3 lg:h-24 lg:px-12"
>
	<div class="w-10 lg:w-16">
		<a href="/">
			<LogoSquare />
		</a>
	</div>

	<LinksDesktop />
</nav>
