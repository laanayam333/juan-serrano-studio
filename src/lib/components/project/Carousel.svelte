<script>
	import { scrollIntoView } from '$lib/helpers/scrollIntoView';

	export let images;
	export const getItemId = (index) => `carousel-item-${index}`;
</script>

<div>
	<ul
		class="before:[30vw] after:[30vw] no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto before:shrink-0 after:shrink-0 lg:gap-6"
	>
		{#each images as { url, alt }, index}
			<li id={getItemId(index)} class="shrink-0 snap-center shadow-lg">
				<img src={url} {alt} class="w-96 object-cover" />
			</li>
		{/each}
	</ul>

	<nav class="mt-4 lg:mt-6">
		<ul class="flex justify-center space-x-3">
			{#each images as { }, index}
				<li>
					<a
						href={`#${getItemId(index)}`}
						on:click|preventDefault={scrollIntoView}
						class={`text-2xl text-blue-500`}>•</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</div>
