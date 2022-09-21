/*============================================
; Title: Assignment Personal Portfolio - _hero.js
; Author: Ace Baugh
; Start Date: 09/05/2022
; Description: WEB 330 Personal Portfolio Landing Page 
;              This partial contains a hero image and
;              link to the about page.
============================================*/

class Hero extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `<div class="hero">
      <div class="hero-content m-1">
         <h1 class="hero-title text-gold mb-0">I Am Ace Baugh</h1>

         <h2 class="hero-subtitle text-light mt-3">I am a Full-Stack Developer</h2>

         <a href="about.html" class="btn btn-primary">Get To Know Me</a>
      </div>
   </div>`;
	}
}

customElements.define('hero-component', Hero);
