<template>
<ul class="baseContainer flexcolumn-start">
    <li v-for="user in usersFound" class="flexcolumn-h-start">
        <article class="flexrow-start">
            <img class="avatar" :src="user.avatar" alt="user avatar">
            <div class="flexcolumn-start">
                <p class="nickname">{{ user.nickname }}</p>
                <p class="username">{{ user.username }}</p>
            </div>
        </article>
        <div class="divider"></div>
    </li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            usersFound: [{
                    nickname: 'Digital Art Struggler',
                    username: '@reychimaru',
                    avatar: 'https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg',
                },
                {
                    nickname: 'aaaaaa',
                    username: '@aaaaaa',
                    avatar: 'https://insightsscroll.com/.it/public/uploads/1723739024DESFW%C4%B0.webp',
                },
                {
                    nickname: 'bbbbbb',
                    username: '@bbbbbb',
                    avatar: 'https://www.staynerd.com/wp-content/uploads/Viggo-Mortensen-critiche-peter-Jackson-il-signore-degli-anelli-lo-hobbit.jpg',
                }
            ],
        }
    }
}
</script>

<style scoped>
.baseContainer {
    padding: 0rem 0.75rem 0.75rem 0.75rem;
}

li {
    width: 100%;
    padding: 0rem 0.75rem 0.75rem 0.75rem;
}

article {
    width: 100%;
    cursor: pointer;
}

.divider {
    margin-top: 0.75rem;
    border-bottom: 2px solid #171717;
    width: 100%;
}
</style>
