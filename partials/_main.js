class Main extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `MAIN`;
	}
}

customElements.define('main-component', Main);
