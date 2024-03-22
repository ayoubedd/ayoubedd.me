<script lang="ts">
	export let tags: string[] = [];
</script>

{#if tags.length}
	<div class="tags">
		<svg
			aria-hidden="true"
			class="me-1 inline-block h-6 w-6"
			fill="none"
			focusable="false"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
			<path
				d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"
			></path>
			<path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path>
			<path d="M6 9h-.01"></path>
		</svg>
		{#each tags.slice(0, 5) as tag}
			<span>#{tag}</span>
		{/each}
	</div>
{/if}

<style lang="scss">
	.tags {
		svg {
			height: 1.6rem;
			position: relative;
			top: 0.33rem;
			margin-right: 0.1em;
		}
		span {
			opacity: 0.8;
			text-decoration: underline;
			&:not(:first-of-type) {
				margin-left: 0.8rem;
			}

			&:not(:last-of-type)::after {
				content: ',';
			}
		}
	}
</style>
