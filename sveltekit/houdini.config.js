/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'http://directus:8055/graphql'
	},
	plugins: {
		'houdini-svelte': {}
	}
	// cacheBufferSize: 1
};

export default config;
