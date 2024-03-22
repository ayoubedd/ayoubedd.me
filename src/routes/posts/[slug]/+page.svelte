<script lang="ts">
	import Meta from '$lib/composables/Meta.svelte';
	import type { PageData } from './$types';
	import '$lib/styles/syntax-highlighting.css';
	import Tags from '$lib/components/Tags.svelte';

	export let data: PageData;
	const { content, title = '', description = '', tags } = data;
</script>

<svelte:head>
	<Meta {title} {description} type="article" />
</svelte:head>

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
