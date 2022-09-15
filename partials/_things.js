class Things extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `THINGS`;
	}
}

customElements.define('things-component', Things);
