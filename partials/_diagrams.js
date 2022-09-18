/*============================================
; Title: Assignment Personal Portfolio - _diagrams.js
; Author: Ace Baugh
; Start Date: 09/05/2022
; Description: WEB 330 Personal Portfolio Diagrams & APIs Page 
;              This partial contains pictures of database diagrams
;              I made in the WEB 335 course.
============================================*/

class Diagrams extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `DIAGRAMS`;
	}
}

customElements.define('diagrams-component', Diagrams);
