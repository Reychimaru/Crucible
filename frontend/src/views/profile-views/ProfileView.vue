<template>
<div class="basePadder">
    <article class="altContainer flexcolumn">
        <section class="profileHeader">
            <img class="cover" :src="cover" alt="cover image" />
            <div class="profileCard flexrow-start">
                <div class="flexcolumn">
                    <div class="profileMain flexrow-h-end">
                        <img class="profileAvatar" :src="avatar" alt="user avatar" />
                        <div class="profileButtons flexrow-h-end">
                            <button v-if="!isOwner" class="buttonText">Chat</button>
                            <button v-if="!isOwner" class="buttonText">Follow</button>
                            <RouterLink to="/personalize" v-if="isOwner" class="routerLink flexrow-h-end">
                                <button class="buttonText">Edit Profile</button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="profileFooter flexcolumn">
            <div class="flexcolumn-h-start">
                <div class="flexcolumn-h-start">
                    <h2 class="profileNickname">{{ nickname }}</h2>
                    <h3 class="username">@{{ username }}</h3>
                </div>
                <h3 class="bio">{{ bio }}</h3>
                <p class="profileWebsite"><a :href="`http://${website}`">{{ website }}</a></p>
                <p class="profileStats">
                    <RouterLink to="/community/id/members">{{ followers }} Followers</RouterLink> | {{ following }} Following
                </p>
            </div>
        </section>
        <nav class="flexcolumn">
            <input type="search" v-model="searchQuery" :placeholder="`Search posts by ${username}`">
        </nav>
    </article>

    <ul>
        <li v-for="(post, index) in searchPosts()" :key="index">
            <Post :post="post" />
        </li>
    </ul>
</div>
</template>

<script>
import Post from '@/components/post-components/Post.vue';
import Contents from '@/components/profile-components/Contents.vue';

export default {
    components: {
        Contents,
        Post
    },
    data() {
        return {
            nickname: "Imposter",
            username: "reychimaru",
            avatar: "/public/asset/images/avatar.png",
            cover: "/public/asset/images/cover.jpg",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do, eiusmod tempor incididunt ut, labore et dolore magna aliqua. Ut enim ad minim veniam.",
            website: 'reychimaru.com',
            followers: 117,
            following: 10,

            isOwner: true,

            searchQuery: '',

            posts: [{
                postId: 666,
                author: {
                    username: "reychimaru",
                    nickname: "Digital Art Struggler",
                    avatar: 'https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg',
                },
                community: {
                    name: "Dark Fantasy RPGs",
                    avatar: "/asset/CommunityPic.jpg",
                    communityId: 666,
                },
                title: 'Lorem ipsum dolor sit amet',
                content: [
                    '/asset/image1.webp',
                    '/asset/image2.jpg',
                    '/asset/image3.jpg',
                ],
                description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                postedAt: '25 Marzo 2025 - 12:35',
                isMature: false,
                isSpoiler: true,
                isBookmarked: false,
                tags: [{
                    name: 'tag1'
                }, {
                    name: 'tag2'
                }, {
                    name: 'tag3'
                }],
                likes: [{
                    username: '',
                    nickname: '',
                    avatar: '',
                }, ],
                comments: [{
                        author: {
                            username: '@johnberserk',
                            nickname: 'The Black Swordsman',
                            avatar: 'https://hachikocreations.it/wp-content/uploads/2024/01/Berserk-copertina.jpg',
                        },
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        createdAt: '25 Marzo 2025 • 12:35',
                        likes: [{
                            username: '',
                            nickname: '',
                            avatar: '',
                        }, ],
                        replies: [{
                            author: {
                                username: '@janeberserk',
                                nickname: 'Commander',
                                avatar: 'https://media.tenor.com/zH0scMb5RSoAAAAe/casca-guts.png',
                            },
                            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            createdAt: '25 Marzo 2025 • 12:35',
                            likes: [{
                                username: '',
                                nickname: '',
                                avatar: '',
                            }, ],
                        }, ]
                    },
                    {
                        author: {
                            username: '@deprived',
                            nickname: 'Unclothed Enigma',
                            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfu1m8CH8CkBBIEdKMzfXsp_OtmQVJXGjCJw&s',
                        },
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        createdAt: '25 Marzo 2025 • 12:35',
                        likes: [{
                            username: '',
                            nickname: '',
                            avatar: '',
                        }, ],
                        replies: [{
                                author: {
                                    username: '@giantdad',
                                    nickname: 'Chaotic Zweihander',
                                    avatar: 'https://i.redd.it/azvb5y98of5z.jpg',
                                },
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                createdAt: '25 Marzo 2025 • 12:35',
                                likes: [{
                                    username: '',
                                    nickname: '',
                                    avatar: '',
                                }, ],
                            },
                            {
                                author: {
                                    username: '@giantdad',
                                    nickname: 'Chaotic Zweihander',
                                    avatar: 'https://i.redd.it/azvb5y98of5z.jpg',
                                },
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                createdAt: '25 Marzo 2025 • 12:35',
                                likes: [{
                                    username: '',
                                    nickname: '',
                                    avatar: '',
                                }, ],
                            },
                            {
                                author: {
                                    username: '@giantdad',
                                    nickname: 'Chaotic Zweihander',
                                    avatar: 'https://i.redd.it/azvb5y98of5z.jpg',
                                },
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                createdAt: '25 Marzo 2025 • 12:35',
                                likes: [{
                                    username: '',
                                    nickname: '',
                                    avatar: '',
                                }, ],
                            }
                        ]
                    },
                ],
            }]
        };
    },
    methods: {
        searchPosts() {
            const query = this.searchQuery.trim().toLowerCase();

            if (query.startsWith('#')) {
                const tagQuery = query.slice(1);
                return this.posts.filter(post =>
                    post.tags.some(tag => tag.name.toLowerCase().includes(tagQuery))
                );
            }

            if (query.startsWith('@')) {
                const usernameQuery = query.slice(1);
                return this.posts.filter(post =>
                    post.author.username.toLowerCase().includes(usernameQuery)
                );
            }

            return this.posts.filter(post =>
                post.title.toLowerCase().includes(query)
            );
        },
    }
}
</script>

