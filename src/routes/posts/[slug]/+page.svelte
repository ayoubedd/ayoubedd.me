<script lang="ts">
	import Meta from '$lib/composables/Meta.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { content, title = '', description = '', tags } = data;
</script>

<svelte:component this={Meta} {title} {description} type="article" />

<article class="post">
	<div class="title-tags_container">
		<h1>{title}</h1>
		<Tags {tags} />
	</div>
	<svelte:component this={content} />
</article>

<style lang="scss">
	.title-tags_container {
		margin-bottom: 2rem;
	}

	article {
		h1 {
			margin-bottom: 0;
		}
		:global(a) {
			text-decoration: underline;
		}

		:global(ul) {
			list-style: inside;
			margin-bottom: 1rem;
		}

		:global(ol) {
			list-style: inside decimal;
			margin-bottom: 1rem;
		}

		:global(h2),
		:global(h3),
		:global(h4),
		:global(h5),
		:global(h6) {
			margin-bottom: 1rem;
		}

		:global(h2)::before,
		:global(h3)::before,
		:global(h4)::before,
		:global(h5)::before,
		:global(h6)::before {
			content: '#';
			margin-right: 0.6rem;
			opacity: 0.5;
		}
	}
</style>
