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
						<p>This shows how I added new Invoices to an existing customer by Id to the database using Swagger through the POST protocol.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>SoapUI Put</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/SoapUI-Put.PNG" alt="SoapUI Put" />
						</div>
						<p>This shows how I update the first and last name of a composer by Id in the database using SoapUI through the PUT protocol.</p>
					</div>
				</div>
				
				<div class="card">
					<div class="card-header">
						<h2>Swagger Delete</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/Swagger-Delete.PNG" alt="Swagger Delete" />
						</div>
						<p>This shows how I delete composers by Id from the database using Swagger through the DELETE protocol.</p>
					</div>
				</div>
				
				<div class="card">
					<div class="card-header">
						<h2>Swagger Find All Teams</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/Swagger-Get-Teams.PNG" alt="Swagger Find All Teams" />
						</div>
						<p>This shows how retrieve all the teams of the database using Swagger through the GET protocol.</p>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<h2>Swagger Assign Player To Team</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/Swagger-Post-Team-Player.PNG" alt="Swagger Assign Player To Team" />
						</div>
						<p>This shows how I added new Players to an existing Team by Id to the database using Swagger through the POST protocol.</p>
					</div>
				</div>
				
				<div class="card">
					<div class="card-header">
						<h2>Swagger Find Players by Team ID</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/SoapUI-Put.PNG" alt="Swagger Find Players by Team ID" />
						</div>
						<p>This shows how I retrieve all players by the team Id in the database using Swagger through the GET protocol.</p>
					</div>
				</div>
				
				<div class="card">
					<div class="card-header">
						<h2>Swagger Delete Team</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/Swagger-Delete-Team.PNG" alt="Swagger Delete Team" />
						</div>
						<p>This shows how I delete a Team by ID from the database using Swagger through the DELETE protocol.</p>
					</div>
				</div>
			</div>
		</div>
`;
	}
}

customElements.define('apis-component', APIs);