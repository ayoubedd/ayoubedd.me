<script lang="ts">
	import { site } from 'siteConfig';
	import { page } from '$app/stores';

	export let href: string;
	export const attrs: any = {};

	try {
		if (
			new URL(href.startsWith('/') ? 'http://' + site.domain + href : href).host !== site.domain
		) {
			attrs.rel = 'nofollow';
			attrs.target = '_blank';
		}
	} catch (e) {
		console.error(e);
	}

	$: {
		if ($page.url.pathname == href || ($page.url.pathname.startsWith(href) && href != '/'))
			attrs.style = 'font-weight: bold;';
		else attrs.style = '';
	}
</script>

<a {href} {...attrs}>
	<slot />
</a>

<style lang="scss">
	a {
		text-decoration: none;
		color: var(--text-color);

		&:hover {
			text-decoration: underline;
		}
	}
</style>
