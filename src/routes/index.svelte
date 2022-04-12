<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/projects.json');
		if (res.ok) {
			const { projects } = await res.json();
			return {
				props: {
					projects
				}
			};
		}
	};
</script>

<script>
	import Hero from '$lib/components/home/Hero.svelte';
	import PageContainer from '$lib/components/shared/PageContainer.svelte';
	import { PORTFOLIO_NAME } from '$lib/utils/constants';

	export let projects;
</script>

<svelte:head>
	<title>Home | {PORTFOLIO_NAME}</title>
</svelte:head>

<PageContainer>
	<Hero />

	<div class="mx-auto mt-24 flex max-w-4xl flex-col items-center gap-y-24 uppercase">
		{#each projects as { title, coverImage, slug }}
			<div
				class="tw-transition group relative z-0 aspect-square w-64 text-center odd:ml-6 odd:rotate-3 even:mr-6 even:-rotate-3 hover:odd:rotate-0 hover:even:rotate-0 lg:w-96 lg:odd:ml-56 lg:even:mr-56"
			>
				<img src={coverImage.url} alt={coverImage.alt} class="tw-transition group-hover:scale-95" />
				<a
					class="tw-transition absolute inset-0 z-10 flex flex-col items-center justify-center text-black group-hover:scale-105 group-hover:text-highlight"
					href={`/projects/${slug}`}
				>
					<h2 class="font-heading text-4xl font-bold lg:text-7xl">
						{title}
					</h2>
				</a>
			</div>
		{/each}
	</div>
</PageContainer>
