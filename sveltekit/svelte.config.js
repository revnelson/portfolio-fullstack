import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter({ out: 'build' }),
		alias: {
			$components: './src/components',
			$lib: './src/lib',
			$icons: './src/icons',
			$houdini: './$houdini',
			$styles: './src/styles'
		}
	}
};

export default config;
