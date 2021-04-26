<template >
    <div id="estonia-section" class="textItem" v-show="show === id" :class="{fadeIn: show === id}">
        <img src="https://firebasestorage.googleapis.com/v0/b/carlos-miceli-s-website.appspot.com/o/estonia.jpeg?alt=media&token=6a1d9b5f-fc70-46cf-be42-db89433784e2" alt="estonia-experience">
        <p>I'm co-founder of <a target="_blank" href="https://estoniaexp.com/">Estonia Experience</a> since 2017. We organize customized trips for business leaders, government officials and academics
            to explore Estonia's business and tech ecosystem, so they can learn why and how it became the most digital country in the world.</p>
        <br>
        <p>Due to COVID-19, Estonia Experience was put on hold. If the global situation allows it, we'll resume operations in 2022 (trip dates are set for May of that year, and you can <a target="_blank" href="https://estoniaexp.com/">apply here</a> to join us).</p>
        <br>
        <p>We started Estonia Experience as a seasonal side-business, and plan to keep it that way.</p>
    </div>
</template>



<script>

export default {
    name: "Estonia Experience",
    props: ["id", "show"]
}
</script>

<style scoped>

#estonia-section {
    margin-top: 10px;
    align-self: flex-start;
    }

@media only screen and (min-width: 850px) {
    #estonia-section {
        margin-top: 0;
    }
}

</style>