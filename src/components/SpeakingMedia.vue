<template>
	<div
		id="speaking-section"
		v-show="show === id"
		:class="{ fadeIn: show === id }"
	>
		<img
			src="https://firebasestorage.googleapis.com/v0/b/carlos-miceli-s-website.appspot.com/o/profile.jpg?alt=media&token=b737650e-2d76-497e-b663-64644a070b55"
			alt="speaking"
		/>
		<h3>SPEAKING</h3>
		<p>
			I've been blessed with the opportunity to deliver dozens of presentations
			worldwide at institutions such as Harvard, Stanford, MIT, and more. I
			received formal speaking training at programs like Own The Room in San
			Francisco, and direct mentorship by Gerry Garbulsky, TED Español Director.
		</p>
		<br />
		<p>
			I always enjoyed public speaking because a well-delivered talk can inspire
			and trigger positive long-lasting changes in the listener. However, I
			never aspired to be a full-time speaker/writer because I believe in
			creating value outside of the lecture hall, in the "real world," and then
			sharing the lessons from my own personal experience with other people
			(what Nassim Taleb calls "doxastic commitment").
		</p>
		<br />
		<p style="font-weight: 600">
			I'm currently not interested in doing any form of public speaking due to
			my focus on
			<a
				target="_blank"
				href="https://paper.dropbox.com/doc/My-Journey-to-Coding-Mastery--BJTgryfnBiB43a_nmogdSq~UAQ-kDdrF9BRDEx3KXjH6V8tp"
			>
				My Journey to Coding Mastery</a
			>
		</p>
		<br />
		<h3>MEDIA</h3>
		<p>
			My work was featured in media around the world, in countries such as
			United States, Spain, Australia, Mexico, Chile, Colombia and Argentina.
			Apertura magazine, the most important business magazine of Latin America,
			named me a Top Leader of Argentina Under 35.
		</p>
		<br />
		<img
			style="float:right; width:35%; margin-left: 15px;"
			src="../../public/ebook.jpeg"
			alt="speaking"
		/>
		<p>
			In 2012 I wrote a short e-book in Spanish, titled "The Power of Your
			Context", about creating routines and establishing processes to improve
			our personal productivity.
		</p>
	</div>
</template>

<script>
export default {
	name: "Speaking and Media",
	props: ["id", "show"],
};
</script>

<style scoped>
#speaking-section {
	margin-top: 10px;
	align-self: flex-start;
}

h3 {
	font-weight: 500;
}
</style>
