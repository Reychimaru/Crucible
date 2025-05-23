<template>
<div class="basePadder">
    <article class="baseContainer">
        <form action="" @submit.prevent="submitPost">
            <h3 class="panelName">Create post</h3>
            <label for="title" class="flexrow-sb">
                <span>Title*</span>
                <span v-if="requiredTitle" class="inputError">Required</span>
            </label>
            <textarea class="titleInput" name="title" placeholder="Enter a title" maxlength="125" required @invalid="handleTitleError($event)"></textarea>

            <label for="media" class="flexrow-sb">
                <span>Media</span>
                <span class="inputError">File not supported</span>
            </label>
            <div name="media" class="mediaButtons flexrow">
                <button type="button" v-if="videoPreview === null && content.length === 0" @click="uploadVideo" class="buttonText mediaUploader flexcolumn">
                    <i class="bi bi-play-btn"></i>
                    <span>Add a video</span>
                </button>
                <button type="button" v-if="content.length === 0 && videoPreview === null" @click="uploadFile" class="buttonText mediaUploader flexcolumn">
                    <i class="bi bi-images"></i>
                    <span>Add images</span>
                </button>
            </div>

            <!-- Input file nascosto per video -->
            <input type="file" accept="video/*" ref="uploadVideoInput" @change="previewVideo" style="display: none" />

            <!-- Preview del video se presente -->
            <video v-if="videoPreview" :src="videoPreview" controls class="videoPreview" loop />

            <!-- Carosello con immagini e bottone per aggiungere altre -->
            <CreateCarousel v-if="content.length > 0" :content="content" @discard="handleDiscard" @add-content="uploadFile" />

            <!-- Input file nascosto -->
            <input type="file" name="media" accept="image/*" ref="uploadFile" @change="previewFile" style="display: none" />

            <label for="description" class="flexrow-sb">
                <span>Description</span>
                <span class="inputError">No symbols allowed</span>
            </label>
            <textarea class="descriptionInput" name="description" placeholder="Write a post" maxlength="2500" required></textarea>

            <label for="spoiler" class="flexrow-sb">
                <span>Spoilers subject</span>
                <span class="inputError">No symbols allowed</span>
            </label>
            <input name="spoiler" type="text" placeholder="Leave this empty if there are no spoilers" />

            <label for="tags" class="flexrow-sb">
                <span>Add Tags</span>
                <span v-if="tagError" class="inputError">No symbols or spacing</span>
            </label>
            <div class="flexrow-h-start addTagContainer">
                <input class="tagInput" name="tags" type="text" ref="inputTags" maxlength="25" />
                <button @click="addTag" type="button" class="buttonText addTagButton">
                    Add
                </button>
            </div>
            <div class="tagsPreview flexrow-h-start">
                <p v-if="tags.length === 0" class="greyText noTags">No tags added</p>
                <ul v-if="tags.length !== 0" class="tags">
                    <li v-for="(tag, index) in tags" :key="index" @click="discardTag(index)" :style="getSpecialTag(tag) ? { backgroundColor: getSpecialTag(tag).color } : {}">
                        <p>#{{ tag.name }}</p>
                    </li>
                </ul>
            </div>

            <div class="flexrow markingButtons">
                <button type="button" class="flexrow buttonText" @click="markAsMature">
                    <input class="checkbox" type="checkbox" name="mature" ref="markAsMature" />
                    <span>This post contains mature content</span>
                </button>
            </div>
            <div class="flexrow-h-end formButtons">
                <button @click="cancelPost" class="cancelButton buttonText" type="button">
                    Cancel
                </button>
                <button class="postButton buttonText" type="submit">Post</button>
            </div>
        </form>
    </article>

    <article class="baseContainer">
        <p></p>

    </article>

</div>
</template>

<script>
import CreateCarousel from '@/components/create-components/CreateCarousel.vue';

