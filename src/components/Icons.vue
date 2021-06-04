<template>
    <div class="icons" :class="{ fadeIcons: show }">
        <a target="_blank" href="https://www.linkedin.com/in/carlosmiceli/"><img src="../assets/linkedin.png" alt=""></a>
        <a target="_blank" href="https://github.com/carlosmiceli"><img src="../assets/github.png" alt=""></a>
        <a target="_blank" href="https://medium.com/@carlosmiceli"><img src="../assets/medium.png" alt=""></a>
        <a href="mailto:me@carlosmiceli.com"><img src="../assets/email.png" alt=""></a>
    </div>
</template>

<script>

export default {
    name: "Icons",
    props: ["show"]
}
</script>

<style scoped>

.icons {
    display: none;
}

.icons a {
    max-width: 40px;
}

.icons img {
    max-width: 100%;
}

.fadeIcons {
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    -webkit-animation: fadeicons 1s;
    -moz-animation: fadeicons 1s;
    -ms-animation: fadeicons 1s;
    -o-animation: fadeicons 1s;
    animation: fadeicons 1s;
}

@keyframes fadeicons {
    from { 
        opacity: 0;
    }
    to   { 
        opacity: 1;
    }
}

@-moz-keyframes fadeicons {
    from { opacity: 0;
     }
    to   { opacity: 1;
     }
}

@-webkit-keyframes fadeicons {
    from { opacity: 0;
     }
    to   { opacity: 1;
     }
}

@-ms-keyframes fadeicons {
    from { opacity: 0;
     }
    to   { opacity: 1;
     }
}

@-o-keyframes fadeicons {
    from { opacity: 0;
     }
    to   { opacity: 1;
     }
}

@media only screen and (min-width: 850px) {
    .icons a {
        max-width: 25px;
    }

    .fadeIcons {
        justify-content: space-between;
        padding-top: 5px;

    }
}

@media only screen and (min-width: 1300px) {
    .icons a {
        max-width: 35px;
    }
}

</style>
