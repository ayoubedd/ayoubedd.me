import type { Publication } from '$lib/types/main';

let posts: Publication[] = [];

export async function getAllPosts() {
	if (posts.length) return posts;

	let posts_list: Publication[] = [];

	const paths = await import.meta.glob('/content/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Publication, 'slug'>;
			const post = { slug, ...metadata } satisfies Publication;
			// @ts-ignore
			post.content = file.default;
			if (post.draft == false) posts_list.push(post);
		}
	}

	posts_list = posts_list.sort(
		(first, second) =>
			new Date(second.publishDate).getTime() - new Date(first.publishDate).getTime()
	);

	return posts_list;
}

export async function getPost(slug: string) {
	if (!posts.length) posts = await getAllPosts();

	for (const post of posts) {
		if (post.slug === slug) return post;
	}
}
