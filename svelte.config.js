import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkHeadingId from 'remark-heading-id';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svelte', '.md'],
			remarkPlugins: [[remarkHeadingId, { defaults: true }]]
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		alias: {
			siteConfig: 'src/site_config.ts',
			'@styles/*': 'src/lib/styles/*',
			'@content/*': 'content/*'
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ strict: false, precompress: true })
		// adapter: adapter()
	}
};

export default config;
