class Api extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `<div class="apis" id="apis">API</div>`;
	}
}

customElements.define('api-component', Api);
