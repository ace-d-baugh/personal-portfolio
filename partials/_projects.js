class Projects extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let imgSrc = 'public/images/17448828_coding.jpg';
		let projectTitle = 'Project Title';
		let projectDescription =
			'Project Description Project Description Project Description Project Description Project Description Project Description ';
		let techList = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Express', 'MongoDB'];
		let projectView = 'https://ace-d-baugh.github.io/personal-portfolio/';
		let projectCode = 'https://github.com/ace-d-baugh/personal-portfolio';

      function getIcon(tech) {
         if (tech === 'HTML') {
            return 'fab fa-html5';
         } else if (tech === 'CSS') {
            return 'fab fa-css3-alt';
         } else if (tech === 'JavaScript') {
            return 'fab fa-js-square';
         } else if (tech === 'React') {
            return 'fab fa-react';
         } else if (tech === 'NodeJS') {
            return 'fab fa-node-js';
         } else if (tech === 'Express') {
            return 'fas fa-server';
         } else if (tech === 'MongoDB') {
            return 'fas fa-database';
         }
      }

      function getTechUsed() {
         let techUsed = '';
         for (let tech of techList) {
            techUsed += `<div class="tech-icon">
                           <i class="${getIcon(tech)}"></i>
                           <p class="tech-name">${tech}</p>
                        </div>`;
         }
         return techUsed;
      }

		this.innerHTML = `
			<div class="row">
				<div class="project-container center">
					<div class="project-card-holder">
						<div class="project-card-image"><img src="${imgSrc}"></div>
						<div class="project-card">
							<div class="card-front">
								<div class="project-title">
									<h2>${projectTitle}</h2>
								</div>
								<div class="project-description">
									<p>${projectDescription}</p>
								</div>
							</div>
							<div class="card-back">
                        <div class="project-title">
									<h2>${projectTitle}</h2>
								</div>
                        <div class="tech-used">
                           <h5>Technologies Used</h5>
                           <div class="row center">
                              ${getTechUsed()}
                           </div>
                        </div>
								<div class="card-links">
									<a href="${projectView}" target='_blank'><div class="btn btn-primary">View Project</div></a>
									<a href="${projectCode}" target='_blank'><div class="btn btn-primary">View Code</div></a>
								</div>
                     </div>
						</div>
					</div>
				</div>
			</div>
`;
	}
}

customElements.define('projects-component', Projects);
