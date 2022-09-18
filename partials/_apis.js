/*============================================
; Title: Assignment Personal Portfolio - _apis.js
; Author: Ace Baugh
; Start Date: 09/05/2022
; Description: WEB 330 Personal Portfolio Diagrams & APIs Page 
;              This partial contains pictures of the API's 
;              unit tests I made in the WEB 420 course.
============================================*/

class Api extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `<div class="apis" id="apis">API</div>`;
	}
}

customElements.define('api-component', Api);
