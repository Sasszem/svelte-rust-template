import './global.css';
import App from './App.svelte';
import("../pkg/index.js").then(wasm => {
	const app = new App({
		target: document.body,
		props: {
			name: 'world',
			wasm
		}
	});
}).catch(console.error);