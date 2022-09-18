/*============================================
; Title: Assignment Personal Portfolio - _header.js
; Author: Ace Baugh
; Start Date: 09/05/2022
; Description: WEB 330 Personal Portfolio ALL Pages
;              This partial contains a Logo and
;              navigation bar with links.
============================================*/

class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `<div class="header col-12">
      <div class="header-logo">Ace Baugh</div>
      <div class="navbar">
         <div class="navbar-item"><a href="index.html">Home</a></div>
         <div class="navbar-item"><a href="about.html">About</a></div>
         <div class="navbar-item"><a href="resume.html">Resume</a></div>
         <div class="navbar-item"><a href="index.html#projects">Projects</a></div>
         <div class="navbar-item"><a href="diagrams-api.html">Diagrams</a></div>
         <div class="navbar-item"><a href="diagrams-api.html#apis">APIs</a></div>
         <div class="navbar-item"><a href="about.html#bucket-list">Bucket List</a></div>
      </div>
   </div>
`;
	}
}

customElements.define('header-component', Header);
