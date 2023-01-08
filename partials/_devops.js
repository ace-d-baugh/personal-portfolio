/*============================================
; Title: Assignment Personal Portfolio - _devops.js
; Author: Ace Baugh
; Start Date: 01/08/2023
; Description: WEB 430 Personal Portfolio DevOps Page 
;              This partial showcases the presentations that 
;              I created from the Bellevue University 
;              Web Development DevOps course.
============================================*/

class DevOps extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		// function that opens a modal with the video presentation
		function openModal(presentLink) {
			// build the modal
			let modal = `
            <div class="modal">
               <div class="modal-content">
                  <div class="modal-header">
                     <span class="close">&times;</span>
                     <h2>DevOps Presentation</h2>
                  </div>
                  <div class="modal-body">
                     <iframe width="560" height="315" src="${presentLink}" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
               </div>
            </div>
         `;
			// output the modal
			document.getElementById('modal').innerHTML = modal;
			// get the modal
			let modalWindow = document.querySelector('#modal');
			// get the close button
			let closeBtn = document.querySelector('.close');
			// open the modal
			modalWindow.style.display = 'flex';
			// close the modal
			closeBtn.onclick = function () {
				modalWindow.style.display = 'none';
			};
			// close the modal if the user clicks outside of it
			window.onclick = function (event) {
				if (event.target == modalWindow) {
					modalWindow.style.display = 'none';
				}
			};
		}

		// Creates the project cards from the project list
		function getPresents() {
			let presentCards = '';
			// fetch the project data from the json file
			fetch('public/data/devops.json')
				.then((res) => res.json())
				.then((data) => {
					// keep track of how many cards have been created
					let idNum = 0;
					// loop through the projects list and creates the project cards
					for (let present of data) {
						presentCards += `
                     <div class="project-card-holder">
                        <div class="project-card-image"><img src="${present.presentImg}"></div>
                        <div class="project-card">
                           <div class="card-front">
                              <div class="project-title">
                                 <h2>${present.presentTitle}</h2>
                              </div>
                              <div class="project-description">
                                 <p>${present.presentDescription}</p>
                              </div>
                              <div class="tapForMore">Tap for more</div>
                           </div>
                           <div class="card-back">
                              <div class="project-title">
                                 <h2>${present.presentTitle}</h2>
                              </div>
                              <div class="play">
                                 <h5>Play the Presentation</h5>
                                 <div class="play-btn row center">
                                    <!-- <div class="btn btn-primary" onclick="openModal("help")">Play</div> -->
                                    <a href="${present.presentLink}" target="_blank"><div class="btn btn-primary">Play</div></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  `;
					}
					// output the project cards
					document.getElementById('project-container').innerHTML = presentCards;
				})
				.catch((error) => console.log(error));
		}

		// Creates the projects holder and calls the getProjects function
		this.innerHTML = `
			<div class="projects row" id="projects">
            <h1 class="section-header">DevOps Presentations</h1>
				<div class="project-container center" id="project-container">
               ${getPresents()}
				</div>
			</div>
         <!-- <div id="modal" style="display:none;"> -->
         </div>
      `;
	}
}

customElements.define('devops-component', DevOps);
