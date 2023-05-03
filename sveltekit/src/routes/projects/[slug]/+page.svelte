<script lang="ts">
	import Project from '$components/Project';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ ProjectBySlug } = data);

	$: project = $ProjectBySlug.data?.projects[0];

	ProjectBySlug;
</script>

<svelte:head>
	<title>
		{`${project?.title ? project.title : 'Project'} - M. Nelson`}
	</title>
</svelte:head>

<div class="container p-8">
	{#if $ProjectBySlug.fetching}
		<div class="h-screen -m-32 flex justify-center items-center">
			<ProgressRadial value={undefined} />
		</div>
	{:else if project}
		<Project {project} />
	{:else}
		<div class="m-8">Project not found...</div>
	{/if}
</div>
