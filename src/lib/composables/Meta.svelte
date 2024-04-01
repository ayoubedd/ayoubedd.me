<script lang="ts">
	import { author, site } from 'siteConfig';
	import { page } from '$app/stores';

	type ContentTypes = 'website' | 'article';

	export let type: ContentTypes = 'website'; // or article, or music.album etc. See https://ogp.me/#types

	export let title: string;
	export let description: string;
	export let image = '/img/default.jpg';

	export let path = $page.url.pathname;
	export let domain = site.domain;
	export let siteTitle = site.title;

	const titleWithSuffix = siteTitle === title ? title : (title ? title + ' • ' : '') + siteTitle;
	const fullURI = `${domain}${path}`;

	const schema = `<script type="application/ld+json">
	{
        "@context": "https://schema.org/",
        "@type": "BlogPosting",
        "@id": "https://dataliberate.com/2019/05/14/library-metadata-evolution-final-mile/#BlogPosting",
        "mainEntityOfPage": "https://dataliberate.com/2019/05/14/library-metadata-evolution-final-mile/",
        "headline": "${title}",
        "name": "${title}",
        "description": "${description}",
        "datePublished": "2019-05-14",
        "dateModified": "2019-05-14",
        "author": {
            "@type": "Person",
            "@id": "https://dataliberate.com/author/richard-wallis/#Person",
            "name": "${author.name.first}",
            "url": "https://dataliberate.com/author/richard-wallis/",
        },
        "image": {
            "@type": "ImageObject",
            "@id": "${image}",
            "url": "${image}",
            "height": "362",
            "width": "388"
        },
        "url": "${fullURI}",
        "isPartOf": {
            "@type" : "Blog",
             "@id": "https://${site.domain}/blog/",
             "name": "${site.title}",
         },
        "wordCount": "488",
        "keywords": [
            "Bibframe2Schema.org",
            "Libraries",
            "Library of Congress"
        ],
	}</script\>`;
</script>

<svelte:head>
	{@html schema}

	<meta name="robots" content="noindex" />

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
