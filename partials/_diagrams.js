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
		this.innerHTML = `
		<div class="diagrams col-12">
				<h1>Diagrams</h1>
					<div class="cards-container">
				<div class="card">
					<div class="card-header">
						<h2>NodeShopper Diagram</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/nodeShopper.png" alt="NodeShopper Diagram" />
						</div>
						<p><strong>Business Rules</strong></p>
							<ol>
								<li>a CUSTOMER can have many INVOICE(s)</li>
								<li>many INVOICE(s) are assigned to a CUSTOMER</li>
								<li>an INVOICE can have many LINEITEM(s)</li>
								<li>many LINEITEMs are added to an INVOICE</li>
							</ol>
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>NodeTech Diagram</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/nodeTech.png" alt="NodeTech Diagram" />
						</div>
						<p><strong>Business Rules</strong>
							<ol>
								<li>a STUDENT has many ENROLLMENT(s)</li>
								<li>an ENROLLMENT has many COURSE(s)</li>
								<li>a STUDENT ENROLL(s) in many COURSE(s)</li>
							</ol>
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>NodeSecurity Diagram</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/nodeSecurity.png" alt="NodeSecurity Diagram" />
						</div>
						<p><strong>Business Rules</strong>
							<ol>
								<li>a USER can have one or more assigned ROLE(s)</li>
								<li>a ROLE is associated with many PERMISSION(s)</li>
							</ol>
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>NodeBookCo Diagram</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/nodeBookCo.png" alt="NodeBookCo Diagram" />
						</div>
						<p><strong>Business Rules</strong>
							<ol>
								<li>a PUBLISHER can have one or more BOOK(s)</li>
								<li>a BOOK can have one or more AUTHOR(s)</li>
								<li>an AUTHOR can have one or more BOOK(s)</li>
							</ol>
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>WhatABook ORD</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/whatABookORD.png" alt="WhatABook ORD" />
						</div>
						<p><strong>Business Rules</strong>
							<ol>
								<li>WhatABook has many BOOK(s)</li>
								<li>a CUSTOMER can add many BOOK(s) to their WISHLIST</li>
								<li>a CUSTOMER can have many WISHLIST BOOK(s)</li>
								<li>WhatABook has many CUSTOMER(s)</li>
							</ol>
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>420 Capstone ORD</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/capstoneORD.PNG" alt="420 Capstone ORD" />
						</div>
						<p<strong>Business Rules</strong>
							<ol>
								<li>a TEAM can have many players</li>
								<li>•	a TEAM can have one mascot</li>
							</ol></p>
					</div>
				</div>
			</div>
		</div>
`;
	}
}

customElements.define('diagrams-component', Diagrams);
