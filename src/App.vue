<template>
  <div id="app">
  <link href="https://fonts.googleapis.com/css?family=Unica+One:100,200,300,400,500,600,700|Crimson+Text:100,200,300,400,500,600,700|Work+Sans:100,200,300,400,500,600,700" rel="stylesheet">
    <div id="hello-bar">
      <p>I'm currently 100% focused on <a target="_blank" href="https://paper.dropbox.com/doc/My-Journey-to-Coding-Mastery--BJTgryfnBiB43a_nmogdSq~UAQ-kDdrF9BRDEx3KXjH6V8tp"> My Journey to Coding Mastery</a> &#129299;</p>
    </div>
    <div id="header">
      <h1>CARLOS MICELI</h1>
      <h2>Entrepreneur &amp; Developer</h2>
    </div>
    <div id="nav">
      <ul>
        <li v-for="(item, index) in items" :key="item" @click="getIndex(index)">
          <NavItem :name="item" :show="show === index" :id="index" />
        </li>
        <Icons :show="showIcons" />
      </ul>
    </div>
    <transition name="fade">
      <div v-if="fade" id="text-section">
        <p id="closeText" @click="closeText">x</p>
        <About :show="show" :id="0" />
        <Developer :show="show" :id="1" />
        <EstoniaExperience :show="show" :id="2" />
        <SpeakingMedia :show="show" :id="3" />
        <Testimonials :show="show" :id="4" />
      </div>
    </transition>
  </div>
</template>

<script>

import NavItem from "./components/NavItem.vue"
import About from "./components/About.vue"
import Developer from "./components/Developer.vue"
import EstoniaExperience from "./components/EstoniaExperience.vue"
import SpeakingMedia from "./components/SpeakingMedia.vue"
import Testimonials from "./components/Testimonials.vue"
import Icons from "./components/Icons.vue"

export default {
  name: 'App',
  components: {
    NavItem,
    About,
    Developer,
    EstoniaExperience,
    SpeakingMedia,
    Testimonials,
    Icons
  },
  data() {
    return {
      items: ["about", "developer", "estonia experience", "speaking & media", "testimonials", "contact"],
      fade: false,
      show: -1,
      showIcons: false
    }
  },
  methods: {
    getIndex(index) {
      if (!this.fade && index !== 4) {
        this.show = index
        this.fade = true
      }
      else if (this.show !== index && index !== 4) {
        this.show = index
      }
      else {
        this.showIcons = true
        this.show = -1
        this.fade = false
      }
    },
    closeText() {
        this.fade = false
        this.show = -1
    }
  }
}
</script>

<style>

body {
  margin: 0;
  color: white;
  z-index: -1;
  background-image:
    linear-gradient(to left,#ec711e, #35A2EE);
}

body::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/carlos-miceli-s-website.appspot.com/o/IMG_1489.JPG.jpg?alt=media&token=6b0ecf27-23bd-48b2-83ed-b26080a82dc4");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 0px;
  background-position-x: -400px;
  filter: grayscale(100%) opacity(40%);
}

#app {
  font-family: 'Work Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  padding-top: 40px;
  position: relative;
  margin: 0;
}

#hello-bar {
  overflow: hidden;
  padding: 5px 0;
  font-size: 12px;
  font-weight: 500;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  text-align: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.185);
}


#hello-bar p {
  margin: 0;
  text-decoration: none;
  position: relative;
  width: 75%;
  margin: auto;
}

#hello-bar a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

#header {
  -webkit-animation: fadein 1.5s;
  -moz-animation: fadein 1.5s;
  -ms-animation: fadein 1.5s;
  -o-animation: fadein 1.5s;
  animation: fadein 1.5s;
}

h1 {
  text-align: center;
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 0;
  font-family: 'Unica One';
  text-shadow: 1px 1px #ec711e
}

h2 {
  text-align: center;
  margin-top: 0;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Work Sans';
  text-shadow: 1px 1px #ec711e
}

#nav {
  display: flex;
  width: 100%;
  margin: 0;
  margin-top: 50px;
  padding: 0;
  -webkit-animation: fadein 1.5s;
  -moz-animation: fadein 1.5s;
  -ms-animation: fadein 1.5s;
  -o-animation: fadein 1.5s;
  animation: fadein 1.5s;
  justify-content: center;
  text-align: center;
}

#nav ul {
  padding: 0;
  margin: 0;
}

#nav li {
  font-size: 22px;
  font-weight: 500;
  padding-bottom: 4px;
  list-style-type: none;
  text-transform: uppercase;
}

