customElements.define(
	'hello-wc',
	class extends HTMLElement {
		constructor() {
			super();
			var template = document.getElementById('hello-wc-template').content;
			const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
		}
	}
);
