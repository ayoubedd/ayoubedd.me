<script lang="ts">
	export let label: string;
	export let list: string[];
</script>

<div class="container">
	<h3>{label}</h3>
	<div class="item-list">
		{#each list as item}
			<p class="item">{item}</p>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;

		h3 {
			font-size: 1.6rem;
			margin-bottom: 0.8rem;
		}

		h3::before {
			content: '';
			margin-right: 0.5rem;
		}
	}

	.item-list {
		display: flex;
		flex-direction: row;
		margin-left: 2rem;

		.item {
			color: rgb(113, 113, 122);
			background-color: rgb(250, 250, 250);
			padding: 0.2rem 0.3rem;
			font-size: 1rem;
			border: 1px solid #ddd;
			border-radius: 5px;
			display: inline-block;

			&:not(:first-of-type) {
				margin-left: 1rem;
			}

			&:hover {
				cursor: pointer;
				border: 1px solid #c0c0c0;
			}
		}
	}
</style>
