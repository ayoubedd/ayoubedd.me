<script lang="ts">
	import Tags from './Tags.svelte';

	export let title: string = '';
	export let url: string = '/';
	export let description: string = '';
	export let date: Date;
</script>

<article>
	<a href={url}>
		<div class="date-title_container">
			<span>{date.toLocaleDateString()}</span>
			<h2>{title}</h2>
		</div>
		{#if description.length}
			<p>{description.slice(0, 256) + (description.length > 256 ? ' ...' : '')}</p>
		{/if}
	</a>
</article>

<style lang="scss">
	article {
		margin-bottom: 0.5rem;

		p,
		span {
			display: inline-block;
		}

		p {
			font-style: italic;
		}

		p::before,
		p::after {
			content: '"';
		}
	}
	.date-title_container {
		display: flex;
		color: var(--text-color);

		span {
			opacity: 0.8;
			margin-right: 1.4rem;
		}

		h2 {
			text-decoration: underline;
			font-size: 1.4rem;
			font-weight: 400;
			letter-spacing: 0.01rem;
		}
	}
</style>
