<template>
<article class="basePadder">
    <section class="baseContainer">
        <h3 class="panelName">{{ followers.length }} Followers</h3>
        <input type="search" name="search" v-model="searchQuery" placeholder="Search a member" />
    </section>

    <h3 class="panelName"><i class="bi bi-people"></i> Followers</h3>
    <ul>
        <li v-for="follower in followers">
            <Follower :follower="follower" />
        </li>
    </ul>
</article>
</template>

<script>
import Follower from '@/components/profile-components/Follower.vue';

export default {
    components: {
        Follower
    },
    data() {
        return {
            searchQuery: '',
            followers: [{
                    nickname: "Digital Art Struggler",
                    username: "reychimaru",
                    avatar: "/public/asset/CommunityPic.jpg",
                    posts: 30,
                    isMember: true,
                    isMod: false,
                    isAdmin: true,
                },
                {
                    nickname: "Baldwin",
                    username: "pelato",
                    avatar: "/public/asset/image1.webp",
                    posts: 102,
                    isMember: true,
                    isMod: false,
                    isAdmin: false,
                },
                {
                    nickname: "Assertive Donkey",
                    username: "culone",
                    avatar: "/public/asset/image3.jpg",
                    posts: 60,
                    isMember: true,
                    isMod: true,
                    isAdmin: false,
                },
                {
                    nickname: "Slanglang",
                    username: "salamaleikum",
                    avatar: "/public/asset/image2.jpg",
                    posts: 10,
                    isMember: true,
                    isMod: false,
                    isAdmin: false,
                },
            ]
        };
    },
}
</script>

<style scoped>
.baseContainer {
    padding: 0.75rem;
}

input {
    position: relative;
    margin: 0rem;
}
</style>
