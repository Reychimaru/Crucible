<template>
<article class="baseContainer flexcolumn">
    <section class="postHeader">
        <div v-if="isRepost" class="flexrow-h-start repostInfo">
            <p><i class="bi bi-repeat"></i> Reposted by </p>
            <RouterLink :to="`/user/${ post.author.username }`">
                <p class="username">@{{ post.author.username }}</p>
            </RouterLink>
        </div>
        <div class="flexrow-sb">
            <div class="flexrow">
                <div class="flexrow">
                    <RouterLink :to="`/user/${ post.author.username }`">
                        <img class="avatar" :src="post.author.avatar" alt="user avatar">
                    </RouterLink>
                </div>
                <div class="flexcolumn-start">
                    <div class="flexrow-start">
                        <RouterLink :to="`/user/${ post.author.username }`">
                            <p class="nickname">{{ post.author.nickname }}</p>
                        </RouterLink>
                    </div>
                    <RouterLink :to="`/user/${ post.author.username }`">
                        <p class="username">@{{ post.author.username }}</p>
                    </RouterLink>
                </div>
            </div>
            <div class="flexrow">
                <button @click="postOptions = true" class="buttonIcon"><i class="bi bi-three-dots-vertical"></i></button>
            </div>
        </div>
        <div v-if="!isOpen">
            <RouterLink :to="`/post/${ post.postId }`">
                <h2 class="postTitle">{{ post.title }}</h2>
            </RouterLink>
        </div>

        <div v-if="isOpen">
            <h2 class="postTitle">{{ post.title }}</h2>
        </div>
    </section>

    <section class="postMain flexcolumn">
        <Carousel :content="post.content" :isOpen="isOpen" :isMatureContent="post.isMature" :isSpoilerContent="post.isSpoiler" />

        <div class="postButtons flexrow-sb">
            <div class="flexrow">
                <div class="flexrow">
                    <button class="buttonIcon">
                        <i class="bi bi-heart"></i>
                    </button>
                    <span>{{ post.likes.length }}</span>
                </div>

                <div class="flexrow" v-if="!isOpen">
                    <RouterLink :to="`/post/${ post.postId }`">
                        <button class="buttonIcon flexcolumn">
                            <i class="bi bi-chat-square-text"></i>
                        </button>
                    </RouterLink>
                    <span>{{ post.comments.length }}</span>
                </div>

                <div class="flexrow" v-if="isOpen">
                    <button class="buttonIcon" @click="scrollToCommentCreator">
                        <i class="bi bi-chat-square-text"></i>
                    </button>
                    <span>{{ post.comments.length }}</span>
                </div>

                <div class="flexrow">
                    <button class="buttonIcon">
                        <i class="bi bi-repeat"></i>
                    </button>
                    <span>{{ post.likes.length }}</span>
                </div>

            </div>

            <div>
                <button class="buttonIcon">
                    <i class="bi bi-send"></i>
                </button>

                <button class="buttonIcon">
                    <i class="bi bi-bookmark"></i>
                </button>
            </div>
        </div>
    </section>

    <section class="postFooter">

        <div v-if="!isOpen && !post.isSpoiler && !post.isMature" class="postDescription flexcolumn-start">
            <RouterLink :to="`/post/${ post.postId }`">
                <p><span class="description">{{ post.description }}</span> <span class="more">show more</span></p>
            </RouterLink>
            <p class="postedAt">{{ post.postedAt }}</p>
        </div>

        <div v-if="!isOpen && post.isSpoiler" class="postDescription flexcolumn-start">
            <RouterLink :to="`/post/${ post.postId }`">
                <p><span class="spoilerDescription">{{ post.description }}</span> <span class="more">show more</span></p>
            </RouterLink>
            <p class="postedAt">{{ post.postedAt }}</p>
        </div>

        <div v-if="!isOpen && post.isMature" class="postDescription flexcolumn-start">
            <RouterLink :to="`/post/${ post.postId }`">
                <p><span class="description">{{ post.description }}</span> <span class="more">show more</span></p>
            </RouterLink>
            <p class="postedAt">{{ post.postedAt }}</p>
        </div>

        <div v-if="isOpen" class="postDescription flexcolumn-start">
            <p>{{ post.description }}</p>
            <ul class="tags">
                <li v-for="tag in post.tags">
                    <p>#{{ tag.name }}</p>
                </li>
            </ul>
            <p class="postedAt" ref="commentCreator">{{ post.postedAt }}</p>
        </div>

    </section>

    <section v-if="isCommentCreatorVisibile" class="commentCreator">
        <form class="flexcolumn-h-end">
            <label for="comment" class="flexrow-sb"><span class="greyText">Comment</span><span class="greyText"></span>250 max characters</label>
            <textarea name="comment" placeholder="Write a comment"></textarea>
            <div class="commentingButtons flexrow-h-start">
                <div class="flexrow-h-start">
                    <button class="buttonIcon" type="submit"><i class="bi bi-images"></i></button>
                </div>
                <div class="flexrow-h-start">
                    <button @click="isCommentCreatorVisibile = false" type="button" class="cancelButton buttonText">Cancel</button>
                    <button class="commentButton buttonText" type="submit">Send</button>
                </div>
            </div>
        </form>
    </section>

    <section v-if="isOpen">
        <div class="flexrow-sb commentCounter">
            <h3>{{ post.comments.length }} Comments</h3>
            <button class="buttonText">Order by: likes</button>
        </div>
        <ul v-if="post.comments.length >= 1">
            <li v-for="comments in post.comments">
                <Comment :comment="comments" />
            </li>
        </ul>
    </section>

    <article v-if="postOptions" class="postOptions baseContainer flexcolumn-h-start">
        <div class="panelName flexrow-sb">
            <h3>Post options</h3>
            <button @click="postOptions = false" class="buttonIcon closeButton"><i class="bi bi-x-circle"></i></button>
        </div>
        <button v-if="isAuthor" class="buttonText">Edit post</button>
        <button v-if="isAuthor" class="buttonText">Delete post</button>
        <button v-if="isAuthor" class="buttonText">Add to highlights</button>
        <button v-if="isAuthor" class="buttonText">Remove to highlights</button>
        <button v-if="!isAuthor" class="buttonText">Follow @{{ post.author.username }}</button>
        <button v-if="!isAuthor" class="buttonText">Report post</button>
        <button class="buttonText">Copy URL</button>
    </article>
    <div v-if="postOptions" class="overlay" @click="postOptions = false"></div>
