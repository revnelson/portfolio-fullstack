<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	import CodeMD from '$components/Markdown/CodeMD';
	import '$styles/pages.css';

	import type { PageData } from './$types';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	export let data: PageData;

	$: ({ PageBySlug } = data);

	$: page = $PageBySlug.data?.pages[0];
</script>

<svelte:head>
	<title>
		{`${page?.title ? page.title : 'Page'} - M. Nelson`}
	</title>
</svelte:head>

<div class="api-page p-8">
	{#if $PageBySlug.fetching}
		<div class="h-screen -m-32 flex justify-center items-center">
			<ProgressRadial value={undefined} />
		</div>
	{:else if page?.id}
		<!-- <h2 class="dark:text-white">{page.title}</h2> -->

		{#if page?.description}
			<div class={page.slug}>
				<SvelteMarkdown source={page.description} renderers={{ code: CodeMD }} />
			</div>
		{/if}
	{:else}
		<main
			class="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8"
		>
			<p class="text-base font-semibold leading-8 text-secondary-600-300-token">404</p>
			<h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
			<p class="mt-6 text-base leading-7 text-gray-600">
				Sorry, I couldn't find the page you're looking for.
			</p>
			<div class="mt-10">
				<a href="/" class="text-sm font-semibold leading-7">
					<span aria-hidden="true">&larr;</span> Back to home
				</a>
			</div>
		</main>
	{/if}
</div>
