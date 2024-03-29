// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path'
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		alias: {
			$utils: path.resolve('src/utils'),
			$services: path.resolve('src/services'),
			$stores: path.resolve('src/stores'),
			$components: path.resolve('src/components'),
			$types: path.resolve('src/types'),

		},
		adapter: adapter({
			// default options are shown
			trailingSlash: 'always',
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
