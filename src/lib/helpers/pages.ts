import type { Publication } from '$lib/types/post';

let pages: Publication[] = [];

async function getAllPages() {
	if(pages.length)
		return pages;

	let posts: Publication[] = [];

	const paths = await import.meta.glob('/content/pages/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Publication, 'slug'>;
			const post = { slug, ...metadata } satisfies Publication;
			// @ts-ignore
			post.content = file.default;
			if (post.draft == false) posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.publishDate).getTime() - new Date(first.publishDate).getTime()
	);

	return posts;
}


export async function getPage(slug: string) {
	if(!pages.length)
		pages = await getAllPages();

	for (const page of pages) {
		if (page.slug === slug) return page;
	}
}
