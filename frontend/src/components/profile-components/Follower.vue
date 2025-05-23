<template>
<div>
    <RouterLink to="/user/:id">
        <article class="baseContainer flexcolumn-h-start">

            <div class="flexrow-sb">
                <div class="flexrow-h-start">
                    <img class="avatar" :src="follower.avatar" alt="avatar" />
                    <div class="flexcolumn-h-start">
                        <h2 class="communityName"><i v-if="follower.isMod || follower.isAdmin" class="bi bi-shield-shaded modBadge"></i> {{ follower.nickname }}</h2>
                        <h2 class="communityHandle">@{{ follower.username }}</h2>
                    </div>
                </div>

                <button @click.prevent="memberMenu = true" v-if="follower.isMember" class="buttonIcon flexcolumn"><i class="bi bi-three-dots-vertical"></i></button>

            </div>
            <div class="flexcolumn-v-start">
                <p class="memberStats">30 Posts | Joined 30/10/2025</p>
            </div>
        </article>
    </RouterLink>

    <article v-if="memberMenu" class="memberMenu baseContainer flexcolumn-h-start">
        <h3 class="panelName">Member menu</h3>
        <div class="flexrow-h-start">
            <img class="avatar" :src="follower.avatar" alt="avatar" />
            <div class="flexcolumn-h-start">
                <h2 class="communityName"><i v-if="follower.isMod || follower.isAdmin" class="bi bi-shield-shaded modBadge"></i> {{ follower.nickname }}</h2>
                <h2 class="communityHandle">@{{ follower.username }}</h2>
            </div>
        </div>
        <div class="divider"></div>
        <button class="buttonText" v-if="follower.isMember && follower.isMod && !follower.isAdmin">Demote as Member</button>
        <button class="buttonText" v-if="follower.isMember && !follower.isMod && !follower.isAdmin">Promote as Mod</button>
        <button class="buttonText" v-if="!follower.isAdmin">Ban member</button>
        <button class="buttonText">Report member</button>
        <button class="buttonText">Message member</button>
        <button @click="memberMenu = false" class="buttonText closeButton">Close</button>

    </article>
    <div v-if="memberMenu" class="overlay" @click="memberMenu = false"></div>
</div>
</template>

<script>
import {
    RouterLink
} from 'vue-router';

export default {
    components: {
        RouterLink,
    },
    props: {
        follower: {
            type: Object,
            required: true
        },
        private: {
            type: Boolean
        },
        isMember: {
            type: Boolean
        },
        isAdmin: {
            type: Boolean
        },
        isMod: {
            type: Boolean
        }

    },
    data() {
        return {
            memberMenu: false
        }
    }
}
</script>

<style scoped>
.baseContainer {
    padding: 0.75rem;
}

.memberMenu {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    z-index: 10;
    padding: 1rem;
    border-radius: 0.5rem;
}

.memberMenu>div {
    width: 100%;
    margin-bottom: 0.75rem;
}

.memberMenu>button {
    width: 100%;
    margin-bottom: 0.75rem;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 9;
    pointer-events: auto;
}

.communityName {
    font-size: 0.8rem;
}

.communityHandle {
    font-size: 0.7rem;
    margin-top: 0.15rem;
    color: rgb(100, 100, 100);
}

.profileFooter {
    padding: 0 0.75rem;
}

.memberStats {
    margin-top: 0.5rem;
    color: rgb(100, 100, 100);
}

.modBadge {
    color: rgb(0, 119, 255);
}
</style>
