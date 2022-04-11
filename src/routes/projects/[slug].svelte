<script context="module">
	export const load = async ({ fetch, params }) => {
		const { slug } = params;
		const res = await fetch(`/projects/${slug}.json`);
		if (res.ok) {
			const { project } = await res.json();
			return {
				props: { project }
			};
		} else {
			return {
				props: { project: null }
			};
		}
	};
</script>

<script>
	import PageContainer from '$lib/components/shared/PageContainer.svelte';
	import DetailsContainer from '$lib/components/project/DetailsContainer.svelte';
	import DetailsLabel from '$lib/components/project/DetailsLabel.svelte';
	import DetailsValue from '$lib/components/project/DetailsValue.svelte';
	import ProjectTitle from '$lib/components/project/ProjectTitle.svelte';
	import ProjectDescription from '$lib/components/project/ProjectDescription.svelte';
	import Carousel from '$lib/components/project/Carousel.svelte';

	export let project;

	const {
		title,
		materials,
		year,
		price,
		description,
		coverImage: { url: coverImageUrl, alt: coverImageAlt },
		images
	} = project;
</script>

<svelte:head>
	<title>{title} | Juan Serrano Studio</title>
</svelte:head>

<PageContainer>
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
		<div class="col-span-1 flex items-center justify-center">
			<img src={coverImageUrl} alt={coverImageAlt} class="w-full" />
		</div>
		<div class="col-span-1">
			<div>
				<ProjectTitle>{title}</ProjectTitle>
				<ProjectDescription>
					{description}
				</ProjectDescription>
			</div>
			<div class="mt-4 divide-y divide-gray-200 lg:mt-6">
				<DetailsContainer>
					<DetailsLabel>Materiales</DetailsLabel>
					<DetailsValue>{materials}</DetailsValue>
				</DetailsContainer>
				<DetailsContainer>
					<DetailsLabel>Year</DetailsLabel>
					<DetailsValue>{year}</DetailsValue>
				</DetailsContainer>
				<DetailsContainer>
					<DetailsLabel>Price</DetailsLabel>
					<DetailsValue>From {price}</DetailsValue>
				</DetailsContainer>
			</div>
		</div>
	</div>

	<div
		class="mx-auto mt-16 max-w-7xl columns-1 gap-4 space-y-4 pb-28 sm:columns-2 md:columns-3 lg:mt-24 lg:columns-4 lg:gap-6 lg:space-y-6"
	>
		{#each images as { url, alt }}
			<div class="break-inside-avoid">
				<img src={url} {alt} />
			</div>
		{/each}
	</div>
</PageContainer>
