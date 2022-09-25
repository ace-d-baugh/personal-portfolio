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
		this.innerHTML = `
							<div class="bucket-list col-12">
				<h1>My Bucket List</h1>
					<div class="cards-container">
				<div class="card">
					<div class="card-header">
						<h2>Graduate with Bachelors in Web Development</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/graduate.jpg" alt="Diagram 1" />
						</div>
						<p>I will be graduating in the summer of 2023 with my Bachelors of Science in Web Development from Bellevue University with certificates in Digital Marketing and Mobile Application Development from Wilmington University thanks to Disney's Aspire program.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Work Remotely</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/remote-work.jpg" alt="Diagram 2" />
						</div>
						<p>After I graduate, I would like to work for a company that allows me to work remotely as well as from home and the office, so I can spend time with my family and give them all the chances to learn from the world around them. </p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Home Theater</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/home-theater.jpg" alt="Diagram 3" />
						</div>
						<p>I love to relax with a good movie and there is no better way to enjoy a movie than in the theater. I used to manage a multi-screen theater and would love to have a personal theater in my house where I can sit back and relax with a super souround sound system. </p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Home Garden</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/garden.jpg" alt="Diagram 4" />
						</div>
						<p>With prices of the market becoming more and more volatile, having a home garden is becoming increasingly more important and I would love to have a garden at home that could produce much of the food I would need in a year for my entire family and even some of my neighbors.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Visit All Disney Parks</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/disney-caslte.jpg" alt="Diagram 5" />
						</div>
						<p>I have loved Disney for most of my life and have been blessed to work at both of the America-based parks, Disneyland and Walt Disney World. I would love to visit and get to know the other parks world-wide. </p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Visit All LDS Temples</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/temple.jpg" alt="Diagram 6" />
						</div>
						<p>As a member of the Church of Jesus Christ of Latter-Day Saints, faith is a very important part of my life. Going to the Temple is one of the many great things I get to participate in. I would love to visit all of the 170+ operating temples in the world and hope to see the over 60 temples announced to open in the future.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>RV the United States</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/rv.jpg" alt="Diagram 4" />
						</div>
						<p>As you can see, travel is a big part of who I am. I would love to take my time and visit this great nation of ours to explore its valleys, mountains and many water ways. I would like to travel by RV and visit all 48 states and see what this land has to offer.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Sell Fine Art Photography</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/gallery.jpg" alt="Diagram 5" />
						</div>
						<p>I have a passion for photography and I would love to be known for my Disney Parks Fine Art Photography. I would love to sell my photographs of the Disney Parks in the Epcot Festival of the Arts which happens every year in Florida.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h2>Travel to Space</h2>
					</div>
					<div class="card-content">
						<div class="card-image">
							<img src="public/images/space.jpg" alt="Diagram 6" />
						</div>
						<p>There is almost no other way to dream any bigger than saying you want to reach for the stars literally. Going into outer space and feeling weightless while going where so few have gone, would be an ultimate dream. I am fascinated with space and would enjoy a chance to see it in person.</p>
					</div>
				</div>
			</div>
		</div>
`;
	}
}

customElements.define('bucket-component', Bucket);
