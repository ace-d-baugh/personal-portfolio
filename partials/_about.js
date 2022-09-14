class About extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `ABOUT`;
	}
}

customElements.define('about-component', About);
