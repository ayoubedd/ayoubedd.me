import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/helpers/content';
import { getAllProjects } from '$lib/helpers/content';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	try {
		return {
			articles: getAllPosts().slice(0, 5),
			projects: getAllProjects().slice(0, 5)
		};
	} catch (_e) {
		error(404);
	}
};
