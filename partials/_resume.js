/*============================================ 
; Title: Assignment Personal Portfolio - _resume.js 
; Author: Ace Baugh ; Start Date: 09/05/2022 
; Description: WEB 330 Personal Portfolio Resume Page 
; This partial contains my resume in HTML format 
; and a link to download the resume pdf.
============================================*/

class Resume extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
	<div class="resume-container">
		<div class="resume small-screen">
			<h1 class="section-header">Resume</h1>
			<p class="resume justify">Please click the button below to download my resume in PDF format.</p>
			<a href="public/data/ace-baugh-resume.pdf" target="_blank"><img src="public/images/resume.png" alt="Ace Baugh Resume" /></a>
		</div>
      <div class="resume big-screen">
			<!-- Resume Top Section -->
			<div class="resume-top">
				<div class="resume-header-container">
					<!-- Decorative line-->
					<div class="accent-bar"></div>
					<!-- Resume Name Section-->
					<div class="resume-header">
						<div class="resume-image">
							<img src="./public/images/me.jpg" />
						</div>
						<div class="resume-elevator">
							<div class="resume-name">Ace D. Baugh</div>
							<div class="resume-tag">Full-Stack Web Developer</div>
							<div class="resume-elevator-text">
								Motivated junior web developer looking for a role as full-stack web developer at Locals. Passionate about building first-class web
								applications. Developed an e-commerce website for a local subscription based home-made goods retailer while at BelleVue University.
								Relevant skills include Agile Workflow, Database design, Debugging, and more.
							</div>
						</div>
					</div>
				</div>
				<!-- Resume Contact Section -->
				<div class="resume-contact-info">
					<div class="resume-contact-item resume-email">
						<i class="fa-solid fa-envelope"></i><a href="mailto:ace@digitalelegance.com">ace@DigitalElegance.com</a>
					</div>
					<div class="resume-contact-item resume-phone">
						<i class="fa-solid fa-mobile-screen"></i><a href="tel:+12085579223">+1 208 55-79-ACE (223)</a>
					</div>
					<div class="resume-contact-item resume-address">
						<i class="fa-solid fa-map-location-dot"></i
						><a
							href="https://www.google.com/maps/place/Orlando,+FL/@28.4814032,-81.4827443,11z/data=!3m1!4b1!4m5!3m4!1s0x88e773d8fecdbc77:0xac3b2063ca5bf9e!8m2!3d28.5383858!4d-81.3789296"
							target="_blank"
							>Orlando, FL</a
						>
					</div>
					<div class="resume-contact-item resume-github">
						<i class="fa-brands fa-github"></i><a href="https://github.com/ace-d-baugh" target="_blank">github.com/ace-d-baugh</a>
					</div>
					<div class="resume-contact-item resume-linkedin">
						<i class="fa-brands fa-linkedin"></i><a href="https://linkedin.com/in/ace-d-baugh/" target="_blank">linkedin.com/in/ace-d-baugh/</a>
					</div>
					<div class="resume-contact-item resume-website">
						<i class="fa-solid fa-browser"></i><a href="https://digitalelegance.com" target="_blank">DigitalElegance.com</a>
					</div>
				</div>
			</div>
			<!-- Resume Bottom Section-->
			<div class="resume-main">
				<div class="resume-main-content">
					<!-- Projects Section -->
					<div class="resume-projects">
						<div class="resume-section-header"><i class="fa-solid fa-project-diagram"></i>Projects</div>
						<div class="resume-project-name">Pets-R-Us</div>
						<div class="resume-project-description">
							This mock website allows users to book appointment and see them after entering in their email address. Original design with custom CSS
							and version controlled on GitHub and run on Heroku
						</div>
						<div class="resume-project-name">DigitalElegance.com</div>
						<div class="resume-project-description">
							My personal website for my fine art photography and showing off my fine code programming. It was converted over from a wordpress site
							to an original work with GitHub version control.
						</div>
						<div class="resume-project-name">YelpCamp</div>
						<div class="resume-project-description">
							A mock full-stack CRUD website that allows users to register, sign in, create camp sites and review them. It utilized many technologies
							including Node.js React, Express, Firebase, MongoDB Heroku, and Bootstrap.
						</div>
					</div>
					<!-- Experience Section -->
					<div class="work-experience">
						<div class="resume-section-header"><i class="fa-regular fa-briefcase"></i>Work Experience</div>
						<div class="resume-job-header">
							<div class="resume-job-title">VIP Tour Guide</div>
							<div class="resume-employer">The Walt Disney Company</div>
							<div class="resume-years">2018-Present</div>
						</div>
						<div class="resume-job-details">
							<ul>
								<li>
									Shared passion & knowledge of Disney Products with Guests through scripted and non-scripted tours for affluent guests throughout
									Disney Property while maintaining discretion and Guest confidentiality
								</li>
								<li>
									Upheld a professional demeanor and adapting to quick-changing circumstances and proactively seeking out creative solutions by
									collaborating with many lines of business
								</li>
							</ul>
						</div>
						<div class="resume-job-header">
							<div class="resume-job-title">PhotoPass Photographer</div>
							<div class="resume-employer">The Walt Disney Company</div>
							<div class="resume-years">2018-2022</div>
						</div>
						<div class="resume-job-details">
							<ul>
								<li>Worked effectively capturing memories for families as a personalized photographer</li>
								<li>Recognized by leaders, performers and guests for high-level energy and quality of product</li>
								<li>Specifically chosen for one-of-a-kind photoshoots and given many specialty-training responsibilities</li>
							</ul>
						</div>
						<div class="resume-job-header">
							<div class="resume-job-title">Shift Manager and Trainer</div>
							<div class="resume-employer">The Walt Disney Company</div>
							<div class="resume-years">2014-2018</div>
						</div>
						<div class="resume-job-details">
							<ul>
								<li>Worked closely with Disney Imagineering team to improve attractions prior to launch</li>
								<li>Provided legendary guest service and assisted 1500+ guests per hour at the newly opened, fast-paced attractions</li>
								<li>Trained newly employed Cast Members, trainers, and seasoned managers on all aspects of the company and attraction</li>
								<li>Recognized by guests, peers, and leaders for yearly award for exceptional work ethic</li>
							</ul>
						</div>
					</div>
					<!-- Education Section -->
					<div class="education">
						<div class="resume-section-header"><i class="fa-solid fa-graduation-cap"></i>Education</div>
						<div class="school-degree">BS in Web Development</div>
						<div class="school-name">Bellevue University</div>
						<div class="school-years">2022-2023</div>
						<div class="school-degree">AS in Business Management - Marketing</div>
						<div class="school-name">Brigham Young University - Idaho</div>
						<div class="school-years">2007-2010</div>
					</div>
					<!-- Certification & Awards Section -->
					<div class="certifications">
						<div class="resume-section-header"><i class="fa-regular fa-file-certificate"></i>Awards & Certifications</div>
						<div class="award-name">Dean's List</div>
						<div class="award-issuer">Bellevue University</div>
						<div class="award-name">Dean's List</div>
						<div class="award-issuer">Wilmington University</div>
						<div class="award-name">Certificate - Mobile Application Development</div>
						<div class="award-issuer">Wilmington University</div>
						<div class="award-name">Certificate - Digital Marketing</div>
						<div class="award-issuer">Wilmington University</div>
						<div class="award-name">Certificate - Full Stack Web Development Bootcamp</div>
						<div class="award-issuer">Udemy.com - Colt Steele</div>
					</div>
				</div>

				<!-- Side Column -->
				<div class="resume-side-bar">
					<div class="skills">
						<div class="resume-section-header"><i class="fa-solid fa-screwdriver-wrench"></i>Skills</div>
						<div class="skill-hashes">
							<div class="skill-hash">|</div>
							<div class="skill-hash">|</div>
							<div class="skill-hash">|</div>
							<div class="skill-hash">|</div>
							<div class="skill-hash">|</div>
						</div>
						<div class="skill-name">HTML5</div>
						<div class="skill-box">
							<div class="skill-percent w-100"></div>
						</div>
						<div class="skill-name">CSS3</div>
						<div class="skill-box">
							<div class="skill-percent w-100"></div>
						</div>
						<div class="skill-name">JavaScript</div>
						<div class="skill-box">
							<div class="skill-percent w-100"></div>
						</div>
						<div class="skill-name">TypeScript</div>
						<div class="skill-box">
							<div class="skill-percent w-40"></div>
						</div>
						<div class="skill-name">C#</div>
						<div class="skill-box">
							<div class="skill-percent w-60"></div>
						</div>
						<div class="skill-name">Node.js</div>
						<div class="skill-box">
							<div class="skill-percent w-60"></div>
						</div>
						<div class="skill-name">Express</div>
						<div class="skill-box">
							<div class="skill-percent w-70"></div>
						</div>
						<div class="skill-name">Angular</div>
						<div class="skill-box">
							<div class="skill-percent w-70"></div>
						</div>
						<div class="skill-name">React</div>
						<div class="skill-box">
							<div class="skill-percent w-90"></div>
						</div>
						<div class="skill-name">Adobe Creative Suite</div>
						<div class="skill-box">
							<div class="skill-percent w-100"></div>
						</div>
						<div class="skill-name">Microsoft Office Suite</div>
						<div class="skill-box">
							<div class="skill-percent w-100"></div>
						</div>
					</div>
					<div class="service">
						<div class="resume-section-header"><i class="fa-solid fa-hand-holding-heart"></i>Service</div>
						<div class="service-name">Outlook Development</div>
						<div class="service-details">Mentor to students, ages 16 to 70+, to improve life with proprietary goal system.</div>
						<div class="service-name">Key Club/Kiwanis</div>
						<div class="service-details">Worked closely with Kiwanis Club and ARC to perform many service projects</div>
						<div class="service-name">Ecclesiastical Service</div>
						<div class="service-details">2 years, self-paid service trip in Germany and Switzerland</div>
						<div class="service-name">Boy Scouts of America</div>
						<div class="service-details">Countless hours of service projects</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="resume-btn">
		<a href="public/data/ace-baugh-resume.pdf" target="_blank"><div class="btn btn-primary">Download CV/Resume</div></a>
	</div>
	`;
	}
}
customElements.define('resume-component', Resume);
