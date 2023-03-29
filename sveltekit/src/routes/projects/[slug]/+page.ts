import { ProjectBySlugStore } from '$houdini';
import type { ProjectBySlugVariables } from './$houdini';

export const _houdini_load = [new ProjectBySlugStore()];

export const _ProjectBySlugVariables: ProjectBySlugVariables = ({ params }) => {
	return {
		slug: params.slug
	};
};
