import type { Project } from '$lib/types/main';

const projects: Project[] = [];

export async function getAllProjets() {
	if (projects.length) return projects;

	let list: Project[] = [];

	const paths = import.meta.glob('@content/projects/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<Project, 'slug'>;
			const post = { ...metadata } satisfies Project;
			if (post.draft == false) list.push(post);
		}
	}

	list = list.sort(
		(first, second) =>
			new Date(second.publishDate).getTime() - new Date(first.publishDate).getTime()
	);

	return list;
}
