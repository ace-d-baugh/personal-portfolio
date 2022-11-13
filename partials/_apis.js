/*============================================
; Title: Assignment Personal Portfolio - _apis.js
; Author: Ace Baugh
; Start Date: 09/05/2022
; Description: WEB 330 Personal Portfolio Diagrams & APIs Page 
;              This partial contains pictures of the API's 
;              unit tests I made in the WEB 420 course.
============================================*/

class APIs extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `		
			<div class="apis col-12" id="apis">
				<h1>APIs</h1>
					<div class="cards-container">
				<div class="card">
					<div class="card-header">
						<h2>Swagger Get</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/Swagger-Get.PNG" alt="Swaggger Get" />
						</div>
						<p>This is an attempt at getting API data from the Swagger UI in the routes. Not sure if we are supposed to show actual data from the Database, but so far nothing is in there.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>SoapUI Post</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/SoapUI-Post.PNG" alt="SoapUI Post" />
						</div>
						<p>This is an attempt at getting API data from the Soap UI in the routes. Not sure if we are supposed to show actual data from the Database, but so far nothing is in there.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>SoapUI- Get By Id</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/SoapUI-getId.PNG" alt="SoapUI- Get By Id" />
						</div>
						<p>This is an attempt at getting API data from the Soap UI in the routes. Not sure if we are supposed to show actual data from the Database, but so far nothing is in there.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>API 4</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/coding.jpg" alt="api 4" />
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deleniti, nesciunt recusandae aperiam sint facilis accusamus alias fugiat quia culpa iusto ullam? Facere cupiditate non voluptatem aliquid impedit quos labore!</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>API 5</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/coding.jpg" alt="api 5" />
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deleniti, nesciunt recusandae aperiam sint facilis accusamus alias fugiat quia culpa iusto ullam? Facere cupiditate non voluptatem aliquid impedit quos labore!</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>API 6</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/coding.jpg" alt="api 6" />
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deleniti, nesciunt recusandae aperiam sint facilis accusamus alias fugiat quia culpa iusto ullam? Facere cupiditate non voluptatem aliquid impedit quos labore!</p>
					</div>
				</div>
			</div>
		</div>
`;
	}
}

customElements.define('apis-component', APIs);