<style scoped>
.profileHeader,
.profileCard,
.profileMain,
.profileFooter {
    width: 100%;
}

.profileHeader {
    width: 100%;
    aspect-ratio: 3 / 1;
    margin-bottom: 3.25rem;
    position: relative;
}

.cover {
    border-radius: 0.25rem 0.25rem 0rem 0rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-height: 12rem;
}

.profileMain {
    position: relative;
}

.profileAvatar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 5.5rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    outline: 2px solid rgb(7, 7, 7);
    cursor: auto;
}

.profileCard {
    position: absolute;
    bottom: -2.75rem;
    left: 0;
    padding: 0 0.75rem;
}

.followMessage {
    padding-bottom: 0.25rem;
}

.profileCard>div {
    width: 100%;
}

.profileCard>div>div {
    width: 100%;
}

.nicknameVerified {
    width: 100%;
    margin-left: 0.25rem;
    cursor: auto;
}

.verifiedIcon {
    margin: 0rem 0.25rem 0rem 0rem;
}

.profileNickname {
    cursor: auto;
}

.username {
    cursor: auto;
    margin-bottom: 0.5rem;
}

.profileFooter {
    padding: 0 0.75rem;
}

.bio,
.profileWebsite {
    margin-bottom: 0.5rem;
}

.profileStats {
    color: rgb(100, 100, 100);
}

nav {
    width: 100%;
    padding: 0rem 0.75rem;
    padding-top: 0.75rem;
}

nav>div {
    width: 100%;
    gap: 0.75rem;
}

nav>div>button {
    width: 100%;
    margin-bottom: 0.75rem;
}

.profileButtons {
    width: 50%;
    gap: 0.75rem;
    margin-left: 0.75rem;
}

.profileButtons>button {
    width: calc(50% - 0.55rem);
}

.routerLink {
    width: 100%;
}

.profileButtons>.routerLink>button {
    width: calc(100% - 0.55rem);
}
</style>
