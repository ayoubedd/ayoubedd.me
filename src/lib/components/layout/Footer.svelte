<script lang="ts">
	import { author } from 'siteConfig';
	import Link from '$lib/components/Link.svelte';
</script>

<footer>
	<div class="author">
		MIT License {@html '&copy;'}
		{`${author.name.first} ${author.name.last}`}
	</div>
	<div class="social-links">
		{#each author.socials as social}
			<Link href={social.url}>{social.name}</Link>
		{/each}
	</div>
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 1rem;

		:global(a:not(:last-of-type)::after) {
			content: '|';
			padding: 0 1rem;
		}
	}
</style>
