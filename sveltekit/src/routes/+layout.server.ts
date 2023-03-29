import type { LayoutRouteId, LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
	return {
		key: url.pathname as LayoutRouteId
	};
}) satisfies LayoutServerLoad;
