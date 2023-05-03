<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ PageBySlug } = data);

	$: home = $PageBySlug.data?.pages[0];
</script>

<svelte:head>
	<title>Michael Nelson</title>
</svelte:head>

<div class="container mx-auto p-8 lg:p-16 space-y-8">
	<div class="flex flex-col md:flex-row justify-center items-center w-full">
		<div class="md:pr-8">
			<Avatar src="./michael-nelson-profile-close.jpg" width="w-24" />
		</div>
		<h1 class="flex pt-8 md:pt-0">
			<span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>WebDev.</span
			>
			<span
				class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
			>
				Full</span
			>
			<span
				class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
				>Stack.</span
			>
		</h1>
	</div>

	<div class="leading-loose tracking-wide prose dark:text-surface-200 max-w-none">
		<p>
			I like building modern websites with discrete frontends and APIs. Wordpress is a
			client-favorite API with a low learning curve. I recommend Directus when possible. Next.js
			(and the React ecosystem) is the generally-preferred frontend for large projects. I like to
			use SvelteKit where possible. The most important thing is realizing the project. Whichever
			tools/ecosystems/languages are needed, I'm excited to dig in.
		</p>
		<p>
			For each of my solo-clients, I manage the full stack (backend, frontend, database, backups).
			My preferred stack is generally LEMP, but I'm preferring Caddy in lieu of Nginx lately
			(LCMP?). I try to containerize with Docker as much as possible to keep projects unified and
			recreatable.
		</p>

		<p>
			Aside from web development, I'm interested in: app development, home automation, 3D printing,
			soldering (arduinos, drones, speakers, etc.), woodworking, and audio engineering.
		</p>
	</div>

	<!-- <section>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section> -->
</div>
