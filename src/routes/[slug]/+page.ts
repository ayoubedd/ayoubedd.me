import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPage } from '$lib/helpers/pages';

export const load: PageLoad = async ({ params }) => {
	try {
		const page = await getPage(params.slug);
		if (!page) error(404, 'Not found');

		return page;
	} catch (e) {
		error(404);
	}
};
