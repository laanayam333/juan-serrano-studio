<script>
	import { navLinks } from '$lib/data/navigation';
	import { page } from '$app/stores';
</script>

<ul class="flex space-x-3 lg:space-x-12">
	{#each navLinks as { label, to }}
		<li class="font-subheading text-base uppercase lg:text-xl">
			<a
				href={to}
				class="tw-transition hover:text-highlight"
				class:active={$page.url.pathname == to}
			>
				{label}
			</a>
		</li>
	{/each}
</ul>
