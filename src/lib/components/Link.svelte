<script lang="ts">
	import { site } from 'siteConfig';
	import { page } from '$app/stores';

	export let href: string;
	export const attrs: any = {};

	try {
		if (
			new URL(href.startsWith('/') ? site.domain + href : href).hostname !==
			new URL(site.domain).hostname
		) {
			attrs.rel = 'nofollow';
			attrs.target = '_blank';
		}
	} catch (e) {
		console.error(e);
	}

	$: {
		if ($page.url.pathname == href || ($page.url.pathname.startsWith(href) && href != '/'))
			attrs.style = 'font-weight: bold; color: var(--accent-color);';
		else attrs.style = '';
	}
</script>

<a {href} {...attrs}>
	<slot />
</a>

<style lang="scss">
	a {
		text-decoration: none;
		// color: var(--accent-color);

		&:hover {
			text-decoration: underline;
		}
	}
</style>
