<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/contact.json');
		if (res.ok) {
			const { contact } = await res.json();
			return {
				props: {
					contact
				}
			};
		}
	};
</script>

<script>
	import PageContainer from '$lib/components/shared/PageContainer.svelte';
	import { PORTFOLIO_NAME } from '$lib/utils/constants';

	export let contact;

	const { email, phone, instagram } = contact;
</script>

<svelte:head>
	<title>Contact | {PORTFOLIO_NAME}</title>
</svelte:head>

<PageContainer>
	<div
		class="tw-full-page-mobile lg:tw-full-page-desktop mx-auto flex max-w-md flex-col justify-center space-y-6 font-heading text-5xl lg:space-y-12 lg:text-7xl"
	>
		<div class="self-start">
			<a href={`mailto:${email}`} class="tw-transition hover:text-highlight">Email</a>
		</div>
		<div class="self-end">
			<a href={`tel:${phone}`} class="tw-transition hover:text-highlight">Phone</a>
		</div>
		<div class="self-start">
			<a href={`${instagram}`} class="tw-transition hover:text-highlight">Instagram</a>
		</div>
	</div>
</PageContainer>
