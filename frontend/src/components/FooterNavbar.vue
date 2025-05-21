<template>
<nav class="baseContainer footerNavContainer flexcolumn">
    <article class="flexrow-sb">
        <RouterLink to="/feed" exact-active-class="active" v-if="!onFeed">
            <button @click="playAudio"  class="buttonIcon"><i class="bi bi-house-door"></i></button>
        </RouterLink>
        <button @click="scrollToTop" class="buttonIcon active" v-if="onFeed"><i class="bi bi-house-door"></i></button>
        <RouterLink to="/explore" exact-active-class="active">
            <button @click="playAudio" class="buttonIcon"><i class="bi bi-search"></i></button>
        </RouterLink>
        <RouterLink to="/communities" exact-active-class="active">
            <button @click="playAudio" class="buttonIcon"><i class="bi bi-people"></i></button>
        </RouterLink>
        <RouterLink to="/notifications" exact-active-class="active">
            <button @click="playAudio" class="buttonIcon">
                <i class="bi bi-dot notify"></i>
                <i class="bi bi-bell"></i>
            </button>
        </RouterLink>
        <RouterLink to="/messages" exact-active-class="active">
            <button @click="playAudio" class="buttonIcon">
                <i class="bi bi-dot notify"></i>
                <i class="bi bi-envelope"></i>
            </button>
        </RouterLink>
    </article>
</nav>
<div class="footerSpacer"></div>
</template>

<script>
import {
    RouterLink,
    RouterView
} from 'vue-router'
export default {
    components: {
        RouterLink,
        RouterView
    },
    data() {
        return {
            onFeed: true
        }
    },
    methods: {
        playAudio() {
            const audio = new Audio('/public/asset/audio/click.mp3');
            audio.play();
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            this.playAudio();
        },
    },
    computed: {
        route() {
            return this.$route.path;
        }
    },
    watch: {
        route(newPath) {
            this.onFeed = ['/feed'].includes(newPath);
        }
    },
    created() {
        this.onFeed = ['/feed'].includes(this.$route.path);
    },
}
</script>

<style scoped>

.footerNavContainer {
    z-index: 100;
    position: fixed;
    bottom: 0;
    width: 100vw;
    max-width: 566px;
    padding: 0.75rem;
    margin-bottom: 0;
}

article {
    width: 100%;
}

.buttonIcon {
    position: relative;
    border: 2px solid transparent;
    border-radius: 0rem;
    background-color: transparent;
    color: white;
    cursor: pointer;
    text-align: center;
    transition: ease-in-out 0.1s;
}

.notify {
    position: absolute;
    font-size: 1.35rem;
    z-index: 1;
    padding-bottom: 1rem;
    bottom: 0px;
}

.active {
    border: none;
    border-radius: 10rem;
}

.footerSpacer {
    margin-top: 3.75rem;
}
</style>
