<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/about.json');
		if (res.ok) {
			const { about } = await res.json();
			return {
				props: {
					about
				}
			};
		}
	};
</script>

<script>
	import PageContainer from '$lib/components/shared/PageContainer.svelte';
	import { PORTFOLIO_NAME } from '$lib/utils/constants';

	export let about;

	const {
		name,
		bio: { html: bio },
		profilePicture: { url: coverImageUrl, alt: coverImageAlt }
	} = about;
</script>

<svelte:head>
	<title>About | {PORTFOLIO_NAME}</title>
</svelte:head>

<PageContainer>
	<div
		class="tw-full-page-mobile lg:tw-full-page-desktop mx-auto grid max-w-5xl grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-12"
	>
		<div class="col-span-1 flex flex-col justify-center">
			<h1 class="font-heading text-3xl font-bold lg:text-5xl">
				{name}
			</h1>
			<div class="prose mt-6">
				{@html bio}
			</div>
		</div>
		<div class="col-span-1 flex items-center justify-center">
			<img src={coverImageUrl} alt={coverImageAlt} />
		</div>
	</div>
</PageContainer>
