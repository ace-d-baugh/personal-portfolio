class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `HEAD`;
	}
}

customElements.define('header-component', Header);
