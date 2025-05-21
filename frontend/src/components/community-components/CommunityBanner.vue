<template>
<RouterLink to="/community/id">
    <article class="baseContainer flexcolumn-h-start">

        <div class="flexrow-sb">
            <div class="flexrow-h-start">
                <img class="avatar" :src="community.avatar" alt="avatar" />
                <div class="flexcolumn-h-start">
                    <h2 class="communityName">{{ community.name }}</h2>
                    <h2 class="communityType" v-if="!community.private">Public Community</h2>
                    <h2 class="communityType" v-if="community.private">Private Community</h2>
                </div>
            </div>

            <button @click.prevent="leaveCommunity()" v-if="!community.isMember" class="buttonIcon flexcolumn"><i class="bi bi-person-up"></i><span>Join</span></button>
            <button @click.prevent="leaveCommunity()" v-if="community.isMember && !community.isMod && !community.isAdmin" class="buttonIcon flexcolumn"><i class="bi bi-person-check"></i><span>Joined</span></button>
            <button @click.prevent="moderateCommunity()" v-if="community.isMember && community.isMod && !community.isAdmin" class="buttonIcon flexcolumn"><i class="bi bi-shield-shaded"></i><span>Mod</span></button>
            <button @click.prevent="administrateCommunity()" v-if="community.isMember && !community.isMod && community.isAdmin" class="buttonIcon flexcolumn"><i class="bi bi-star"></i><span>Admin</span></button>

        </div>
        <div class="flexcolumn-v-start">
            <p class="description">{{ community.description }}</p>
            <p class="communityStats">{{ community.members }} Members | {{ community.posts }} Posts</p>
        </div>

    </article>
</RouterLink>
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
        community: {
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
    methods: {
        leaveCommunity() {
            console.log('ciao');
        }
    }
}
</script>

<style scoped>
.baseContainer {
    padding: 0.75rem;
}

.communityName {
    font-size: 0.8rem;
}

.communityType {
    font-size: 0.7rem;
    margin-top: 0.15rem;
    color: rgb(100, 100, 100);
}

.profileFooter {
    padding: 0 0.75rem;
}

.description {
    margin-top: 0.5rem;
}

.communityStats {
    margin-top: 0.5rem;
    color: rgb(100, 100, 100);
}
</style>
