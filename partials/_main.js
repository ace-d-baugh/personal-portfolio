/*============================================
; Title: Assignment Personal Portfolio - _main.js
; Author: Ace Baugh
; Start Date: 09/05/2022
; Description: WEB 330 Personal Portfolio Landing Page 
;              This partial contains a brief introduction
;              to myself. Elevator Pitch
============================================*/

class Main extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<div class="main-container">
				<div class="main-section">
					<h1 class="main-header">About Me</h1>
					<div class="main-who">Who Am I?</div>
					<div class="main-title">I am Ace Baugh, a Full Stack Developer</div>
					<p class="main justify">I currently work for the Walt Disney Company in sunny Central Florida. I am passionate about coding, photography, and my family. I am a rapid learner when it comes to technology and hope to work for a company that wants to push the envelope and keep moving forward. I am studying Full Stack Web Development at Bellevue University and will be graduating in the summer of 2023.</p>
					<div class="main-buttons">
						<a href="about.html" class="btn btn-primary">More About Me</a>
						<a href="resume.html" class="btn btn-primary">My Resume/CV</a>
					</div>
				</div>
				<div class="main-image">
					<img src="public/images/me.jpg" alt="Ace Baugh" />
				</div>
			</div>
`;
	}
}

customElements.define('main-component', Main);
