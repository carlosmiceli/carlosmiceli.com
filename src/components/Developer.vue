<template>
    <div class="textItem" id="developer-section" v-show="show === id" :class="{fadeIn: show === id}">
        <h3>TECH STACK</h3>
        <div id="dev-logos">
            <img src="../../public/dev-logos/javascript.png" alt="javascript">
            <img src="../../public/dev-logos/html.png" alt="html">
            <img src="../../public/dev-logos/css3.png" alt="css3">
            <img src="../../public/dev-logos/node.png" alt="node">
            <img src="../../public/dev-logos/express.png" alt="express">
            <img src="../../public/dev-logos/sql.png" alt="sql">
            <img src="../../public/dev-logos/postgresql.png" alt="postgresql">
            <img src="../../public/dev-logos/mongo.png" alt="mongo">
            <img src="../../public/dev-logos/redis.png" alt="redis">
            <img src="../../public/dev-logos/firebase.png" alt="firebase">
            <img src="../../public/dev-logos/mocha.png" alt="mocha">
            <img src="../../public/dev-logos/react.png" alt="react">
            <img src="../../public/dev-logos/redux.png" alt="redux">
            <img src="../../public/dev-logos/vue.png" alt="vue">
            <img src="../../public/dev-logos/vuex.png" alt="vuex"> 
        </div>
        <p>
            I'm currently 100% focused on <a target="_blank" href="https://paper.dropbox.com/doc/My-Journey-to-Coding-Mastery--BJTgryfnBiB43a_nmogdSq~UAQ-kDdrF9BRDEx3KXjH6V8tp">My Journey to Coding Mastery</a>, which involves, among other things:
            <ol>
                <li>Getting a new full-stack or back-end job in a small or mid size tech company with experienced tech mentors and a healthy remote culture.</li>
                <li>Daily routine of a) studying new docs and theory, b) practicing algorithms, and c) building challenging projects.</li>
                <li>Explore/consider Product Management roles because it’s a perfect match of skills/experience that can transition into a developer role, but without <span style="font-style: italic">"starting from zero."</span></li>
            </ol> 
        </p>
        <p>See my projects on my <a target="_blank" href="https://github.com/carlosmiceli">Github profile</a>.</p>
    </div>
</template>

<script>
export default {
    name: "Developer",
    props: ["id", "show"]
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