<template>
    <article class="baseContainer flexcolumn">
        <div class="cardHeader">
            <img class="cover" src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/8261407/Ghost_Shell_1995_Screenshot_0399.jpg" alt="">
            <div class="profileCard">
                <div class="flexrow">
                    <img class="profileAvatar" :src="avatar" alt="user avatar">
                </div>
            </div>
        </div>
        <div class="cardFooter flexcolumn">
            <p class="nickname">{{ nickname }}</p>
            <p class="username">{{ username }}</p>
            <button class="buttonIcon"><i class="bi bi-person-plus"></i></button>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            cover: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/8261407/Ghost_Shell_1995_Screenshot_0399.jpg',
            nickname: 'Digital Art Struggler',
            username: '@reychimaru',
            avatar: 'https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg',
            hasStory: true,
            postContent: 'https://gametimers.it/wp-content/uploads/2019/07/Akira.jpg',
            likes: '100k',
            comments: 99,
            profileDescription: 'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            postedAt: '25 Marzo 2025',
            comments: 12,
            following: 10,
            followers: 22
        }
    }
}
</script>

<style scoped>
.baseContainer {
    width: 10rem;
    background-color: rgb(10, 10, 10);
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    filter: none;
    border: none;
}

div {
    width: 100%;
}

.cardHeader {
    position: relative;
    aspect-ratio: 3 / 1;
    margin-bottom: 1.75rem;
}

.cover {
    position: center;
    size: cover;
    border-radius: 0.25rem 0.25rem 0rem 0rem;
    height: 100%;
    width: 100%;
}

.profileAvatar {
    display: block;
    width: 4rem;
    height: 4rem;
    border-radius: 3rem;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    outline: 3px solid rgb(7, 7, 7);
}

.profileCard {
    position: absolute;
    bottom: -2rem;
    left: 0;
    padding: 0rem 1rem 0rem 1rem;
}

.cardFooter {
    padding: 1rem 1rem 0rem 1rem;
    margin-bottom: 1rem;
    margin-top: 0.25rem;
}

.username {
    margin-top: 0.25rem;
    color: rgb(100, 100, 100);
    margin-bottom: 0.5rem;
}
</style>
