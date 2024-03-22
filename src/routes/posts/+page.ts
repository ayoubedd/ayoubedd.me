import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/helpers/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		const posts = await getAllPosts();
		return { posts };
	} catch (e) {
		error(404);
	}
};
