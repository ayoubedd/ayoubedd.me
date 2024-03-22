<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	let image =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg';
</script>

<svelte:head>
	<title>Projects</title>
	<meta
		name="description"
		content="Projects i enjoyed working on, and worth sharing with the world"
	/>
</svelte:head>

<section>
	<div class="brief">
		<h1>Projects</h1>
		<p>Projects i enjoyed working on, and worth sharing with the world</p>
	</div>

	<ProjectCard
		link="https://github.com/ayoubedd/webserv"
		title="Svelte ui library"
		img={image}
		description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
	/>

	<ProjectCard
		link="https://github.com/ayoubedd/webserv"
		title="ovquik"
		img={image}
		description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
	/>

	<ProjectCard
		link="https://github.com/ayoubedd/webserv"
		title="Rust http library"
		img={image}
		description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
	/>
</section>

<style lang="scss">
	.brief {
		margin-bottom: 2rem;
		h1 {
			font-size: 2.2rem;
		}
	}
</style>
