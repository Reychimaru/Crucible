<template>
<ul class="gridWrapper">
    <li class="contentGrid" v-for="post in posts">
        <RouterLink class="routerLink" :to="`/post/${ post.postId }`">

            <div v-if="post.isSpoiler && !post.isMature" class="filteredContent">
                <img :src="post.content[0]" class="blurFilter">
                <div class="contentWarning flexcolumn">
                    <i class="bi bi-exclamation-diamond"></i>
                    <p>Contains Spoilers</p>
                </div>
            </div>

            <div v-if="!post.isSpoiler && post.isMature" class="filteredContent">
                <img :src="post.content[0]" class="blurFilter">
                <div class="contentWarning flexcolumn">
                    <i class="bi bi-eye-slash"></i>
                    <p>Mature Content</p>
                </div>
            </div>

            <img v-if="!post.isMature && !post.isSpoiler" :src="post.content[0]">
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
    justify-content: space-between;
    padding: 0rem 0.5rem;
    margin-bottom: 0.75rem;
}

.contentGrid {
    width: 33.3333%;
    border: 3px solid black;
    overflow: hidden;
    border-radius: 0.25rem;
}

.contentGrid img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
    width: 100%;
    border-radius: 0.25rem;
    display: block;
}

.blurFilter {
    filter: blur(25px);
    border-radius: 0.25rem;
}

.filteredContent {
    position: relative;
}

.contentWarning {
    background-color: rgba(0, 0, 0, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
}

.contentWarning>i {
    font-size: 2rem;
}

.contentWarning>p {
    font-size: 0.7rem;
}
</style>
