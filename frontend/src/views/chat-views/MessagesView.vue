<template>
<div class="basePadder">
    <article class="baseContainer">
        <form action="" @submit.prevent class="flexrow">
            <input type="search" name="search" placeholder="Search user to chat with">
            <i class="searchIcon bi bi-search"></i>
        </form>
    </article>

    <article class="baseContainer">
        <h2>Chats</h2>
        <ul>
            <li v-for="chat in chats">
                <RouterLink to="/chat/id" class="flexrow-start routerLink">
                    <img class="avatar" :src="chat.avatar" alt="user avatar">
                    <div class="flexcolumn-start">
                        <p class="nickname">{{ chat.nickname }}</p>
                        <p class="username">{{ chat.username }}</p>
                    </div>
                </RouterLink>
                <div class="divider"></div>
            </li>
        </ul>
    </article>
</div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: {},
    data() {
        return {
            chats: [{
                    avatar: "https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg",
                    nickname: "Digital Art Struggler",
                    username: "@reychimaru",
                },
                {
                    avatar: "https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg",
                    nickname: "Digital Art Struggler",
                    username: "@reychimaru",
                },
                {
                    avatar: "https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg",
                    nickname: "Digital Art Struggler",
                    username: "@reychimaru",
                },
            ]

        };
    }
}
</script>

<style scoped>
.baseContainer {
    padding: 0.75rem;

}

section {
    margin-bottom: 0.75rem;
}

nav {
    width: 100%;
}

nav>button {
    width: 100%;
    min-width: 4.5rem;
    background-color: #070707;
}

nav>button:hover {
    background-color: rgb(15, 15, 15);
}

.roundLeft {
    border-radius: 0rem 0rem 0rem 0.25rem;
}

.roundRight {
    border-radius: 0rem 0rem 0.25rem 0rem;
}

input {
    padding-left: 2.25rem;
    border-radius: 0.25rem;
}

form>button {
    border-radius: 0rem 0.25rem 0.25rem 0rem;
    border-left: 2px solid black;
}

.routerLink {
    margin-top: 0.75rem;
}

.divider {
    margin-top: 0.75rem;
}

.searchIcon {
    position: absolute;
    color: rgb(150, 150, 150);
    top: 0.65rem;
    left: 0.65rem;
    font-size: 1rem;
}

form {
    position: relative;
}

form>input {
    margin-bottom: 0;
}

.messagesButtons {
    width: 100%;
    gap: 0.75rem;
}

.messagesButtons>button {
    width: 100%;
}

h2 {
    height: 1.75rem;
    border-bottom: 2px solid #171717;
}
</style>
