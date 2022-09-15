class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
      let year = new Date().getFullYear();
      
		this.innerHTML = `<div class="footer col-12">
      <div class="footer-links col-12">
      <div class="footer-link"><a href="https://github.com/ace-d-baugh" target="_blank">My GitHub</a></div>
      <div class="footer-link"><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University's Web Development Degree</a></div>
      <div class="footer-link"><a href="https://www.youtube.com/user/bellevueuniversity">YouTube</a></div>
      <div class="footer-link"><a href="https://github.com/buwebdev">Bellevue University's Web Dev GitHub</a></div>
      </div>
      <div class="copyright">&copy; ${year} All Rights Reserved | Ace Baugh</div>
   </div>`;
	}
}

customElements.define('footer-component', Footer);
