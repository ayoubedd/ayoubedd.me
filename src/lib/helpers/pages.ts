import type { Post } from '$lib/types/post';

export async function getAllPages() {
	let posts: Post[] = [];

	const paths = await import.meta.glob('/content/pages/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { slug, ...metadata } satisfies Post;
			post.content = file.default;
			if (post.draft == false) posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function getPage(slug: string) {
	const posts = await getAllPages();

	for (const post of posts) {
		if (post.slug === slug) return post;
	}
}
