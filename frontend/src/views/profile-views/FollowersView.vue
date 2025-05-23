<template>
<article class="basePadder">
    <section class="baseContainer">
        <h3 class="panelName">{{ members.length }} Members</h3>
        <input type="search" name="search" v-model="searchQuery" placeholder="Search a member" />
    </section>

    <h3 class="panelName"><i class="bi bi-shield-shaded"></i> Moderators</h3>
    <ul>
        <li v-for="(member, index) in moderators" :key="index">
            <MemberBanner :member="member" />
        </li>
        <div class="baseContainer flexrow" v-if="moderators.length == 0">
            <p>No moderators found</p>
        </div>
    </ul>

    <h3 class="panelName"><i class="bi bi-people"></i> Members</h3>
    <ul>
        <li v-for="(member, index) in normalMembers" :key="index">
            <MemberBanner :member="member" />
        </li>
        <div class="baseContainer flexrow" v-if="normalMembers.length == 0">
            <p>No members found</p>
        </div>
    </ul>
</article>
</template>

<script>
import MemberBanner from '@/components/community-components/Member.vue';

export default {
    components: {
        MemberBanner
    },
    data() {
        return {
            searchQuery: '',
            members: [{
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
    computed: {
        filteredCommunities() {
            const query = this.searchQuery.trim().toLowerCase();

            // Se inizia con @, filtra solo per username
            if (query.startsWith('@')) {
                const usernameQuery = query.slice(1); // Rimuove la @
                return this.members.filter(member =>
                    member.username.toLowerCase().startsWith(usernameQuery)
                );
            }

            // Altrimenti filtra per nickname o username
            return this.members.filter(member =>
                member.nickname.toLowerCase().includes(query) ||
                member.username.toLowerCase().includes(query)
            );
        },
        moderators() {
            return this.filteredCommunities.filter(
                member => member.isMember && (member.isMod || member.isAdmin)
            );
        },
        normalMembers() {
            return this.filteredCommunities.filter(
                member => member.isMember && !member.isMod && !member.isAdmin
            );
        }
    }
};
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
