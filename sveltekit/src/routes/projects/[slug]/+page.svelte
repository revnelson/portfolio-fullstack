<script lang="ts">
	import Project from '$components/Project';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ ProjectBySlug } = data);

	$: project = $ProjectBySlug.data?.projects[0];
</script>

<svelte:head>
	<title>
		{`${project?.title ? project.title : 'Project'} - M. Nelson`}
	</title>
</svelte:head>

<div class="container">
	{#if project}
		<Project {project} />
	{:else}
		<div class="m-8">Project not found...</div>
	{/if}
</div>
