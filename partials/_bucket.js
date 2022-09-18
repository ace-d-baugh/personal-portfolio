/*============================================
; Title: Assignment Personal Portfolio - _bucket.js
; Author: Ace Baugh
; Start Date: 09/05/2022
; Description: WEB 330 Personal Portfolio About Page 
;              This partial contains a list of things
;              I want to do before I die.
============================================*/

class Bucket extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `<div class="bucket" id="bucket">BUCKET LIST</div>`;
	}
}

customElements.define('bucket-component', Bucket);
