class Projects extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `PROJECTS`;
	}
}

customElements.define('projects-component', Projects);
