<template>
  <div id="about-section" v-show="show === id" :class="{ fadeIn: show === id }">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/carlos-miceli-s-website.appspot.com/o/2016-05-10%2018.47.25.JPG?alt=media&token=90af686a-bc2a-4f3b-bcb0-e5897566b759"
      alt="egypt" />
    <p>
      Hello! My name is Carlos, and I'm an entrepreneur, developer, digital
      nomad and amateur DJ. Originally from Buenos Aires, Argentina, I've lived and worked in
      multiple continents, founded multiple companies, and advised hundreds of
      people on how to grow their businesses and careers.
    </p>
    <br />
    <!-- <p>
            Due to the global events of 2020, I decided to take a year-long
            sabbatical, in which my curiosity led me to fall in love with
            coding. My focus is now 100%
            <a
                target="_blank"
                href="https://paper.dropbox.com/doc/My-Journey-to-Coding-Mastery--BJTgryfnBiB43a_nmogdSq~UAQ-kDdrF9BRDEx3KXjH6V8tp"
                >My Journey to Coding Mastery</a
            >
            and working as a developer.
        </p>
        <br /> -->
    <p>
      I like to split my time between:
    <ul>
      <li>
        Fun activities with family and friends.
      </li>
      <li>
        Improving my coding skills and knowledge of relevant technologies.
      </li>
      <li>
        Discovering and mixing electronic music.
      </li>
      <li>
        Traveling and exploring international cultures (visited +40 countries and lived in 7 of them).
      </li>
      <li>
        Working out and learning about psychology, fitness, nutrition, etc. to test new systems for my overall health.
      </li>
      <li>
        Watching the NBA (more specifically the Los Angeles Lakers).
      </li>
      <li>
        Playing football and beautifully made videogames like Zelda, Metroid, and Starcraft.
      </li>
    </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  props: ["id", "show"],
};
</script>

<style scoped>
#about-section {
  margin-top: 10px;
  align-self: flex-start;
}
</style>
