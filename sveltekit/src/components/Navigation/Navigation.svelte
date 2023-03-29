<script lang="ts">
	import type { MenuLinks$result } from '$houdini';
	import { drawerStore } from '@skeletonlabs/skeleton';

	export let menuLinks: MenuLinks$result['menu_links'] | undefined;

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4 h-full">
	<ul class="h-full flex flex-col justify-center gap-12">
		{#if menuLinks}
			{#each menuLinks as menuLink}
				<li class="font-thin tracking-wider flex justify-center">
					<a
						href={menuLink.url}
						on:click={drawerClose}
						data-sveltekit-preload-code
						data-sveltekit-preload-data
					>
						<span class="py-16 px-4">
							{menuLink.label}
						</span>
					</a>
				</li>
			{/each}
		{/if}
	</ul>
</nav>
