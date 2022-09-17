class Projects extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {

      const projects = [
			{
				projectTitle: 'Project 1',
				projectDescription: 'Project 1 description',
				projectImg: 'public/images/17448828_coding.jpg',
				projectView: 'https://ace-d-baugh.github.io/personal-portfolio/',
				projectCode: 'https://github.com/ace-d-baugh/personal-portfolio',
				projectTech: ['HTML', 'CSS', 'JavaScript', 'Angular', 'NodeJS', 'Express', 'MongoDB'],
			},
		];


      const technologies = {
         HTML: 'fa-brands fa-html5',
         CSS: 'fa-brands fa-css3-alt',
         JavaScript: 'fa-brands fa-square-js',
         React: 'fa-brands fa-react',
         NodeJS: 'fa-brands fa-node',
         Express: 'fas fa-server',
         MongoDB: 'fa-brands fa-mdb',
         Docker: 'fa-brands fa-docker',
         PHP: 'fa-brands fa-php',
         Bootstrap: 'fa-brands fa-bootstrap',
         Angular: 'fa-brands fa-angular',
         Drupal: 'fa-brands fa-drupal',
         WordPress: 'fa-brands fa-wordpress'
      }

      function getIcon(tech) {
         return technologies[tech];
      }

      function getTechUsed(techList) {
         let techUsed = '';
         for (let tech of techList) {
            techUsed += `<div class="tech-icon">
                           <i class="${getIcon(tech)}"></i>
                           <p class="tech-name">${tech}</p>
                        </div>`;
         }
         return techUsed;
      }

      function getProjects() {
         let projectCards = '';
         for (let project of projects) {
            projectCards += `
               <div class="project-card-holder">
                  <div class="project-card-image"><img src="${project.projectImg}"></div>
                  <div class="project-card">
							<div class="card-front">
								<div class="project-title">
									<h2>${project.projectTitle}</h2>
								</div>
								<div class="project-description">
									<p>${project.projectDescription}</p>
								</div>
                        <div class="tapForMore">Tap for more</div>
							</div>
							<div class="card-back">
                        <div class="project-title">
									<h2>${project.projectTitle}</h2>
								</div>
                        <div class="tech-used">
                           <h5>Technologies Used</h5>
                           <div class="tech-icons row center">
                              ${getTechUsed(project.projectTech)}
                           </div>
                        </div>
								<div class="card-links">
									<a href="${project.projectView}" target='_blank'><div class="btn btn-primary">View Project</div></a>
									<a href="${project.projectCode}" target='_blank'><div class="btn btn-primary">View Code</div></a>
								</div>
                     </div>
                  </div>
               </div>
            `;}
         return projectCards;
      }

		this.innerHTML = `
			<div class="row">
				<div class="project-container center">
               ${getProjects()}
				</div>
			</div>
`;
	}
}

customElements.define('projects-component', Projects);
