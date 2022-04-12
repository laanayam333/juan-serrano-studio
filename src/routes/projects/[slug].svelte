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
	<div class="mx-auto grid max-w-5xl grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-0">
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
			<div class="mt-4 divide-y divide-gray-200 md:mt-6">
				<DetailsContainer>
					<DetailsLabel>Materiales</DetailsLabel>
					<DetailsValue>{materials}</DetailsValue>
				</DetailsContainer>
				<DetailsContainer>
					<DetailsLabel>Año</DetailsLabel>
					<DetailsValue>{year}</DetailsValue>
				</DetailsContainer>
				<DetailsContainer>
					<DetailsLabel>Precio</DetailsLabel>
					<DetailsValue>Desde €{price}</DetailsValue>
				</DetailsContainer>
			</div>
		</div>
	</div>

	<div class="mx-auto mt-16 max-w-4xl lg:mt-24">
		<Carousel {images} />
	</div>
</PageContainer>
