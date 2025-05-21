<template>
<article class="basePadder">
    <section class="baseContainer">
        <input type="search" name="search" v-model="searchQuery" placeholder="Search a community you joined">
    </section>

    <ul>
        <li v-for="(community, index) in filteredCommunities" :key="index">
            <CommunityBanner :community="community" />
        </li>
    </ul>
</article>
</template>

<script>
import CommunityBanner from '@/components/community-components/CommunityBanner.vue'

export default {
    components: {
        CommunityBanner
    },
    data() {
        return {
            searchQuery: '',
            joinedCommunities: [{
                    name: "Dark Fantasy RPGs",
                    avatar: "/public/asset/CommunityPic.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do, eiusmod tempor incididunt ut, labore et dolore magna aliqua. Ut enim ad minim veniam.",
                    members: 117,
                    posts: 30,
                    private: true,
                    isMember: true,
                    isMod: false,
                    isAdmin: true
                },
                {
                    name: "Dark Souls Group",
                    avatar: "/public/asset/image1.webp",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do, eiusmod tempor incididunt ut, labore et dolore magna aliqua. Ut enim ad minim veniam.",
                    members: 743,
                    posts: 102,
                    private: false,
                    isMember: true,
                    isMod: false,
                    isAdmin: false,
                },
                {
                    name: "Retro Gaming",
                    avatar: "/public/asset/image3.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do, eiusmod tempor incididunt ut, labore et dolore magna aliqua. Ut enim ad minim veniam.",
                    members: 250,
                    posts: 60,
                    private: true,
                    isMember: true,
                    isMod: true,
                    isAdmin: false
                },
            ]
        }
    },
    computed: {
        filteredCommunities() {
            const query = this.searchQuery.trim().toLowerCase();
            return this.joinedCommunities.filter(c =>
                c.name.toLowerCase().includes(query)
            );
        }
    }
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
