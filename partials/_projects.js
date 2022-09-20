/*============================================
; Title: Assignment Personal Portfolio - _projects.js
; Author: Ace Baugh
; Start Date: 09/05/2022
; Description: WEB 330 Personal Portfolio Landing Page 
;              This partial showcases the projects from 
;              the Bellevue University Web Development
;              program that I created.
============================================*/

class Projects extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {

      // Creates list of technologies used from the project list
      // and outputs the icon and name
		function getTechUsed(techList, num) {
			let techUsed = '';
         // fetch the technologies data from the json file
         fetch('public/data/technologies.json')
            .then((res) => res.json())
            .then((data) => {
               // loop through the technologies list
               for (let tech of techList) {
                  // build output
                  techUsed += `<div class="tech-icon">
                                 <i class="${data[0][tech]}"></i>
                                 <p class="tech-name">${tech}</p>
                              </div>`;
               }
            // output the technologies used
            document.getElementById('tech-icons-' + num).innerHTML = techUsed;
            })
            .catch((err) => console.log(err));
		}

      // Creates the project cards from the project list
		function getProjects() {
			let projectCards = '';
         // fetch the project data from the json file
         fetch('public/data/projects.json')
            .then((res) => res.json())
            .then((data) => {
               // keep track of how many cards have been created
               let idNum = 0;
               // loop through the projects list and creates the project cards
					for (let project of data) {
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
                              <div class="tech-icons row center" id="tech-icons-${idNum}">
                                 ${getTechUsed(project.projectTech, idNum)}
                              </div>
                           </div>
                           <div class="card-links">
                              <a href="${project.projectView}" target='_blank'><div class="btn btn-primary">View Project</div></a>
                              <a href="${project.projectCode}" target='_blank'><div class="btn btn-primary">View Code</div></a>
                           </div>
                        </div>
                     </div>
                  </div>
               `;
               idNum++;
					}
               // output the project cards
					document.getElementById('project-container').innerHTML = projectCards;
				})
            .catch((error) => console.log(error));
		}

      // Creates the projects holder and calls the getProjects function
		this.innerHTML = `
			<div class="row" id="projects">
				<div class="project-container center" id="project-container">
               ${getProjects()}
				</div>
			</div>
`;
	}
}

customElements.define('projects-component', Projects);
