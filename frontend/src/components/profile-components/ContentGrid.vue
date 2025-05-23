<template>

<ul class="gridWrapper">
    <li class="contentGrid" v-for="posts in posts">
        <RouterLink class="routerLink" :to="`/post/${ posts.postId }`">
        <img :src="posts.content[0]" alt="">
        </RouterLink>
    </li>
</ul>

</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {

        }
    },
}
</script>

<style scoped>
.gridWrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 0rem 0.5rem;
    margin-bottom: 0.75rem;
}

.contentGrid {
    width: 33.3333%;
    border: 2px solid black;
}

.contentGrid>.routerLink>img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
    width: 100%;
    border-radius: 0.25rem;
    display: block;
}
</style>
