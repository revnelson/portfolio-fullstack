<script lang="ts">
	import '../app.css';
	import '$styles/themes/crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';

	import {
		AppBar,
		AppShell,
		Avatar,
		Drawer,
		drawerStore,
		LightSwitch,
		ListBox,
		ListBoxItem,
		popup,
		storePopup,
		type PopupSettings
	} from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	let comboboxValue: string;

	import Navigation from '$components/Navigation';
	import Transition from '$components/Transition';
	import Github from '$icons/Github.svelte';

	import type { PageData } from './$houdini';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	export let data: PageData;

	function drawerOpen(): void {
		drawerStore.open();
	}

	$: ({ MenuLinks } = data);

	let popupSettings: PopupSettings = {
		// Set the event as: click | hover | hover-click | focus | focus-click
		event: 'click',
		// Provide a matching 'data-popup' value.
		target: 'github'
	};

	const openInNewTab = (url: string) => {
		browser && window.open(url, '_blank')?.focus();
	};
</script>

<Drawer width="w-64">
	<Navigation menuLinks={$MenuLinks.data?.menu_links} />
</Drawer>

<div class="card w-48 shadow-xl py-2 z-20" data-popup="github">
	<!-- Listbox -->
	<ListBox rounded="rounded">
		<ListBoxItem
			bind:group={comboboxValue}
			name="medium"
			value="ndott"
			on:click={() => {
				openInNewTab('https://github.com/nelson-tech');
			}}
		>
			<svelte:fragment slot="lead">
				<Avatar src="/logo-icon-padded.png" background="white" width="w-8 p-2" />
			</svelte:fragment>
			<div>nelson.tech</div>
		</ListBoxItem>
		<ListBoxItem
			bind:group={comboboxValue}
			name="medium"
			value="personal"
			on:click={() => {
				openInNewTab('https://github.com/revnelson');
			}}
		>
			<svelte:fragment slot="lead">
				<Avatar src="/michael-nelson-profile-close.jpg" width="w-8" />
			</svelte:fragment>
			<div class="ring-0 focus:ring-0">Personal</div>
		</ListBoxItem>
	</ListBox>
	<!-- Arrow -->
	<div class="arrow bg-surface-100-800-token" />
</div>

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
				class="md:text-lg lg:text-xl uppercase hover:text-primary-500-400-token py-2 px-0 sm:px-2 transition-all tracking-widest font-thin hover:font-bold hover:tracking-wide"
			>
				Michael Nelson
			</a>
			<svelte:fragment slot="trail">
				<LightSwitch rounded="rounded" />
				<div use:popup={popupSettings}>
					<Github
						class="w-8 fill-token border-2 rounded-full border-surface-300-600-token hover:!border-primary-500 transition-all cursor-pointer"
					/>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden lg:block h-full">
			<Navigation menuLinks={$MenuLinks.data?.menu_links} />
		</div>
	</svelte:fragment>

	<Transition refresh={data?.key}>
		<div class="max-w-7xl mx-auto">
			<slot />
		</div>
	</Transition>
</AppShell>
