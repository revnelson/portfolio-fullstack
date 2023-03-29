import { PageBySlugStore } from '$houdini';
import type { PageBySlugVariables } from './$houdini';

export const _houdini_load = [new PageBySlugStore()];

export const _PageBySlugVariables: PageBySlugVariables = ({ params }) => {
	return {
		slug: params.slug
	};
};
