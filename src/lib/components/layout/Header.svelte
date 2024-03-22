<script lang="ts">
	import { author, routes } from 'siteConfig';
	import Link from '$lib/components/Link.svelte';
	import DarkModeButton from '$lib/components/ThemeToggleButton.svelte';

	const fullName = `${author.name.first} ${author.name.last}`.toUpperCase();
</script>

<header>
	<div>
		<div class="author-name">
			<a href="/">{fullName}</a>
		</div>
		<nav>
			<ul>
				{#each routes as link}
					<li>
						<Link href={link.url}>{link.name}</Link>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<!-- <DarkModeButton /> -->
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 2rem;
		margin-bottom: 2rem;

		.author-name {
			font-family: 'Roboto';
			font-size: 2rem;
			font-weight: 600;
			letter-spacing: 0.4rem;
			font-size: 3rem;
		}

		nav {
			ul {
				display: flex;
				flex-direction: row;

				li:not(:first-of-type) {
					margin-left: 1rem;
				}
			}
		}
	}
</style>
