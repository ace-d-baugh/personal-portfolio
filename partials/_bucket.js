class Bucket extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `BUCKET`;
	}
}

customElements.define('bucket-component', Bucket);
