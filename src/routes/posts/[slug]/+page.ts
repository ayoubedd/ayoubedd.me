import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPost } from '$lib/helpers/posts';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await getPost(params.slug);
		return post;
	} catch (e) {
		error(404);
	}
};
