<template>
<nav class="baseContainer headerNavContainer flexcolumn">
    <article class="flexrow-sb">
        <section class="flexrow-sb">

            <RouterLink to="/user/id" v-if="onHome">
                <button @click="playAudio" class="buttonIcon"><i class="bi bi-person-circle"></i></button>
            </RouterLink>

            <button class="buttonIcon" v-if="!onHome" @click="goBack"><i class="bi bi-chevron-left"></i></button>

        </section>
        <h1 v-if="onMessages">Messages</h1>
        <h1 v-if="onSettings">Settings</h1>
        <h1 v-if="onPosting">Posting</h1>
        <h1 v-if="onPost">Post</h1>
        <h1 v-if="onExplore">Explore</h1>
        <h1 v-if="onCommunity">Community Name</h1>
        <h1 v-if="onProfile">reychimaru</h1>
        <h1 v-if="onPersonalize">Personalize</h1>
        <h1 v-if="onNotifications">Notifications</h1>
        <h1 v-if="onCommunities">Communities</h1>
        <h1 v-if="onMembers">Community Name</h1>
        <h1 v-if="onInterests">Interests</h1>
        <h1 v-if="onHome">Crucible</h1>

        <section class="flexrow-sb">

            <RouterLink to="/posting" v-if="onHome">
                <button @click="playAudioClick" class="buttonIcon">
                    <i class="bi bi-plus-circle"></i>
                </button>
            </RouterLink>

            <button class="buttonIcon" v-if="onPost || onMembers || onInterests" @click="scrollToTop"><i class="bi bi-chevron-up"></i></button>
            <button class="buttonIcon" v-if="onMessages"><i class="bi bi-people"></i></button>
            <button class="buttonIcon" v-if="onMessages"><i class="bi bi-envelope-exclamation"></i></button>

            <button class="buttonIcon" v-if="onPosting"><i class="bi bi-info-circle"></i></button>

            <RouterLink to="/interests" v-if="onExplore"><button class="buttonIcon"><i class="bi bi-compass"></i></button></RouterLink>

            <RouterLink to="/communities/create" v-if="onCommunities"><button class="buttonIcon"><i class="bi bi-plus-circle"></i></button></RouterLink>

            <RouterLink to="/community/:id/posting" v-if="onCommunity"><button class="buttonIcon"><i class="bi bi-plus-circle"></i></button></RouterLink>

            <RouterLink to="/settings" v-if="onProfile">
                <button @click="playAudioClick" class="buttonIcon">
                    <i class="bi bi-gear"></i>
                </button>
            </RouterLink>
        </section>
    </article>
</nav>
<div class="headerSpacer"></div>
</template>

<script>
export default {
    data() {
        return {
            onHome: true,
            onProfile: true,
            onSettings: true,
            onExplore: true,
            onPersonalize: true,
            onPost: true,
            onNotifications: true,
            onMessages: true,
            onChat: true,
            onCommunity: true,
            onCommunities: true,
            onMembers: true,
            onPosting: true,
            onInterests: true,
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
            this.playAudioClick()
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            this.playAudioClick();
        },
        playAudioClick() {
            const audio = new Audio('/asset/audio/click.mp3');
            audio.play();
        },
    },
    computed: {
        route() {
            return this.$route.path;
        }
    },
    watch: {
        route(newPath) {
            this.onHome = ['/'].includes(newPath);
            this.onExplore = ['/explore'].includes(newPath);
            this.onProfile = ['/user/id'].includes(newPath);
            this.onNotifications = ['/notifications'].includes(newPath);
            this.onMessages = ['/messages'].includes(newPath);
            this.onPosting = ['/posting'].includes(newPath);
            this.onSettings = ['/settings'].includes(newPath);
            this.onPersonalize = ['/personalize'].includes(newPath);
            this.onPost = ['/post/id'].includes(newPath);
            this.onCommunities = ['/communities'].includes(newPath);
            this.onCommunity = ['/community/id'].includes(newPath);
            this.onMembers = ['/community/id/members'].includes(newPath);
            this.onInterests = ['/interests'].includes(newPath);
        }
    },
    created() {
        this.onHome = ['/'].includes(this.$route.path);
        this.onSettings = ['/settings'].includes(this.$route.path);
        this.onPosting = ['/posting'].includes(this.$route.path);
        this.onPost = ['/post/id'].includes(this.$route.path);
        this.onExplore = ['/explore'].includes(this.$route.path);
        this.onProfile = ['/user/id'].includes(this.$route.path);
        this.onPersonalize = ['/presonalize'].includes(this.$route.path);
        this.onNotifications = ['/notifications'].includes(this.$route.path);
        this.onMessages = ['/messages'].includes(this.$route.path);
        this.onCommunities = ['/communities'].includes(this.$route.path);
        this.onCommunity = ['/community/id'].includes(this.$route.path);
        this.onMembers = ['/community/id/members'].includes(this.$route.path);
        this.onInterests = ['/interests'].includes(this.$route.path);
    },
}
</script>

<style scoped>
.headerNavContainer {
    z-index: 100;
    position: fixed;
    top: 0;
    width: 100vw;
    max-width: 566px;
    padding: 0.75rem;
    margin-bottom: 0;
}

article {
    width: 100%;
}

h1 {
    color: white;
    font-weight: 600;
    font-size: 1rem;
}

.noButton {
    border: none;
    background-color: transparent;
    height: 2.75rem;
    width: 2.75rem;
}

.headerSpacer {
    margin-bottom: 4.5rem;
}
</style>
