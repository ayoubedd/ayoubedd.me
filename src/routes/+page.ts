
import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/helpers/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		return { posts: (await getAllPosts()).slice(0, 5) };
	} catch (e) {
		error(404);
	}
};
