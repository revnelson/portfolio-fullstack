<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { ProjectBySlug$result } from '$houdini';
	import CodeMd from '$components/Markdown/CodeMD';
	import LogoCloud from '$components/LogoCloud';
	import Github from '$icons/Github.svelte';

	export let project: ProjectBySlug$result['projects'][0] | null | undefined;
</script>

<div class="project">
	<div class="flex items-center justify-between">
		<h2 class="title py-8 flex items-center">
			{project?.title}
			<a href={project?.url} class="px-4 py-2" target="_blank" title={`Visit ${project?.title}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
					/>
				</svg>
			</a>
		</h2>
		{#if project?.github}
			<a href={project?.github} title="View code on Github" target="_blank">
				<Github
					class="w-8 fill-token border-2 rounded-full border-surface-300-600-token hover:!border-primary-500 transition-all"
				/>
			</a>
		{/if}
	</div>

	<!-- Description -->
	{#if project?.description}
		<div class="description [&>p]:mt-5 [&>.custom-code]:mt-5 max-w-none dark:text-white">
			<SvelteMarkdown source={project.description} renderers={{ code: CodeMd }} />
		</div>
	{/if}

	<!-- Skill cloud -->
	{#if project?.skills}
		<div class="skills p-8 mt-8 border-t border-surface-500-400-token">
			<LogoCloud logos={project.skills.map((skill) => skill?.item)} />
		</div>
	{/if}
</div>

<style global lang="postcss">
	:global(.prose code:not(.code-block-code)) {
		@apply py-1 px-2 mx-1 rounded-sm bg-surface-500/20 text-primary-700-200-token;
	}
	:global(.prose code::before) {
		@apply hidden;
	}
	:global(.prose code::after) {
		@apply hidden;
	}
</style>
