class Projects extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `<div class="projects" id="projects">PROJECTS</div>`;
	}
}

customElements.define('projects-component', Projects);
