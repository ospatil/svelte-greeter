import SvelteGreeter from './SvelteGreeter.html';

window.SvelteGreeter = new SvelteGreeter({
	target: document.body,
	data: {
		greeting: 'Bonjour'
	}
});
