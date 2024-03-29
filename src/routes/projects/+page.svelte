<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Meta from '$lib/composables/Meta.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<Meta
		title="Projects"
		description="Projects i enjoyed working on, and worth sharing with the world"
	/>
</svelte:head>

<section>
	<div class="brief">
		<h1>Projects</h1>
		<p>Projects i enjoyed working on, and worth sharing with the world</p>
	</div>

	{#if !data.projects.length}
		<span>No projects yet :)</span>
	{/if}

	{#each data.projects as project}
		<ProjectCard link={project.link} title={project.title} description={project.description} />
	{/each}
</section>

<style lang="scss">
	.brief {
		margin-bottom: 2rem;
		h1 {
			font-size: 2.2rem;
		}
	}
</style>
