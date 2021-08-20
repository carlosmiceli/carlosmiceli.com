<template>
	<div
		id="portfolio-section"
		v-show="show === id"
		:class="{ expandAnimation: show === id }"
	>
		<h3>PORTFOLIO</h3>
		<p>
			Below are some highlights of projects I've built in chronological order.
			You can see more on my
			<a target="_blank" href="https://github.com/carlosmiceli">Github</a>
			profile.
		</p>
		<div class="portfolio-list-item">
			<div class="portfolio-project-title" @click="expand(1)">
				<h3>
					Interactive Canvas
				</h3>
				<p style="font-size: 20px">+</p>
			</div>
			<div :class="[target !== 1 ? collapseClass : expandClass]">
				<div class="portfolio-project-images">
					<img
						src="../../public/portfolio-images/canvas-1.gif"
						alt="canvas-1"
					/>
					<img
						src="../../public/portfolio-images/canvas-2.gif"
						alt="canvas-2"
					/>
					<img
						src="../../public/portfolio-images/canvas-3.gif"
						alt="canvas-3"
					/>
					<img
						src="../../public/portfolio-images/canvas-4.gif"
						alt="canvas-4"
					/>
				</div>
				<p>
					<strong>Goal:</strong> This was an idea for a project where I could
					test my front-end skills a bit further, and play around with new
					libraries like Konva. I have no plans to develop it further. It was
					also a fun way to learn some Next.js and test deploying in Vercel.
					<a href="https://canvas-svg.vercel.app/">Visit the Website.</a>
				</p>
				<br />
				<p>
					<strong>Tech stack:</strong> Javascript, React, Next.js, Material UI,
					Konva, Svgson
				</p>
				<br />
				<p><strong>Description</strong></p>
				<p>
					Prototype of interactive canvas with sample images to drag and drop in
					an image editor where you can transform them, save the changes
					automatically in LocalStorage, make certain edits with keyboard
					shortcuts (e.g.: Cmd + C/V to copy/paste), and download the final
					result.
				</p>
				<ul></ul>
				<p @click="expand(1)" class="portfolio-close-text">
					Close
				</p>
			</div>
		</div>
		<div class="portfolio-list-item">
			<div
				class="portfolio-project-title"
				@click="expand(2)"
				:class="[target > 0 && target < 2 ? collapseClass : expandClass]"
			>
				<h3>
					Learn Panel
				</h3>
				<p style="font-size: 20px">+</p>
			</div>
			<div :class="[target !== 2 ? collapseClass : expandClass]">
				<div class="portfolio-project-images">
					<img
						src="../../public/portfolio-images/learnpanel-1.png"
						alt="learnpanel-1"
					/>
					<img
						src="../../public/portfolio-images/learnpanel-2.png"
						alt="learnpanel-2"
					/>
					<img
						src="../../public/portfolio-images/learnpanel-3.png"
						alt="learnpanel-3"
					/>
				</div>
				<p>
					<strong>Goal:</strong> Build a prototype for an idea I had for focused
					learning, after being frustrated with frequent online distractions
					because of most popular platforms' algorithms and design (e.g.:
					Youtube, Chrome).
					<a href="https://flamboyant-euler-94f8f7.netlify.app/"
						>Visit the Website.</a
					>
				</p>
				<br />
				<p>
					<strong>Tech stack:</strong> Javascript, Node.js, Express, Vue, Vuex,
					Vuetify, MongoDB, Mongoose, Redis, Cheerio
				</p>
				<br />
				<p><strong>Description</strong></p>
				<p>
					App provides a personalized learning environment with features such
					as:
				</p>
				<ul>
					<li>
						Paste links of long content to watch/read directly in the dashboard.
					</li>
					<li>
						Text gets scraped and videos get embedded after pasting.
					</li>
					<li>
						Take notes and automatically save them in real time without having
						to do anything.
					</li>
					<li>Time yourself to see how long you've been learning.</li>
					<li>
						Each piece of content's notes loads with its corresponding piece of
						content.
					</li>
					<li>
						Session, last piece of content being consumed, and its corresponding
						notes persist after reloading, so you can pick your learning right
						back up where you left it every time you open the page.
					</li>
				</ul>
				<p>
					As a side note, since the server is hosted for free on Heroku, I set
					up a Cron Job to ping the server every 30 mins. and keep Heroku's dyno
					running.
				</p>
				<ul></ul>
				<p @click="expand(2)" class="portfolio-close-text">
					Close
				</p>
			</div>
		</div>
		<div class="portfolio-list-item">
			<div
				class="portfolio-project-title"
				@click="expand(3)"
				:class="[target > 0 && target < 3 ? collapseClass : expandClass]"
			>
				<h3>
					Estonia Experience's Website
				</h3>
				<p style="font-size: 20px">+</p>
			</div>
			<div :class="[target !== 3 ? collapseClass : expandClass]">
				<div class="portfolio-project-images">
					<img
						src="../../public/portfolio-images/estonia-1.png"
						alt="estonia-1"
					/>
					<img
						src="../../public/portfolio-images/estonia-2.png"
						alt="estonia-2"
					/>
					<img
						src="../../public/portfolio-images/estonia-3.png"
						alt="estonia-3"
					/>
					<img
						src="../../public/portfolio-images/estonia-4.png"
						alt="estonia-4"
					/>
				</div>
				<p>
					<strong>Goal:</strong> Create a better-looking, modern and
					good-converting landing page for my company.
					<a href="https://estoniaexp.com">Visit the Website.</a>
				</p>
				<br />
				<p>
					<strong>Tech stack:</strong> Javascript, Node.js, React and Firebase.
				</p>
				<br />
				<p><strong>Description</strong></p>
				<p>
					As one of the founders of Estonia Experience, I wanted to build our
					own website that motivates visitors to want to learn about the
					business and apply to participate. What was accomplished:
				</p>
				<ul>
					<li>
						Responsive and modern-looking website.
					</li>
					<li>
						Successfully implemented multiples types of animations with vanilla
						JS and CSS.
					</li>
					<li>
						Ability for visitors to apply and leave questions.
					</li>
					<li>
						Randomizing galleries of pictures and testimonials to give a fresh
						feeling to returning visitors.
					</li>
					<li>
						Automations with Firebase and Zapier to receive applications and
						questions via inbox and Drive spreadsheets.
					</li>
					<li>
						Wrote most code without relying on libraries, with the exception of
						React Bootstrap for Forms.
					</li>
				</ul>
				<p @click="expand(3)" class="portfolio-close-text">
					Close
				</p>
			</div>
		</div>
		<div class="portfolio-list-item">
			<div
				class="portfolio-project-title"
				@click="expand(4)"
				:class="[target > 0 && target < 4 ? collapseClass : expandClass]"
			>
				<h3>
					Best Alquileres' Platform
				</h3>
				<p style="font-size: 20px">+</p>
			</div>
			<div :class="[target !== 4 ? collapseClass : expandClass]">
				<div class="portfolio-project-images">
					<img src="../../public/portfolio-images/best-1.png" alt="best-1" />
					<img src="../../public/portfolio-images/best-2.png" alt="best-2" />
					<img src="../../public/portfolio-images/best-3.png" alt="best-3" />
				</div>
				<p>
					<strong>Status:</strong> Joined as minority owner to gradually build
					the company's online rental platform for apartment owners and guests
					in Latin America, after originally building and releasing its MVP.
					<a href="https://bestalquileres.com.ar/">Visit the Website.</a>
				</p>
				<br />
				<p>
					<strong>Tech stack:</strong> Javascript, Node.js, React and Firebase.
				</p>
				<br />
				<p><strong>Description</strong></p>
				<p>
					The client wanted to have a website where:
				</p>
				<ol>
					<li>People could see temporary rental options.</li>

					<li>Apartment owners could send their information.</li>
					<li>
						The client could upload specific apartments and travel experiences.
					</li>
				</ol>
				<p>
					The MVP was released with plenty of room for improvements while still
					delivering on all of the client's needs. What was accomplished:
				</p>
				<ul>
					<li>
						Semi-responsive good-looking website.
					</li>
					<li>
						Ability for apartment owners to send form applications to get
						published on the site.
					</li>
					<li>
						Self-updating gallery of apartments and travel experiences.
					</li>
					<li>
						FAQ page.
					</li>
					<li>
						Blog section for SEO purposes.
					</li>
					<li>
						Cloud hosting and domain setup.
					</li>
				</ul>
				<p>Upcoming features include:</p>
				<ul>
					<li>
						Allow owners sign up to upload apartments and manage bookings from
						their account.
					</li>
					<li>
						Receive and send payments.
					</li>
					<li>
						Automate communication between guests and hosts.
					</li>
					<li>
						Allow users to sign up and manage their bookings from the website.
					</li>
					<li>
						Add filters for searching apartments.
					</li>
					<li>
						Integrate a calendar service for booking length of stay.
					</li>
					<li>
						Add different pricing and currency depending on visitor's IP.
					</li>
					<li>
						Refactor code, improve responsiveness and fix bugs.
					</li>
				</ul>
				<p @click="expand(4)" class="portfolio-close-text">Close</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Portfolio",
	props: ["id", "show"],
	data() {
		return {
			target: 0,
			collapseClass: "collapse-class",
			expandClass: "expand-class",
		};
	},
	methods: {
		expand(id) {
			if (this.target !== id) {
				this.target = id;
			} else this.target = 0;
		},
	},
};
</script>

<style scoped>
#portfolio-section {
	margin-top: 10px;
	align-self: flex-start;
}

#portfolio-section h3 {
	font-weight: 500;
	margin-bottom: 8px;
}

.portfolio-list-item {
	margin-top: 15px;
	overflow: hidden;
}

.portfolio-project-title {
	font-size: 14px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgba(180, 180, 180, 0.637);
}

.portfolio-project-title:hover {
	cursor: pointer;
}

.portfolio-close-text {
	text-align: center;
	font-size: 11px;
}

.portfolio-close-text:hover {
	cursor: pointer;
}

.collapse-class {
	max-height: 0;
	opacity: 0;
	z-index: -1;
}

.expand-class {
	max-height: 100%;
	transition: all 0.5s;
}
</style>
