class Diagram extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `DIAGRAM`;
	}
}

customElements.define('diagram-component', Diagram);
