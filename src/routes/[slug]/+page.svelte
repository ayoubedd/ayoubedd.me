<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { content, title } = data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div>
	<h1>{title}</h1>
	<svelte:component this={content} />
</div>

<style lang="scss">
	h1 {
		margin-bottom: 2rem;
	}
</style>
