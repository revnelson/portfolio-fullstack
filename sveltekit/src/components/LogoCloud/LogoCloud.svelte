<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import type { Logos$result } from '$houdini';

	export let logos: Logos$result['logos'] | null | undefined;
</script>

{#if logos}
	<div
		class="logo-cloud [&>.logo-item]:bg-surface-200-700-token grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0.5 mx-auto md:max-w-[70%]"
	>
		{#each logos as brand}
			<a
				class="logo-item overflow-hidden w-full aspect-[2] flex justify-center items-center group hover:bg-gray-300 dark:hover:bg-gray-200"
				href={brand.url}
				target="_blank"
			>
				<img
					class=" m-4 w-full h-full max-w-[80%] max-h-[80%] grayscale group-hover:grayscale-0 object-contain"
					src={`${PUBLIC_API_URL}/assets/${brand.logo?.id}`}
					alt={brand.logo?.title}
				/>
			</a>
		{/each}
	</div>
{/if}
