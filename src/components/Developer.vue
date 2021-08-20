<template>
    <div id="developer-section" v-show="show === id" :class="{fadeIn: show === id}">
      <div>
        <h3>TECH STACK</h3>
        <div @click="portfolioClick" id="dev-logos">
            <img src="../../public/dev-logos/javascript.png" alt="javascript">
            <img src="../../public/dev-logos/node.png" alt="node">
            <img src="../../public/dev-logos/react.png" alt="react">
            <img src="../../public/dev-logos/vue.png" alt="vue">
            <img src="../../public/dev-logos/python.png" alt="python">
            <img src="../../public/dev-logos/typescript.png" alt="typescript">
            <img src="../../public/dev-logos/express.png" alt="express">
            <img src="../../public/dev-logos/postgresql.png" alt="postgresql">
            <img src="../../public/dev-logos/mongo.png" alt="mongo">
            <img src="../../public/dev-logos/redis.png" alt="redis">
            <div></div>
            <img src="../../public/dev-logos/firebase.png" alt="firebase">
            <img src="../../public/dev-logos/redux.png" alt="redux">
            <img src="../../public/dev-logos/nest.png" alt="nest">
        </div>
        <p>
            I'm currently 100% focused on <a target="_blank" href="https://paper.dropbox.com/doc/My-Journey-to-Coding-Mastery--BJTgryfnBiB43a_nmogdSq~UAQ-kDdrF9BRDEx3KXjH6V8tp">My Journey to Coding Mastery</a> which, among other things, involves:
            <ul>
                <li>Working for a small or mid size tech company with experienced tech mentors, great colleagues, and a healthy remote culture as a full-stack developer.</li>
                <li>Detailing my vision, goals, and routines/systems to improve daily my skills in software engineering.</li>
            </ul> 
        </p>
        <p>See my projects on <a target="_blank" href="https://github.com/carlosmiceli">Github</a> or my <span style="color: #35a2ee" @click="portfolioClick"><strong>Portfolio</strong></span>.</p>
              <br/>
              <Portfolio v-if="switchToPortfolio" />
    </div>
      </div>  
</template>

<script>
import Portfolio from "./Portfolio.vue";

export default {
    name: "Developer",
    components: {Portfolio},
    props: ["id", "show"],
    data() {
      return {
        switchToPortfolio: false
      }
    },
    methods: {
      portfolioClick() {
        this.switchToPortfolio = !this.switchToPortfolio
      }
    }
}
</script>

<style>
#developer-section {
    margin-top: 10px;
    align-self: flex-start;
}

#developer-section h3 {
    font-weight: 500;
}

#dev-logos {
    margin: auto;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px 20px;
    justify-items: center;
    align-items: center;
    margin-bottom: 10px;
}

#dev-logos img {
    max-height: 8vh;
}
</style>