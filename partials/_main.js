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
		this.innerHTML = `MAIN`;
	}
}

customElements.define('main-component', Main);
