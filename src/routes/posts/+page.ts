import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/helpers/content';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	try {
		return { posts: getAllPosts() };
	} catch (_e) {
		error(404);
	}
};
