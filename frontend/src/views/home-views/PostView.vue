<template>
<div class="basePadder">
    <ul>
        <li v-for="(post, index) in posts" :key="index">
            <Post :post="post" />
        </li>
    </ul>
</div>
</template>

<script>
import Post from '@/components/post-components/Post.vue';

export default {
    components: {
        Post
    },
    data() {
        return {
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
            },]
        }
    }
}
</script>

<style scoped>
</style>
