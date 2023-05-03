<script lang="ts">
	import { Avatar, ProgressRadial } from '@skeletonlabs/skeleton';
	import { PUBLIC_API_URL } from '$env/static/public';

	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ Projects } = data);
</script>

<svelte:head><title>Projects - M. Nelson</title></svelte:head>

{#if $Projects.fetching}
	<div class="h-screen -m-16 flex justify-center items-center">
		<ProgressRadial value={undefined} />
	</div>
{:else if $Projects.data?.projects}
	<div class="grid md:grid-cols-2 gap-4 p-8">
		{#each $Projects.data.projects as project}
			<div class="rounded overflow-hidden bg-surface-100-800-token">
				<div class="px-4 py-5 sm:px-6">
					<div class="flex flex-col md:flex-row justify-center md:justify-start items-center">
						{#if project.logo}
							<div class="flex-shrink-0 md:mr-4">
								<Avatar
									background="bg-transparent"
									class="w-12 rounded-full"
									src={`${PUBLIC_API_URL}/assets/${project.logo.id}`}
									alt=""
								/>
							</div>
						{/if}
						<div class="flex items-center mt-4 md:mt-0">
							<h3 class="text-base font-semibold text-token">
								{project.title}
							</h3>
						</div>
					</div>
				</div>
				<div class="short-description p-4 text-center">{project.short_description}</div>
				<div class="links relative p-4">
					<div class="info flex justify-center">
						<a
							href={`/projects/${project.slug}`}
							class="btn variant-filled-primary no-underline"
							data-sveltekit-preload-code
							data-sveltekit-preload-data
						>
							View details
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}
