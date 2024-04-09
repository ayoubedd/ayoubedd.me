<script lang="ts">
	import Meta from '$lib/composables/Meta.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { content, title } = data;
</script>

<svelte:component this={Meta} {title} description="Blog posts about various things" />

<div>
	<h1>{title}</h1>
	<svelte:component this={content} />
</div>

<style lang="scss">
	h1 {
		margin-bottom: 2rem;
	}
</style>
