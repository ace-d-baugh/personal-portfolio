class Bucket extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `<div class="bucket" id="bucket">BUCKET LIST</div>`;
	}
}

customElements.define('bucket-component', Bucket);
