import type { Publication } from '$lib/types/main';

const posts: Publication[] = [];
const pages: Publication[] = [];
const projects: Publication[] = [];

function fillPublications(paths: any[], pubs: Publication[]) {
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Publication, 'slug'>;
			const post = { slug, ...metadata } satisfies Publication;
			// @ts-ignore
			post.content = file.default;
			if (post.draft == false) pubs.push(post);
		}
	}
}

function loadPublications() {
	if (posts.length) return posts;

	const posts_paths: any[] = import.meta.glob('@content/posts/*.md', { eager: true });
	const pages_paths: any[] = import.meta.glob('@content/pages/*.md', { eager: true });
	const projects_paths: any[] = import.meta.glob('@content/projects/*.md', { eager: true });

	const list: { paths: any[], target: Publication[] }[] = [
		{
			paths: import.meta.glob('@content/posts/*.md', { eager: true }),
			target: posts
		},
		{
			paths: import.meta.glob('@content/pages/*.md', { eager: true }),
			target: pages
		},
		{
			paths: import.meta.glob('@content/projects/*.md', { eager: true }),
			target: projects
		},
	];

	for (const pair of list)
		fillPublications(pair.paths, pair.target);

	for (const pair of list)
		pair.target = pair.target.sort(
			(first, second) =>
				new Date(second.publishDate).getTime() - new Date(first.publishDate).getTime()
		);
}

export function getPost(slug: string) : Publication | undefined {
	if (!posts.length) loadPublications();

	for (const post of posts) {
		if (post.slug === slug) return post;
	}

	return undefined;
}

export function getAllPosts() : Publication[] {
	if (!posts.length) loadPublications();
	return posts;
}

export function getProject(slug: string) : Publication | undefined {
	if (!projects.length) loadPublications();

	for (const project of projects) {
		if (project.slug === slug) return project;
	}

	return undefined;
}

export function getAllProjects() : Publication[] {
	if (!projects.length) loadPublications();
	return projects;
}

export function getPage(slug: string) : Publication | undefined {
	if (!pages.length) loadPublications();

	for (const page of pages) {
		if (page.slug === slug) return page;
	}

	return undefined;
}
