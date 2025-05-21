<template>
<article class="replyContainer flexcolumn">
    <section class="replyHeader">
        <div class="flexrow-sb">
            <div class="flexrow">
                <div class="flexrow">
                    <img class="avatar" :src="reply.author.avatar" alt="user avatar">
                </div>
                <div class="flexcolumn-start">
                    <div class="flexrow-start">
                        <p class="nickname">{{ reply.author.nickname }}</p>
                    </div>
                    <p class="username">{{ reply.author.username }}</p>
                </div>
            </div>
            <div class="flexrow">
                <button class="buttonIcon"><i class="bi bi-three-dots-vertical"></i></button>
            </div>
        </div>
        <div class="replyButtons flexrow-h-start">
            <div class="flexrow">
                <button class="buttonIcon flexrow"><i class="bi bi-heart"></i></button>
                <span>{{ reply.likes.length }}</span>
            </div>
            <button @click="isReplyingVisible = true" class="buttonIcon flexrow"><i class="bi bi-chat-square-quote"></i></button>
        </div>
    </section>

    <section class="replyFooter flexcolumn-h-start">
        <p class="replyingTo">Replied to AUTORE</p>
        <p>{{ reply.description }}</p>
        <p class="createdAt">{{ reply.createdAt }}</p>
    </section>

    <section v-if="isReplyingVisible" class="replyingContainer flexrow-start">
        <form class="replyingForm flexcolumn-start">
            <label for="reply">Reply</label>
            <textarea name="reply" id="" :placeholder="`Replying to ${reply.username}`"></textarea>
            <div class="replyingButtons flexrow-h-end">
                    <button @click="isReplyingVisible = false" class="cancelButton buttonText" type="button">Cancel</button>
                    <button class="replyButton buttonText" type="submit">Reply</button>
            </div>
        </form>
    </section>
</article>
</template>

<script>
export default {
    data() {
        return {
            isReplyingVisible: false,
        }
    },
    props: {
        reply: {
            type: Object,
            required: true
        },
    }
}
</script>

<style scoped>
.replyContainer,
.replyHeader,
.replyFooter {
        width: 100%;
}

.replyContainer {
    margin-bottom: 0.75rem;
    margin-top: 0.5rem;
    padding: 0.75rem 0rem;
    padding-left: 0.75rem;
    border-left: 0.5rem solid #171717;
    border-radius: 0.25rem;
}

.replyingTo {
    color: rgb(100, 100, 100);
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
}

.createdAt {
    color: rgb(100, 100, 100);
    font-size: 0.7rem;
    margin-top: 0.5rem;
}

.showMoreRepliesSeparator {
    margin-top: 0.75rem;
    font-weight: 600;
}

.replyingContainer {
    width: 100%;
}

.replyingForm {
    margin-top: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.75rem;
    width: 100%;
    border-bottom: 1px solid #171717;
    border-top: 1px solid #171717;
}

.replyingButtons {
    width: 100%;
    gap: 0.75rem;
}

.replyingButtons>button {
    width: 100%;
}

.replyButtons {   
    width: 100%;
    height: 2.5rem;
    gap: 0.5rem;
}

</style>