#text-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow-y: scroll;
  height: 50vh;
  padding: 15px 25px;
  text-align: left;
  color: rgb(31, 31, 31);
  background: rgba(231, 231, 231);
  border-radius: 10px;
  position: absolute;
  width: 75%;
  top: 150px;
  left:0;
  right:0;
  margin: 0 auto;
  font-size: 13px;
  line-height: 21px;
}

#text-section::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#text-section {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

#text-section img {
    max-width: 100%;
    padding-bottom: 15px;
}

#text-section p {
    margin: 0;
}

#text-section a {
    color: #35A2EE;
    font-weight: bold;
    text-decoration: none;
}

#closeText {
  align-self: flex-start;
  position: absolute;
  font-size: 20px;
  color: #793f19d2;
  top: 2px;
  right: 7px;
}

#closeText:hover {
  cursor: pointer;
}

h3 {
  font-size: 16px;
  font-weight: 400;
  margin-top: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@keyframes fadein {
    from { opacity: 0;
    transform:translateY(2em) }
    to   { opacity: 1;
    transform:translateY(0) }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0;
    transform:translateY(2em) }
    to   { opacity: 1;
    transform:translateY(0) }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0;
    transform:translateY(2em) }
    to   { opacity: 1;
    transform:translateY(0) }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0;
    transform:translateY(2em) }
    to   { opacity: 1;
    transform:translateY(0) }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0;
    transform:translateY(2em) }
    to   { opacity: 1;
    transform:translateY(0) }
}

@media only screen and (min-width: 350px) {

  body::before {
    background-position-x: -350px;
  }
}

@media only screen and (min-width: 400px) {

  body::before {
    background-position-x: -300px;
  }

  #text-section {
    height: 60vh;
  }
}

@media only screen and (min-width: 450px) {

  body::before {
    background-position-x: -250px;
  }
}

@media only screen and (min-width: 500px) {

  body::before {
    background-position-x: -200px;
  }

  #text-section {
    width: 70%;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 22px;
  }

  #nav li {
    font-size: 26px;
  }
}

@media only screen and (min-width: 600px) {

  body::before {
    background-position-x: -150px;
  }

  #hello-bar {
    font-size: 13px;
  }

  #text-section {
    width: 60%;
  }
}

@media only screen and (min-width: 700px) {

  body::before {
    background-position-x: -25px;
  }
}

@media only screen and (min-width: 750px) {

  #body::before {
    background-position-x: 0px;
  }
}

@media only screen and (min-width: 800px) {

  #text-section {
    width: 55%;
  }
}

@media only screen and (min-width: 850px) {

  body::before {
    background-position-y: 0px;
    background-position-x: 0px;
  }

  #app {
    padding-top: 55px;
    padding-left: 60px;
  }

  #hello-bar {
    font-size: 14px;
  }

  h1 {
    text-align: left;
    font-size: 32px;
  }

  h2 {
    text-align: left;
    font-size: 16px;
  }

  #nav {
    display: flex;
    text-align: left;
    width: 200px;
    margin-top: 60px;
    padding-left: 10px;
    justify-content: flex-start;
  }

  #nav li {
    font-size: 14px;
  }

  #text-section {
    background: rgba(231, 231, 231, 0.76);
    height: 85vh;
    padding: 20px 25px;
    width: 30%;
    top: 40px;
  }

  #closeText {
    top: 5px;
    right: 9px;
  }
}

@media only screen and (min-width: 950px) {
  h1 {
    font-size: 34px;
  }

  h2 {
    font-size: 18px;
  }
}

@media only screen and (min-width: 1050px) {
  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 20px;
  }

  #nav li {
    font-size: 15px;
  }
}

@media only screen and (min-width: 1150px) {
    #app {
    padding-top: 75px;
    padding-left: 100px;
  }
}

@media only screen and (min-width: 1300px) {
    #app {
    padding-top: 90px;
    padding-left: 120px;
  }

  #hello-bar {
    font-size: 15px;
  }

  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 22px;
  }

  #nav li {
    font-size: 16px;
  }

  #text-section {
    width: 35%;
    font-size: 14px;
  }
}

@media only screen and (min-width: 1500px) {
    #app {
    padding-top: 100px;
    padding-left: 140px;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 24px;
  }

  #nav li {
    font-size: 17px;
  }

  #text-section {
    width: 35%;
    font-size: 15px;
  }
}

</style>


