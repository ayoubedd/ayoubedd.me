<script lang="ts">
	export let startDate: string;
	export let endDate: string;
	export let title: string;
	export let description: string;
	export let bullets: string[] = [];

	let formattedStartDate = new Date(startDate).toLocaleDateString('en-US', {
		month: 'short',
		year: 'numeric'
	});

	let formattedEndDate = new Date(endDate).toLocaleDateString('en-US', {
		month: 'short',
		year: 'numeric'
	});
</script>

<div class="card">
	<p class="title">{title}</p>

	<p>{formattedStartDate} - {formattedEndDate}</p>
	<p class="description">{description}</p>

	<div class="bullets">
		{#if bullets.length > 0}
			<ul>
				{#each bullets as bullet}
					<li>{bullet}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style lang="scss">
	.card {
		padding: 1.4rem;
		border: 1px solid #ddd;
		border-radius: 5px;
		margin-bottom: 1rem;

		&:hover {
			cursor: pointer;
			border: 1px solid #c0c0c0;
		}

		p.title {
			font-weight: 600;
			color: var(--text-color);
		}

		p {
			margin-bottom: 0.2rem;
		}

		ul li {
			list-style: inside;
		}

		.bullets {
			padding-left: 0.5rem;
		}
	}
</style>
