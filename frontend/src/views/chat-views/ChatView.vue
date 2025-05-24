<template>
<div class="basePadder">
    <article class="baseContainer flexcolumn">
        <section class="chatHeader flexrow-sb">
            <div class="userChat flexrow-h-start">
                <div class="flexrow-h-start">
                    <img class="avatar" :src="avatar" />
                    <div class="flexcolumn-h-start">
                        <p class="nickname">{{ nickname }}</p>
                        <p class="username">{{ username }}</p>
                    </div>
                </div>
            </div>
            <div class="flexrow-h-end">
                <button class="buttonIcon"><i class="bi bi-images"></i></button>
            </div>
        </section>
        <div class="divider"></div>

        <ul class="chatMain">

            <li class="messageContainer flexrow-h-end">
                <div class="flexrow-v-start">
                    <div class="sentMessage">
                        <img class="chatImage" src="https://spotpet.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5ehn3s5t7ec%2Fwp-image-200040%2F6820fb09f2c20e5bf8f09443d60d0182%2FBombay_Best_Cats_for_Allergies.jpeg&w=3840&q=75" alt="">
                    </div>
                    <img class="messageAvatar" :src="avatar" />
                </div>
            </li>

            <li class="messageContainer flexrow-h-start">
                <div class="flexrow-v-start">
                    <img class="messageAvatar" :src="avatar" />
                    <div class="receivedMessage">
                        <div class="receivedReply">
                            <p>{{ receivedMessage }}</p>
                            <p class="timeStamp flexrow-h-start">data</p>
                        </div>
                        <p>{{receivedMessage}}</p>
                        <p class="timeStamp flexrow-h-start">data</p>
                    </div>
                </div>
            </li>

            <li class="messageContainer flexrow-h-end">
                <div class="flexrow-v-start">
                    <div class="sentMessage">
                        <div class="sentReply">
                            <p>{{ receivedMessage }}</p>
                            <p class="timeStamp flexrow-h-end">data</p>
                        </div>
                        <p>{{receivedMessage}}</p>
                        <p class="timeStamp flexrow-h-end">data</p>
                    </div>
                    <img class="messageAvatar" :src="avatar" />
                </div>
            </li>

            <li class="messageContainer flexrow-h-start">
                <div class="flexrow-v-start">
                    <img class="messageAvatar" :src="avatar" />
                    <div class="receivedMessage">
                        <p>{{receivedMessage}}</p>
                        <p class="timeStamp flexrow-h-start">data</p>
                    </div>
                </div>
            </li>

            <li class="messageContainer flexrow-h-end">
                <div class="flexrow-v-start">
                    <div class="sentMessage">
                        <p>{{receivedMessage}}</p>
                        <p class="timeStamp flexrow-h-end">data</p>
                    </div>
                    <img class="messageAvatar" :src="avatar" />
                </div>
            </li>

        </ul>

        <div class="divider"></div>
        <section class="chatFooter">
            <form class="flexcolumn">
                <textarea name="" id="" placeholder="Write a message..."></textarea>
                <div class="flexrow-sb">
                    <div class="buttonContainer flexrow-h-start">
                        <button class="buttonIcon"><i class="bi bi-image"></i></button>
                    </div>
                    <div class="buttonContainer flexrow">
                        <button class="cancelButton buttonText">Cancel</button>
                        <button class="applyButton buttonText">Send</button>
                    </div>
                </div>
            </form>
        </section>
    </article>
</div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            avatar: "https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg",
            nickname: "Vincenzo Rey Scognamiglio",
            username: "@reychimaru",
            sentMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            receivedMessage: 'Lorem ipsum dolor sit amet',
        };
    },
    methods: {},
}
</script>

<style scoped>
.basePadder {
    height: calc(100vh - 7.5rem)
}

.baseContainer {
    margin: 0;
}

article {
    width: 100%;
    height: 100%;
    max-width: 566px;
    font-size: 0.8rem;
}

.chatHeader,
.chatMain,
.chatFooter {
    padding: 0.75rem;
}

.divider {
    width: 100%;
    border-bottom: 1px solid #171717;
}

.chatMain {
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
}

section,
form {
    width: 100%;
}

form>div {
    width: 100%;
}

ul {
    width: 100%;
    height: 100%;
}

li {
    width: 100%;
}

.buttonContainer {
    width: 50%;
    gap: 0.75rem
}

textarea {
    height: 6rem;
}

.cancelButton,
.applyButton {
    width: 50%;
}

.messageContainer {
    margin-top: 0.75rem;
}

.goBack {
    margin-right: 0.75rem;
}

.messageAvatar {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 3rem;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    cursor: pointer;
}

.receivedMessage {
    background-color: #171717;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-left: 0.5rem;
}

.sentMessage {
    background-color: #0084ff;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-right: 0.5rem;
}

.receivedReply {
    background-color: rgba(255, 255, 255, 0.1);
    border-left: 2px solid white;
    border-radius: 0 0.25rem 0.25rem 0;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
}

.sentReply {
    background-color: rgba(255, 255, 255, 0.1);
    border-right: 2px solid white;
    border-radius: 0.25rem 0 0 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
}

.userChat {
    width: 100%;
}

.timeStamp {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.7rem;
    margin-top: 0.5rem;
}

.chatImage {
    width: 100%;
    object-fit: contain;
    border-radius: 0.25rem;
    max-height: 566px;
}
</style>
