/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://api.michael.nelson.tech/graphql'
	},
	plugins: {
		'houdini-svelte': {}
	}
	// cacheBufferSize: 1
};

export default config;
