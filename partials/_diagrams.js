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
						<h2>Diagram 1</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/coding.jpg" alt="Diagram 1" />
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deleniti, nesciunt recusandae aperiam sint facilis accusamus alias fugiat quia culpa iusto ullam? Facere cupiditate non voluptatem aliquid impedit quos labore!</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Diagram 2</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/coding.jpg" alt="Diagram 2" />
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deleniti, nesciunt recusandae aperiam sint facilis accusamus alias fugiat quia culpa iusto ullam? Facere cupiditate non voluptatem aliquid impedit quos labore!</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Diagram 3</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/coding.jpg" alt="Diagram 3" />
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deleniti, nesciunt recusandae aperiam sint facilis accusamus alias fugiat quia culpa iusto ullam? Facere cupiditate non voluptatem aliquid impedit quos labore!</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Diagram 4</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/coding.jpg" alt="Diagram 4" />
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deleniti, nesciunt recusandae aperiam sint facilis accusamus alias fugiat quia culpa iusto ullam? Facere cupiditate non voluptatem aliquid impedit quos labore!</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Diagram 5</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/coding.jpg" alt="Diagram 5" />
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deleniti, nesciunt recusandae aperiam sint facilis accusamus alias fugiat quia culpa iusto ullam? Facere cupiditate non voluptatem aliquid impedit quos labore!</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Diagram 6</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/coding.jpg" alt="Diagram 6" />
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deleniti, nesciunt recusandae aperiam sint facilis accusamus alias fugiat quia culpa iusto ullam? Facere cupiditate non voluptatem aliquid impedit quos labore!</p>
					</div>
				</div>
			</div>
		</div>
`;
	}
}

customElements.define('diagrams-component', Diagrams);
