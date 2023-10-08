import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	preview: {
		port: 5432
	},
	define: {
		'__HELLO_MESSAGE__': JSON.stringify('Hello Amigos!')
	}
});
