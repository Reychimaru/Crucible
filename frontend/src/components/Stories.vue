<template>
<article>
    <ul class="flexrow-h-start">
        <li v-for="story in stories" class="flexcolumn">
            <section class="flexcolumn">
                <img :src="story.storyContent" class="storyContent">
            </section>
                        <img :src="story.avatar" class="avatar">
            <h2 class="username">{{ story.username }}</h2>
        </li>
    </ul>
</article>
</template>

<script>
export default {
    data() {
        return {
            stories: [{
                    username: "pikachu",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ii6NYGocpYbLrXa42hTMsX77x65fNSE0-A&s",
                    storyContent: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3dJhLSMxiSSiOBRP-YDLCIrMQvmJ6yRvuA&s"
                },
                {
                    username: "thedarkknight",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5JkZfmimXzrTf7it9Ewo28Dko_keFqJSdg&s"
                },
                {
                    username: "pikachu",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ii6NYGocpYbLrXa42hTMsX77x65fNSE0-A&s"
                },
                {
                    username: "pikachu",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ii6NYGocpYbLrXa42hTMsX77x65fNSE0-A&s"
                },
                {
                    username: "pikachu",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ii6NYGocpYbLrXa42hTMsX77x65fNSE0-A&s"
                },
                {
                    username: "pikachu",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ii6NYGocpYbLrXa42hTMsX77x65fNSE0-A&s"
                },
                {
                    username: "pikachu",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ii6NYGocpYbLrXa42hTMsX77x65fNSE0-A&s"
                },
                {
                    username: "pikachu",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ii6NYGocpYbLrXa42hTMsX77x65fNSE0-A&s"
                },
                                {
                    username: "pikachu",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ii6NYGocpYbLrXa42hTMsX77x65fNSE0-A&s"
                },
            ]
        }
    }
}
</script>

<style scoped>
ul {
    width: 100%;
    padding-bottom: 0.5rem;
    margin-bottom: 0.25rem;
    overflow-x: scroll;
    gap: 0.75rem;
}

section {
    min-width: 3.5rem;
    height: 6rem;
    border: 1px solid red;
    border-radius: 0.25rem;
}

.storyContent {
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.username {
    font-size: 0.6rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: white;
    text-align: center;
    font-weight: 400;
    max-width: 3.5rem;
    margin-top: 0.25rem;
}

.avatar {
    margin: 0rem;
}
</style>
