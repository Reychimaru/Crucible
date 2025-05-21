<template>
<div class="basePadder">
    <article class="baseContainer">
        <form action="">
            <h3 class="panelName">Posting in: {{ community.name }}</h3>
            <label for="title" class="flexrow-sb">
                <span>Title</span>
                <span>Error</span>
            </label>
            <textarea class="titleInput" name="title" placeholder="Enter a title" ref="inputContent" maxlength="125" required></textarea>

            <button type="button" v-if="content.length === 0" @click="uploadFile()" class="buttonText mediaUploader flexcolumn">
                <i class="bi bi-images"></i>
                <span>Add images or videos</span>
            </button>

            <CreateCarousel v-if="content.length > 0" :content="content" @discard="handleDiscard" />

            <input type="file" name="media" accept="image/*" ref="uploadFile" @change="previewFile">

            <label for="description" class="flexrow-sb">
                <span>Description</span>
                <span>Error</span>
            </label>
            <textarea name="description" placeholder="Write a post" ref="inputContent" maxlength="2500" required></textarea>

            <div class="tagsPreview flexrow-h-start">
                <p v-if="tags.length == 0" class="greyText">No tags added</p>
                <ul v-if="!tags.length == 0" class="tags">
                    <li v-for="(tag, index) in tags" :key="index" @click="discardTag(index)">
                        <p>#{{ tag.name }}</p>
                    </li>
                </ul>
            </div>

            <label for="tags" class="flexrow-sb">
                <span>Add Tags</span>
                <span>Error</span>
            </label>
            <div class="flexrow-h-start addTagContainer">
                <input class="tagInput" name="tags" type="text" placeholder="Hashtag not required" ref="inputTags" maxlength="25" />
                <button @click="addTag" type="button" class="buttonText addTagButton">Add</button>
            </div>
            <div class="flexrow markingButtons">
                <button type="button" class="flexrow buttonText" @click="markAsMature()">
                    <input class="checkbox" type="checkbox" name="mature" ref="markAsMature">
                    <span>Mature Content</span>
                </button>
                <button type="button" class="flexrow buttonText" @click="markAsSpoiler()">
                    <input class="checkbox" type="checkbox" name="spoiler" ref="markAsSpoiler">
                    <span>Spoiler</span>
                </button>
            </div>
            <div class="flexrow-h-end formButtons">
                <button @click="cancelPost" class="cancelButton buttonText" type="button">Cancel</button>
                <button class="postButton buttonText" type="submit">Post</button>
            </div>
        </form>
    </article>
</div>
</template>

<script>
import CreateCarousel from '@/components/create-components/CreateCarousel.vue';

export default {
    components: {
        CreateCarousel
    },
    data() {
        return {

            tags: [],

            community: {
                name: "Dark Fantasy RPGs",
            },

            content: [
                '/public/asset/image1.webp',
                '/public/asset/image2.jpg',
                '/public/asset/image3.jpg',
            ],
        };
    },
    methods: {
        uploadFile() {
            this.$refs.uploadFile.click();
        },
        handleDiscard(index) {
            this.content.splice(index, 1);
        },
        addTag() {
            const tagInput = this.$refs.inputTags;
            const tagValue = tagInput.value.trim().toLowerCase(); // converte in minuscolo
            if (!this.tags.length < 5) {
                if (tagValue.length > 0 && !this.tags.find(tag => tag.name.toLowerCase() === tagValue)) {
                    this.tags.push({
                        name: tagValue
                    });
                    tagInput.value = '';
                }
            }

        },
        discardTag(index) {
            this.tags.splice(index, 1);
        },
        previewFile(event) {
            const file = event.target.files[0];

            const reader = new FileReader();
            reader.onload = (e) => {
                this.content.push(e.target.result)
            }
            reader.readAsDataURL(file)
        },
        markAsMature() {
            this.$refs.markAsMature.click();
        },
        markAsSpoiler() {
            this.$refs.markAsSpoiler.click();
        },
    }
};
</script>

<style scoped>
.baseContainer {
    padding: 0.75rem;
}

.titleInput {
    height: 5.25rem;
    min-height: 5.25rem;
    resize: none;
}

.mediaUploader {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    margin: 0.75rem 0rem;
    outline: 2px dashed #171717;
}

.mediaUploader>i {
    font-size: 4rem;
}

textarea {
    height: 8rem;
    min-height: 8rem;
    margin-bottom: 0rem;
    resize: vertical;
}

.checkbox {
    width: 1rem;
    height: 1rem;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    pointer-events: none;
}

form>div {
    gap: 0.75rem;
    width: 100%;
}

.markingButtons {
    width: 100%;
    gap: 0.75rem;
}

.markingButtons>button {
    width: 100%;
    gap: 0.5rem;
}

.formButtons {
    width: 100%;
    margin-top: 0.75rem;
    gap: 0.75rem;
    padding-left: 2.25rem;
}

.formButtons>button {
    width: 25%;
}

label {
    margin-top: 0.75rem;
}

input[type='file'] {
    display: none;
}

.tagsPreview {
    background-color: #070707;
    outline: 1px solid #171717;
    border-radius: 0.25rem;
    min-height: 2.5rem;
    margin-top: 0.75rem;
    padding: 0.25rem 0.5rem;
}

.addTagContainer {
    position: relative;
    width: 100%;
}

.tagInput {
    width: calc(75% + 0.55rem);
    border-radius: 0.25rem 0rem 0rem 0.25rem;
}

.addTagButton {
    position: absolute;
    margin-bottom: 0.75rem;
    right: 0rem;
    top: 0rem;
    width: calc(25% - 0.55rem);
    border-radius: 0rem 0.25rem 0.25rem 0rem;
}

.tags {
    display: flex;
    flex-wrap: wrap;
}

.tags>li {
    margin: 0.25rem 0rem;
    margin-right: 0.5rem;
    cursor: pointer;
    background-color: #171717;
    padding: 0.25rem 0.5rem;
    padding-left: 0.75rem;
    border-radius: 1rem 0.25rem 0.25rem 1rem;
}
</style>
