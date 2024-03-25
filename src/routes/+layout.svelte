<script>
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '@styles/global.scss';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css?family=Source%20Sans%20Pro:400,600,700,400italic,600italic,700italic"
		rel="stylesheet"
	/>
</svelte:head>

<div class="container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	.container {
		max-width: 900px;
		width: 100%;
		margin: auto;
		min-height: 100vh;
		display: flex;
		flex-direction: column;

		main {
			padding: 2rem 0;
		}
	}
</style>
