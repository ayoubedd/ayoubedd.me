import { error } from '@sveltejs/kit';
import { getAllProjets } from '$lib/helpers/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		return { projects: await getAllProjets() };
	} catch (e) {
		error(404);
	}
};
