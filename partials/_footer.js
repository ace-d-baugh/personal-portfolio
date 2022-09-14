class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `FOOT`;
	}
}

customElements.define('footer-component', Footer);