export default {
    components: {
        CreateCarousel,
    },
    data() {
        return {
            tags: [],
            content: [],
            videoPreview: null,

            requiredTitle: false,

            titleError: false,
            mediaError: false,
            descriptionError: false,
            tagError: false,

            specialTags: [{
                name: 'fortnite',
                color: 'blue'
            }, ]

        };
    },
    methods: {
        uploadFile() {
            if (this.content.length >= 10) {
                alert('Hai raggiunto il limite massimo di 10 immagini.');
                return;
            }
            this.$refs.uploadFile.click();
        },
        handleDiscard(index) {
            this.content.splice(index, 1);
            if (this.content.length === 0) {
                // opzionale: reset carousel index se vuoi
            }
        },
        addTag() {
            const tagInput = this.$refs.inputTags;
            const tagValue = tagInput.value.trim().toLowerCase();

            if (!/^[a-z0-9_àèéìòù-]+$/.test(tagValue)) {
                this.tagError = true;
                return;
            }

            if (this.tags.length < 5) {
                if (
                    tagValue.length > 0 &&
                    !this.tags.find((tag) => tag.name.toLowerCase() === tagValue)
                ) {
                    this.tags.push({
                        name: tagValue,
                    });
                    tagInput.value = '';
                    this.tagError = false;
                }
            }
        },
        getSpecialTag(tag) {
            return this.specialTags.find(special => special.name === tag.name.toLowerCase());
        },
        discardTag(index) {
            this.tags.splice(index, 1);
        },
        previewFile(event) {
            const files = event.target.files;
            if (!files.length) return;

            for (let i = 0; i < files.length && this.content.length < 10; i++) {
                const file = files[i];

                // ✅ Controlla che sia un'immagine
                if (!file.type.startsWith("image/")) {
                    alert("Sono accettati solo file immagine.");
                    continue;
                }

                const reader = new FileReader();
                reader.onload = (e) => {
                    this.content.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }

            // Reset per permettere di ricaricare gli stessi file
            this.$refs.uploadFile.value = '';
        },
        uploadVideo() {
            this.$refs.uploadVideoInput.click();
        },
        previewVideo(event) {
            const file = event.target.files[0];
            if (!file) return;

            if (!file.type.startsWith("video/")) {
                alert("Carica un file video valido.");
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                this.videoPreview = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        markAsMature() {
            this.$refs.markAsMature.click();
        },
        handleTitleError(event) {
            event.preventDefault();
            this.requiredTitle = true;
        },
        cancelPost() {
            // implementa il reset o la navigazione indietro
        },
        submitPost() {
            // logica submit
        },
    },
}
</script>

<style scoped>
.baseContainer {
    padding: 0.75rem;
}

.titleInput {
    max-height: 4rem;
    resize: none;
}

.mediaUploader {
    width: 100%;
    height: 8rem;
    outline: 2px dashed #171717;
}

.mediaUploader>i {
    font-size: 4rem;
}

.descriptionInput {
    min-height: 8rem;
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
    margin-top: 0.75rem;
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
    outline: 2px dashed #171717;
    border-radius: 0.25rem;
    min-height: 2rem;
    margin-top: 0.75rem;
    padding: 0rem 0.25rem;
    padding-bottom: 0.25rem;
}

.addTagContainer {
    position: relative;
    width: 100%;
}

.tagInput {
    width: calc(75% + 0.55rem);
    border-radius: 0.25rem 0rem 0rem 0.25rem;
    z-index: 1;
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
    margin-top: 0.25rem;
    margin-right: 0.5rem;
    cursor: pointer;
    background-color: #171717;
    padding: 0.25rem 0.5rem;
    padding-left: 0.75rem;
    border-radius: 1rem 0.25rem 0.25rem 1rem;
}

.noTags {
    width: 100%;
    text-align: center;
}

.inputError {
    color: #e53935;
}

.videoPreview {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 0.25rem;
    outline: 1px solid #171717;
    background-color: #070707;
}
</style>
