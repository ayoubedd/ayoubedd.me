<script lang="ts">
	import { site } from 'siteConfig';
	import { page } from '$app/stores';

	type ContentTypes = 'website' | 'article';

	export let type: ContentTypes = 'website'; // or article, or music.album etc. See https://ogp.me/#types

	export let title: string;
	export let description: string;
	export let image = '/img/default.jpg';

	export let path = $page.url.pathname;
	export let domain = site.domain;
	export let siteTitle = site.title;

	const titleWithSuffix = siteTitle === title ? title : (title ? title + ' | ' : '') + siteTitle;
	const fullURI = `${domain}${path}`;
</script>

<svelte:head>
	<meta property="og:type" content={type} />
	<meta property="og:url" content={fullURI} />
	<meta property="twitter:url" content={fullURI} />

	{#if titleWithSuffix}
		<title>{titleWithSuffix}</title>
		<meta name="title" content={titleWithSuffix} />
		<meta property="og:title" content={titleWithSuffix} />
		<meta property="twitter:title" content={titleWithSuffix} />
	{/if}

	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
		<meta property="twitter:description" content={description} />
	{/if}

	{#if image}
		<meta property="og:image" content={image} />
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:image" content={image} />
	{/if}
</svelte:head>
