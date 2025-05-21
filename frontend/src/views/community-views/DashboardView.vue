<template>
<div class="basePadder">
    <article class="altContainer flexcolumn-h-start">
        <section class="cardHeader">
            <button class="uploadCoverButton buttonText flexcolumn" v-if="coverPlaceholder == ''" @click="handleCoverInput">
                <i class="bi bi-image"></i>
                <p>Upload cover</p>
            </button>
            <img class="cover" :src="coverPlaceholder" v-if="!coverPlaceholder == ''" />
            <button class="discardCoverButton" v-if="!coverPlaceholder == ''" @click="resetCover"><i class="bi bi-trash"></i></button>
            <div class="cardMain flexrow-start">
                <div class="flexcolumn">
                    <div class="profileMain flexrow-v-end-sb">
                        <div class="flexrow-v-end">
                            <div class="avatarContainer">
                                <button class="uploadAvatarButton buttonText flexcolumn" v-if="avatarPlaceholder == ''" @click="handleAvatarInput">
                                    <i class="bi bi-image"></i>
                                    <p>Upload avatar</p>
                                </button>
                                <img class="avatar" :src="avatarPlaceholder" v-if="!avatarPlaceholder == ''" />
                                <button class="discardAvatarButton" v-if="!avatarPlaceholder == ''" @click="resetAvatar"><i class="bi bi-trash"></i></button>
                            </div>
                            <div class="flexcolumn-h-start">
                                <h2 class="communityName" v-if="namePlaceholder === ''">Community Name</h2>
                                <h2 class="communityName">{{ namePlaceholder }}</h2>
                                <h2 class="communityType">{{ type }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="cardFooter flexcolumn-h-start">
            <p class="description">{{ descriptionPlaceholder }}</p>
            <p v-if="!websitePlaceholder == '' || null ">www.{{ websitePlaceholder }}</p>
        </section>
    </article>

    <article class="altContainer">
        <form action="" @submit.prevent class="flexcolumn-h-start">
            <h3 class="panelName">Community card editor</h3>
            <label for="name" class="flexrow-sb">
                <span class="greyText">Community name</span class="greyText">
                <span class="greyText">(25 max characters)</span class="greyText">
            </label>
            <input type="text" name="name" placeholder="Enter a name for your community" v-model="namePlaceholder" maxlength="25" required>

            <label for="description" class="flexrow-sb">
                <span class="greyText">Description</span class="greyText"><span class="greyText">(150 max characters)</span class="greyText">
            </label>
            <textarea name="description" placeholder="Write a description of your community" v-model="descriptionPlaceholder" maxlength="150"></textarea>

            <label for="website" class="flexrow-sb">
                <span class="greyText">Website</span class="greyText">
                <span class="greyText">(25 max characters)</span class="greyText">
            </label>
            <input type="text" name="website" placeholder="Enter your community website (not required)" v-model="websitePlaceholder" maxlength="25">

            <input class="uploader" type="file" name="avatar" ref="avatarInput" @change="onAvatarChange" accept="image/*">
            <input class="uploader" type="file" name="cover" ref="coverInput" @change="onCoverChange" accept="image/*">

            <div class="flexrow-h-end">
                <button class="buttonText applyButton">Apply changes</button>
            </div>
        </form>
    </article>

    <article class="baseContainer">
        <form action="">
            <h3 class="panelName">Members management</h3>
            <button type="button" class="buttonText"></button>
        </form>
    </article>
</div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            cover: "",
            avatar: "",
            name: "",
            type: "Public Community",
            description: "",
            website: "",

            isPrivate: false,

            avatarPlaceholder: null,
            coverPlaceholder: null,
            namePlaceholder: null,
            descriptionPlaceholder: null,
            websitePlaceholder: null,
        };
    },
    created() {
        this.namePlaceholder = this.name
        this.descriptionPlaceholder = this.description
        this.avatarPlaceholder = this.avatar;
        this.coverPlaceholder = this.cover;
        this.websitePlaceholder = this.website;
    },
    methods: {
        onAvatarChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.avatarUrl = e.target.result;
                    this.avatarPlaceholder = this.avatarUrl
                };
                reader.readAsDataURL(file);
            }
        },
        onCoverChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.coverUrl = e.target.result;
                    this.coverPlaceholder = this.coverUrl
                };
                reader.readAsDataURL(file);
            }
        },
        resetAvatar() {
            this.$refs.avatarInput.value = "";
            this.avatarPlaceholder = this.avatar;
        },
        resetCover() {
            this.$refs.coverInput.value = "";
            this.coverPlaceholder = this.cover;
        },
        handleAvatarInput() {
            this.$refs.avatarInput.click();
        },
        handleCoverInput() {
            this.$refs.coverInput.click();
        }
    }
}
</script>

<style scoped>
section {
    width: 100%;
}

form {
    width: 100%;
    padding: 0.75rem;
}

.cardHeader {
    width: 100%;
    aspect-ratio: 3 / 1;
    margin-bottom: 3rem;
    position: relative;
}

.cardFooter {
    padding: 0rem 0.75rem 0.75rem 0.75rem;
}

.avatarContainer {
    position: relative;
}

.cover {
    border-radius: 0.25rem 0.25rem 0rem 0rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-height: 12rem;
    outline: 2px solid #0b0b0b;
}

.avatar {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    object-fit: cover;
    outline: 2px solid #0b0b0b;
}

.uploadCoverButton {
    border-radius: 0.25rem 0.25rem 0rem 0rem;
    height: 100%;
    width: 100%;
    max-height: 12rem;
    border: 2px dashed #171717;
}

.uploadCoverButton>i {
    font-size: 2rem;
}

.uploadAvatarButton>i {
    font-size: 1rem;
}

.uploadAvatarButton {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    object-fit: cover;
    outline: 2px dashed #171717;
    margin-right: 0.5rem;
}

.discardCoverButton,
.discardAvatarButton {
    font-size: 1rem;
    position: absolute;
    background-color: #0b0b0b;
    width: 2rem;
    height: 2rem;
    outline: 1px solid #171717;
    border-radius: 5rem;
    border: none;
}

.discardCoverButton:hover,
.discardAvatarButton:hover {
    background-color: #232323;
}

.discardAvatarButton {
    right: 0rem;
    top: 0rem;
}

.discardCoverButton {
    right: 0.75rem;
    top: 0.75rem;
}

.communityName {
    font-size: 0.8rem;
}

.communityType {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
    margin-top: 0.15rem;
    color: rgb(100, 100, 100);
}

.cardMain {
    position: absolute;
    bottom: -2.5rem;
    left: 0;
    padding: 0 0.75rem;
}

.description {
    margin-bottom: 0.25rem;
}

textarea {
    height: 5.25rem;
}

.uploader {
    margin-right: 0;
    border-radius: 0.25rem 0rem 0rem 0.25rem;
    border-right: 2px solid #070707;
    margin-bottom: 0.5rem;
}

.applyButton {
    width: 50%
}

.cancelButton {
    border-radius: 0rem 0.25rem 0.25rem 0rem;
    margin-bottom: 0.5rem;
}

input[type=file] {
    display: none;
}
</style>
