<template>
    <div class="navItem" :class="{ clicked: show }">
        {{name}}
    </div>
</template>

<script>
export default {
    name: "navItem",
    props: ["id", "name", "show"],

}
</script>

<style scoped>

.navItem {
    display: inline-block;
    overflow: hidden;
    background: linear-gradient(to right, #ffb17c, #ffb17c 50%, white 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
}

.navItem:hover {
    cursor: pointer;
    background-position: 0 100%;
}

.clicked {
    background: white;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
}

@media only screen and (min-width: 850px) {

    .navItem {
        background: linear-gradient(to right, #ffb17c, #ffb17c 50%, white 50%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;
        transition: background-position 275ms ease;
    }
}

</style>