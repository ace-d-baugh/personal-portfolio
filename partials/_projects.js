class Projects extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {

      const projects = [
			{
				projectTitle: 'Web 231',
				projectDescription:
					'Projects and assignments for Web 231. These projects showcase intermediate JavaScript concepts and DOM manipulation using functions and bindings. ',
				projectImg: 'public/images/17448828_coding.jpg',
				projectView: 'https://ace-d-baugh.github.io/web-231/',
				projectCode: 'https://github.com/ace-d-baugh/web-231',
				projectTech: ['HTML', 'CSS', 'JavaScript'],
			},
			{
				projectTitle: 'Web 330',
				projectDescription:
					'Projects and assignments for Web 330. These projects showcase advanced JavaScript concepts including objects, classes, iterators, generators, and component creation.',
				projectImg: 'public/images/17448828_coding.jpg',
				projectView: 'https://ace-d-baugh.github.io/web-330/',
				projectCode: 'https://github.com/ace-d-baugh/web-330',
				projectTech: ['HTML', 'CSS', 'JavaScript'],
			},
			{
				projectTitle: 'Pets-R-Us',
				projectDescription:
					'Web 340 Capstone Project. This project is a NodeJS and express application that allows users to create appointments and new users using a mongoDB database.',
				projectImg: 'public/images/17448828_coding.jpg',
				projectView: 'https://ace-d-baugh.github.io/web-420/',
				projectCode: 'https://github.com/ace-d-baugh/web-420',
				projectTech: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'Express', 'MongoDB'],
			},
			{
				projectTitle: 'Web 420 Capstone',
				projectDescription:
					'This course presents the purpose of APIs (Application Programming Interfaces), their functions, and how to use and manage them in the context of web development.',
				projectImg: 'public/images/17448828_coding.jpg',
				projectView: 'https://ace-d-baugh.github.io/web-420/',
				projectCode: 'https://github.com/ace-d-baugh/web-420',
				projectTech: ['HTML', 'CSS', 'JavaScript'],
			},
			{
				projectTitle: 'Composer App',
				projectDescription:
					'Learn Angular with TypeScript by building real-world applications. This course covers frameworks and how to build client-rich applications using Angular with TypeScript.',
				projectImg: 'public/images/17448828_coding.jpg',
				projectView: 'https://ace-d-baugh.github.io/web-420/',
				projectCode: 'https://github.com/ace-d-baugh/web-420',
				projectTech: ['HTML', 'CSS', 'JavaScript'],
			},
			{
				projectTitle: 'GPA Calculator App',
				projectDescription:
					'Learn Angular with TypeScript by building real-world applications. This course covers frameworks and how to build client-rich applications using Angular with TypeScript.',
				projectImg: 'public/images/17448828_coding.jpg',
				projectView: 'https://ace-d-baugh.github.io/web-420/',
				projectCode: 'https://github.com/ace-d-baugh/web-420',
				projectTech: ['HTML', 'CSS', 'JavaScript'],
			},
			{
				projectTitle: 'In-N-Out Books',
				projectDescription:
					'Learn Angular with TypeScript by building real-world applications. This course covers frameworks and how to build client-rich applications using Angular with TypeScript.',
				projectImg: 'public/images/17448828_coding.jpg',
				projectView: 'https://ace-d-baugh.github.io/web-420/',
				projectCode: 'https://github.com/ace-d-baugh/web-420',
				projectTech: ['HTML', 'CSS', 'JavaScript'],
			},
			{
				projectTitle: 'NodeBucket',
				projectDescription:
					'This course is an immersive web development bootcamp. It is a full stack experience using the skills previously developed in languages, API, and framework.',
				projectImg: 'public/images/17448828_coding.jpg',
				projectView: 'https://ace-d-baugh.github.io/web-420/',
				projectCode: 'https://github.com/ace-d-baugh/web-420',
				projectTech: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'Angular', 'NodeJS'],
			},
			{
				projectTitle: `Bob's Computer Repair`,
				projectDescription:
					'This course is an immersive web development bootcamp. It is a full stack experience using the skills previously developed in languages, API, and framework.',
				projectImg: 'public/images/17448828_coding.jpg',
				projectView: 'https://ace-d-baugh.github.io/web-420/',
				projectCode: 'https://github.com/ace-d-baugh/web-420',
				projectTech: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'Angular', 'NodeJS'],
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
			WordPress: 'fa-brands fa-wordpress',
		};

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
