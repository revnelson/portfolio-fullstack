<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { ProjectBySlug$result } from '$houdini';
	import CodeMd from '$components/Markdown/CodeMD';
	import LogoCloud from '$components/LogoCloud';

	export let project: ProjectBySlug$result['projects'][0] | null | undefined;
</script>

<div class="project">
	<h2 class="title py-8">{project?.title}</h2>

	<!-- Description -->
	{#if project?.description}
		<div class="description prose prose-neutral max-w-none dark:text-white">
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
