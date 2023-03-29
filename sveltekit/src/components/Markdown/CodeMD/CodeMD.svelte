<script lang="ts">
	import { Accordion, AccordionItem, CodeBlock, storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import hljs_svelte from 'highlightjs-svelte';
	import 'highlight.js/styles/github-dark.css';

	hljs_svelte(hljs);
	storeHighlightJs.set(hljs);

	export let lang: string;
	export let text: string;

	const show = lang.split('_').length > 1 ? lang.split('_')[1] === 'show' : false;
</script>

<div class="not-prose">
	{#if show}
		<CodeBlock code={text} language={lang.split('_')[0]} />
	{:else}
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width={1.5}
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
						/>
					</svg>
				</svelte:fragment>
				<svelte:fragment slot="summary">View code...</svelte:fragment>
				<svelte:fragment slot="content">
					<CodeBlock code={text} language={lang.split('_')[0]} />
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	{/if}
</div>
