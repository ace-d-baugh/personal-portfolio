/*============================================
; Title: Assignment Personal Portfolio - _about.js
; Author: Ace Baugh
; Start Date: 09/05/2022
; Description: WEB 330 Personal Portfolio About Page 
;              This partial contains a detailed introduction
;              to myself and what I like to do.
============================================*/

class About extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `ABOUT`;
	}
}

customElements.define('about-component', About);
