import { error } from '@sveltejs/kit';
import { getAllProjects } from '$lib/helpers/content';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	try {
		return { projects: getAllProjects() };
	} catch (_e) {
		error(404);
	}
};
