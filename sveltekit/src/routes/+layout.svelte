<script lang="ts">
	import '../app.css';
	import '$styles/themes/crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';

	import { AppBar, AppShell, Drawer, drawerStore, LightSwitch } from '@skeletonlabs/skeleton';

	import Navigation from '$components/Navigation';
	import Transition from '$components/Transition';
	import Github from '$icons/Github.svelte';

	import type { PageData } from './$houdini';
	import { cache } from '$houdini';
	export let data: PageData;

	function drawerOpen(): void {
		drawerStore.open();
	}

	$: ({ MenuLinks } = data);

	cache.markStale();
</script>

<Drawer width="w-64">
	<Navigation menuLinks={$MenuLinks.data?.menu_links} />
</Drawer>

<AppShell
	regionPage="relative"
	slotPageHeader="sticky top-0 z-10 w-full opacity-50"
	slotSidebarLeft="bg-surface-500/5 w-0 lg:w-48"
>
	<svelte:fragment slot="header">
		<AppBar slotTrail="pr-4" shadow="shadow">
			<svelte:fragment slot="lead">
				<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button></svelte:fragment
			>
			<a
				href="/"
				class="md:text-lg lg:text-xl uppercase hover:text-primary-800-100-token transition-colors tracking-widest font-thin"
			>
				Michael Nelson
			</a>
			<svelte:fragment slot="trail">
				<LightSwitch rounded="rounded" />
				<a href="https://github.com/nelson-tech" target="_blank" title="Github">
					<Github
						class="w-8 fill-token border-2 rounded-full border-surface-300-600-token hover:!border-primary-500 transition-all"
					/>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden lg:block h-full">
			<Navigation menuLinks={$MenuLinks.data?.menu_links} />
		</div>
	</svelte:fragment>

	<Transition refresh={data?.key}>
		<div class="p-8 max-w-7xl mx-auto">
			<slot />
		</div>
	</Transition>
</AppShell>
