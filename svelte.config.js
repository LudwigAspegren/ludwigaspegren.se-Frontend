import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$utils: path.resolve('src/utils'),
					$services: path.resolve('src/services'),
					$stores: path.resolve('src/stores'),
					$components: path.resolve('src/components'),
					$types: path.resolve('src/types'),

				}
			}

		}
	}
};

export default config;