class Api extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `API`;
	}
}

customElements.define('api-component', Api);
