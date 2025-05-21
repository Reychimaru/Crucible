<template>
<article class="commentContainer flexcolumn" ref="mainComment">
    <section class="commentHeader">
        <div class="flexrow-sb">
            <div class="flexrow">
                <div class="flexrow">
                    <img class="avatar" :src="comment.author.avatar" alt="user avatar">
                </div>
                <div class="flexcolumn-start">
                    <div class="flexrow-start">
                        <p class="nickname">{{ comment.author.nickname }}</p>
                    </div>
                    <p class="username">{{ comment.author.username }}</p>
                </div>
            </div>
            <div class="flexrow">
                <button class="buttonIcon"><i class="bi bi-three-dots-vertical"></i></button>
            </div>
        </div>
        <div class="flexrow-start commentButtons">
            <div class="flexrow">
                <button class="buttonIcon flexcolum"><i class="bi bi-heart"></i></button>
                <span>{{ comment.likes.length }}</span>
            </div>
            <div class="flexrow">
                <button @click="isReplyingVisible = true" class="buttonIcon flexcolum"><i class="bi bi-chat-square-quote"></i></button>
                <span>{{ comment.replies.length }}</span>
            </div>
        </div>
    </section>

    <section class="commentFooter flexcolumn">
        <div class="flexcolumn-h-start">
            <p class="commentText">{{comment.description}}</p>
            <p class="createdAt">{{ comment.createdAt }}</p>
        </div>
    </section>

    <section v-if="isReplyingVisible" class="replyingContainer flexrow-start">
        <form class="replyingForm flexcolumn-start">
            <textarea name="" id="" :placeholder="`Replying to ${comment.username}`"></textarea>
            <div class="replyingButtons flexrow-sb">
                <div class="flexrow">
                </div>
                <div class="flexrow">
                    <button @click="isReplyingVisible = false" class="cancelButton buttonText" type="button">Cancel</button>
                    <button class="replyButton buttonText" type="submit">Reply</button>
                </div>
            </div>
        </form>
    </section>

    <section class="commentReplies flexcolumn-h-start">
        <ul v-if="comment.replies.length >= 1">
            <li v-if="!showAllReplies">
                <Reply :reply="comment.replies[0]" :commentNickname="comment.nickname" :commentUsername="comment.username" />
            </li>
            <li v-for="reply in comment.replies" v-if="showAllReplies">
                <Reply :reply="reply" :commentNickname="comment.nickname" :commentUsername="comment.username" />
            </li>
        </ul>
        <section v-if="comment.replies.length > 1">
            <button class="showButton buttonText" v-if="!showAllReplies" @click="showAllReplies = true">
                Show Replies
            </button>
            <button class="hideButton buttonText" v-if="showAllReplies" @click="scrollToMainComment">
                Hide Replies
            </button>
        </section>
    </section>
</article>
</template>

<script>
import Reply from '@/components/post-components/Reply.vue';

export default {
    components: {
        Reply,
    },
    data() {
        return {
            showAllReplies: false,
            isReplyingVisible: false,
        }
    },
    props: {
        comment: Object,
    },
    methods: {
        scrollToMainComment() {
            const mainComment = this.$refs.mainComment;
            if (mainComment) {
                const offset = 86; // Numero di pixel di margine superiore
                const top = mainComment.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
                this.showAllReplies = false
            }
        }
    }
}
</script>

<style scoped>
.commentContainer {
    background-color: rgb(10, 10, 10);
    border-radius: 0.25rem;
}

.replyCounter {
    width: 100%;
    margin: 0.75rem 0rem;
    border-bottom: 1px solid #171717;
    border-top: 1px solid #171717;
    padding: 0.5rem 0rem;
}

.commentHeader {
    width: 100%;
}

.commentFooter,
.commentReplies {
    width: 100%;
}

.commentReplies {
    border-bottom: 1px solid #171717;
    margin-bottom: 0.75rem;
}

.createdAt {
    margin-top: 0.5rem;
    color: rgb(100, 100, 100);
    font-size: 0.7rem;
}

.commentText {
    width: 100%;
}

.commentButtons {
    height: 2.5rem;
    gap: 0.5rem;
}

select {
    background-color: transparent;
    border: none;
    color: white;
    font-weight: 600;
}

.replyingContainer {
    width: 100%;
}

.replyingForm {
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    border-bottom: 1px solid #171717;
}

.replyingButtons {
    width: 100%;
}

.cancelButton {
    margin-right: 0.75rem;
    min-width: 5rem;
}

.cancelButton:hover {
    background-color: #9d0015;
}

.replyButton {
    min-width: 5rem;
}

.replyButton:hover {
    background-color: #0084ff;
}

.showButton,
.hideButton {
    width: 100%;
}
</style>
