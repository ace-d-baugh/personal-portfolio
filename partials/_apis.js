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
						<p>This shows all documents in the database using Swagger UI through the GET protocol.</p>
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
						<p>This shows how I added documents to the database using SoapUI through the POST protocol.</p>
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
						<p>This shows any document in the database that matches the provided ID using SoapUI through the GET protocol.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>SoapUI GET</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/SoapUI-Get.PNG" alt="SoapUI GET" />
						</div>
						<p>This shows all documents in the database using SoapUI through the GET protocol.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Swagger Post</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/Swagger-Post.PNG" alt="Swagger Post" />
						</div>
						<p>This shows how I added documents to the database using Swagger UI through the POST protocol.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>SoapUI SignUp Post</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/SoapUI-Post-Signup.PNG" alt="SoapUI SignUp Post" />
						</div>
						<p>This shows how I added documents to the database using SoapUI through the POST protocol.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Swagger Password Verify Post</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/Swagger-Post-Password-Verify.PNG" alt="Swagger Password Verify Post" />
						</div>
						<p>This shows how I verify passwords in the database using Swagger UI through the POST protocol.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>SoapUI Post New Customer</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/SoapUI-Post-NewCustomer.PNG" alt="SoapUI Post New Customer" />
						</div>
						<p>This shows how I added a new customer to the database using SoapUI through the POST protocol.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Swagger Post New Invoice</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/Swagger-Post-LineItem.PNG" alt="Swagger Post New Invoice" />
						</div>
						<p>This shows how I added new Invoices to an existing customer to the database using Swagger through the POST protocol.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>SoapUI Get Invoices</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/SoapUI-Get-Customers.PNG" alt="SoapUI Get Invoices" />
						</div>
						<p>This shows how I vew invoices by customer userName in the database using SoapUI through the GET protocol.</p>
					</div>
				</div>
			</div>
		</div>
`;
	}
}

customElements.define('apis-component', APIs);