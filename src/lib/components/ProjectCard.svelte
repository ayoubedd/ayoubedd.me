<script lang="ts">
	import Link from './Link.svelte';

	export let title: string;
	export let img: string = '/images/placeholder.webp';
	export let description: string;
	export let link: string;
</script>

<div class="card">
	<div class="image">
		<Link href={link}>
			<img src={img} alt={title} />
		</Link>
	</div>
	<div class="meta-data {img.length == 0 ? 'full-w' : ''}">
		<Link href={link}>
			<h2>{title}</h2>
		</Link>
		<p>{description.slice(0, 200) + (description.length > 200 ? '...' : '')}</p>
	</div>
</div>

<style lang="scss">
	.full-w {
		width: 100% !important;
	}

	.card {
		max-height: 15rem;
		display: flex;
		margin-bottom: 2rem;

		.image {
			width: 50%;
			margin-right: 1.3rem;

			img {
				object-fit: cover;
				width: 100%;
			}
		}

		.meta-data {
			width: 50%;
			h2 {
				font-size: 1.5rem;
				margin-bottom: 0.4rem;
			}

			:global(a):not(:first-of-type) {
				color: rgb(113, 113, 122);
				background-color: rgb(250, 250, 250);
				padding: 0.2rem 0.3rem;
				font-size: 1rem;
				border: 1px solid #ddd;
				border-radius: 5px;
				padding: 0.5rem;
			}
		}
	}
</style>
