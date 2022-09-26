/*============================================
; Title: Assignment Personal Portfolio - _favorites.js
; Author: Ace Baugh
; Start Date: 09/05/2022
; Description: WEB 330 Personal Portfolio About Page 
;              This partial contains a few of my favorite
;              things.
============================================*/

class Favorites extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
					<div class="favorites">
				<h1>A Few of My Favorite Things</h1>
				<div class="fave-items">
					<div class="fave-item w-100">
						<img src="public/images/photography.jpg" alt="Camera Gear" class="fave-item-img" />
						<div class="fave-item-words justify">
							<h2 class="fave-item-header">Photography</h2>
							<div class="fave-item-description">I have always loved being behind the camera capturing moments. I found myself documenting many a Boy Scout outing. In High School, I was the chief photographer and editor of all photos that came in. When I lived in Switzerland and Germany, I found a deeper appreciation for architecture and landscape photography. Now, you can find me photographing the most magical place on Earth.</div>
						</div>
					</div>
					<div class="fave-item w-100">
						<div class="fave-item-words justify">
							<h2 class="fave-item-header">Traveling</h2>
							<div class="fave-item-description">One of the most amazing things to me is seeing new places and being exposed to different people and cultures. One of the many reasons Epcot is my favorite Walt Disney World Park. I got the chance to live in Germany and Switzerland for 2 years of my young adult life and I became infatuated with the idea of travel. I hope to do a lot more in the future. Just look at my bucket list below.</div>
						</div>
						<img src="public/images/travel.jpg" alt="Map of the world" class="fave-item-img" />
					</div>
					<div class="fave-item w-100">
						<img src="public/images/penguins.jpg" alt="Group of Penguins" class="fave-item-img reverse" />
						<div class="fave-item-words justify">
							<h2 class="fave-item-header">Penguins</h2>
							<div class="fave-item-description">In the fourth grade I had to give a report of an animal of my choice. I somehow stumbled upon these odd flightless birds and quickly fell in love. There are so many different types of penguins and I would love to meet each kind. My wife took me to Sea World for a back stage look at the penguins there where I got to pet one and even feed a few. They may not have too much color, but they have a lot of personality.</div>
						</div>
					</div>
					<div class="fave-item w-100">
						<div class="fave-item-words justify">
							<h2 class="fave-item-header">Origami</h2>
							<div class="fave-item-description">The ancient Japanese art of paper folding where things and animals are made from only paper  with no assistance of scissors, glue, or tape has always fascinated me. I have committed to memory many flowers and animals so at a moment's notice I can produce some amazing thing. I have used it to calm a child and even woo my wife. Origami is like magic to me, much like web design.</div>
						</div>
						<img src="public/images/origami.jpg" alt="Paper Origami Crane" class="fave-item-img reverse" />
					</div>
				</div>
			</div>
`;
	}
}

customElements.define('favorites-component', Favorites);
