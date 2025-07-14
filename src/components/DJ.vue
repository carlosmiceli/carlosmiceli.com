<template>
  <div id="dj-section" v-show="show === id" :class="{ fadeIn: show === id }">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/carlos-miceli-s-website.appspot.com/o/profile.jpg?alt=media&token=1376c7e7-5046-44c3-8027-97507bbac6b6"
      alt="Charlym" />
    <p>
      I've been learning to DJ for fun since January 2023, and discovered a great new passion.
    </p>

    <br />
    <p>
      My whole life I've been an obsessive collector of all kinds of music. Without knowing, that trait
      ended up being a huge advantage as a DJ!
    </p>
    <br />
    <p>
      I'm not interested in producing, but rather finding, curating and
      organizing the best house music (progressive, organic, tech, melodic, etc.) by amazing producers around the
      world! I want to be great at creating a musical journey, and having and playing the best
      possible music for each moment and for people to enjoy.
    </p>
    <br />
    <p>
      I've been lucky to already been able to play at bars and such, and I'm currently releasing (at least) one polished
      set every month. I don't have any major "career" plans other than to enjoy this creative journey, and if I get
      invited to play live even better!
    </p>

    <br />
    <p>

      <a href="https://www.mixcloud.com/elcharlym/" target="_blank">
        Mixcloud Profile and Sets
      </a>

    </p>
  </div>
</template>

<script>
export default {
  name: "DJ",
  props: ["id", "show"],
};
</script>

<style scoped>
#dj-section {
  margin-top: 10px;
  align-self: flex-start;
}
</style>
