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
      <div class="header-logo">
      <svg class="ace-logo" width="100%" height="100%" viewBox="0 0 800 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
         <g class="ace-a" transform="matrix(1.231,0,0,1.31198,-113.819,-265.462)">
            <path d="M245.574,372.723L159.463,372.723L137.064,430.999L92.46,430.999L183.207,202.337L221.488,202.337L312.235,430.999L267.973,430.999L245.574,372.723ZM202.86,257.367L172.966,337.689L232.071,337.689C232.071,337.689 202.589,257.414 202.86,257.367Z" style="fill-rule:nonzero;"/>
         </g>
         <g class="ace-c" transform="matrix(1.231,0,0,1.31198,-18.2795,-243.594)">
            <path d="M396.825,231.721C396.825,231.721 282.537,299.412 282.609,299.467L396.825,367.923L396.825,414.331L246.41,319.915L246.41,280.085L396.825,185.669L396.825,231.721Z" style="fill-rule:nonzero;"/>
         </g>
         <g class="ace-e-main" transform="matrix(1.231,0,0,1.31198,-94.5434,-243.594)">
            <path d="M518.765,368.279C518.765,368.279 633.054,300.588 632.981,300.533L518.765,232.077L518.765,185.669L669.18,280.085L669.18,319.915L518.765,414.331L518.765,368.279Z"/>
         </g>
         <g class="ace-e-top" transform="matrix(1.06282,0,0,1.14283,-9.96713,0)">
            <path d="M608.386,40.22L544.442,0L750.239,0L750.239,40.22L608.386,40.22Z"/>
         </g>
         <g class="ace-e-bottom" transform="matrix(1.12403,0,0,1.14283,-43.2927,0)">
            <path d="M750.239,222.287L750.239,262.507L544.442,262.507L608.386,222.287L750.239,222.287Z"/>
         </g>
         <g class="ace-e-middle" transform="matrix(1.06282,0,0,1.16725,0.661095,-1.84247)">
            <rect x="695.495" y="107.744" width="44.744" height="44.744"/>
         </g>
      </svg>
      </div>
      <div class="navbar">
         <div class="navbar-item"><a href="index.html">Home</a></div>
         <div class="navbar-item"><a href="about.html">About</a></div>
         <div class="navbar-item"><a href="resume.html">Resume</a></div>
         <div class="navbar-item"><a href="index.html#projects">Projects</a></div>
         <div class="navbar-item"><a href="diagrams-api.html">Diagrams</a></div>
         <div class="navbar-item"><a href="diagrams-api.html#apis">APIs</a></div>
         <div class="navbar-item"><a href="devops.html">DevOps</a></div>
         <div class="navbar-item"><a href="about.html#bucket-list">Bucket List</a></div>
      </div>
   </div>
`;
	}
}

customElements.define('header-component', Header);