</article>
</template>

<script>
import Carousel from '@/components/post-components/Carousel.vue';
import Comment from '@/components/post-components/Comment.vue';

export default {
    components: {
        Comment,
        Carousel,
    },
    props: {
        post: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            isOpen: false,
            isCommentCreatorVisibile: false,
            postOptions: false,
            isAuthor: true,
            isRepost: false,
        };
    },
    computed: {
        route() {
            return this.$route.path;
        }
    },
    watch: {
        route(newPath) {
            this.isOpen = (
                newPath.startsWith('/post/')
            );
        },

    },
    created() {
        const path = this.$route.path;
        this.isOpen = (
            path.startsWith('/post/')
        );
    },
    methods: {
        scrollToCommentCreator() {
            const commentCreator = this.$refs.commentCreator;
            this.isCommentCreatorVisibile = true
            if (commentCreator) {
                const offset = 80; // Numero di pixel di margine superiore
                const top = commentCreator.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
            }
        }

    },

};
</script>

<style scoped>
.postHeader,
.postFooter {
    width: 100%;
}

.postMain {
    width: 100%;
}

.postTitle {
    margin: 0.5rem 0rem;
}

.postButtons {
    width: 100%;
    height: 2.5rem;
}

.panelName {
    padding-bottom: 0.5rem;
}

.postButtons>div {
    gap: 0.5rem;
}

.tags {
    display: flex;
    flex-wrap: wrap;

}

.tags>li {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
    background-color: #171717;
    padding: 0.25rem 0.5rem;
    padding-left: 0.75rem;
    border-radius: 1rem 0.25rem 0.25rem 1rem;
}

.postedAt {
    color: #616161;
    font-size: 0.7rem;
    margin-top: 0.5rem;
}

.commentCreator {
    width: 100%;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid #171717;
}

.commentCreator>form>textarea {
    resize: vertical;
}

.commentCounter {
    margin: 0.75rem 0rem;
    border-bottom: 1px solid #171717;
    border-top: 1px solid #171717;
    padding: 0.5rem 0rem;
}

.commenting {
    margin: 0rem 0rem 0.75rem 0rem;
    width: 100%;
}

.commentingButtons {
    width: 100%;
}

.commentingButtons>div {
    width: 100%;
    gap: 0.75rem;
}

.cancelButton,
.commentButton {
    width: 100%;
}

.commentsSeparator {
    width: 100%;
    margin-bottom: -0.75rem;
}

.showMoreCommentsSeparator {
    margin-bottom: 0.75rem;
    font-weight: 600;
}

.description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.spoilerDescription {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    background-color: #171717;
    color: #171717;
}

.more {
    color: #616161;
    font-weight: 600;
}

.postOptions {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16rem;
    z-index: 10;
    border-radius: 0.5rem;
}

.postOptions>div {
    width: 100%;
}

.postOptions>button {
    width: 100%;
    margin-top: 0.75rem;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 9;
    pointer-events: auto;
}

.repostInfo {
    width: 100%;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #171717;
}

.repostInfo>p {
    margin-right: 0.25rem;
}
</style>
