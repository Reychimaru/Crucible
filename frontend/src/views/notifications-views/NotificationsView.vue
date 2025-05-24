<template>
    <div class="basePadder">
    <ul class="baseContainer">
        <li class="notificationContainer" v-for="notification in notifications">
            <div class="flexrow-start">
                <img class="avatar" :src="notification.avatar" alt="user avatar">
                <div class="flexcolumn-start">
                    <p class="nickname">{{ notification.nickname }}</p>
                    <p class="username">{{ notification.username }}</p>
                </div>
            </div>
            <p>{{ notification.message }}</p>
            <p>{{ notification.date }}</p>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            notifications: [
                {
                avatar: "https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg",
                nickname: "Digital Art Struggler",
                username: "@reychimaru",
                message: "Commented your post.",
                date: "22 Marzo 2025"
            }, 
            {
                avatar: "https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg",
                nickname: "Digital Art Struggler",
                username: "@reychimaru",
                message: "Liked your post.",
                date: "22 Marzo 2025"
            },
            {
                avatar: "https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg",
                nickname: "Digital Art Struggler",
                username: "@reychimaru",
                message: "Liked your post.",
                date: "22 Marzo 2025"
            }, 
        ]

        };
    }
}
</script>

<style scoped>
.notificationContainer {
    background-color: rgb(10, 10, 10);
    border-radius: 0.25rem;
    padding: 0.75rem;
    margin: 0.75rem;
}
</style>
