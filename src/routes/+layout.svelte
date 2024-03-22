<script>
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '@styles/reset.css';
	import '@styles/global.scss';
</script>

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
