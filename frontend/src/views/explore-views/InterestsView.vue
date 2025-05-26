<template>
<div class="basePadder">
    <article class="baseContainer">
        <form action="" @submit.prevent="submitPost">
            <h3 class="panelName">Personalize your interest tags</h3>
            <p>These tags will not appear in your Explore section, yet it doesn't hide posts with ignored tags from your homepage and other user's profiles.</p>

            <label for="tags" class="flexrow-sb">
                <span>Add tags</span>
                <span v-if="tagError" class="inputError">No symbols or spacing</span>
            </label>
            <div class="flexrow-h-start addTagContainer">
                <input class="tagInput" name="tags" type="text" ref="inputSelectedTags" maxlength="25" />
                <button @click="addSelectedTag" type="button" class="buttonText addTagButton">Add</button>

            </div>
            <label for="interests" class="flexrow-sb">
                <span>Selected interests</span>
                <span v-if="minimumTagError" class="inputError">5 minimum tags required</span>
            </label>
            <div name="interests" class="tagsPreview flexrow-h-start">
                <p v-if="selectedTags.length === 0" class="greyText noTags">No tags added</p>
                <ul v-if="selectedTags.length !== 0" class="tags">
                    <li v-for="(tag, index) in selectedTags" :key="index" @click="discardSelectedTag(index)" :style=" getSpecialTag(tag) ? { backgroundColor: getSpecialTag(tag).color } : {}">
                        <p>#{{ tag.name }}</p>
                    </li>
                </ul>
            </div>

            <div class="flexrow-h-end formButtons">
                <button class="postButton buttonText" type="submit">Apply Changes</button>
            </div>
        </form>
    </article>

    <article class="baseContainer">
        <h3 class="panelName">Recommended tags</h3>
        <p>These tags</p>
        <div name="interests" class="tagsPreview flexrow-h-start">
            <ul class="tags">
                <li v-for="(tag, index) in recommendedTags" :key="index" :style="getSpecialTag(tag) ? { backgroundColor: getSpecialTag(tag).color } : {}">
                    <p>#{{ tag.name }}</p>
                </li>
            </ul>
        </div>
    </article>

    <article class="baseContainer">
        <form action="" @submit.prevent="submitPost">
            <h3 class="panelName">Ignored interest tags</h3>
            <p>These tags will not appear in your Explore section, yet it doesn't hide posts with ignored tags from your homepage and other user's profiles.</p>

            <label for="tags" class="flexrow-sb">
                <span>Add tags</span>
                <span v-if="tagError" class="inputError">No symbols or spacing</span>
            </label>
            <div class="flexrow-h-start addTagContainer">
                <input class="tagInput" name="tags" type="text" ref="inputIgnoredTags" maxlength="25" />
                <button @click="addIgnoredTag" type="button" class="buttonText addTagButton">Add</button>
            </div>
            <label for="interests" class="flexrow-sb">
                <span>Ignored interests</span>
                <span v-if="tagError" class="inputError">Minimum 5 tags</span>
            </label>
            <div name="interests" class="tagsPreview flexrow-h-start">
                <p v-if="ignoredTags.length === 0" class="greyText noTags">No ignored tags added</p>
                <ul v-if="ignoredTags.length !== 0" class="tags">
                    <li v-for="(tag, index) in ignoredTags" :key="index" @click="discardIgnoredTag(index)" :style="getSpecialTag(tag) ? { backgroundColor: getSpecialTag(tag).color } : {}">
                        <p>#{{ tag.name }}</p>
                    </li>
                </ul>
            </div>

            <div class="flexrow-h-end formButtons">
                <button class="postButton buttonText" type="submit">Apply Changes</button>
            </div>
        </form>
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
            tagError: false,
            minimumTagError: false,

            selectedTags: [{
                    name: 'film',
                    color: ''
                },
                {
                    name: 'art',
                    color: ''
                },
                {
                    name: 'manga',
                    color: ''
                },
                {
                    name: 'anime',
                    color: ''
                },
                {
                    name: 'mythology',
                    color: ''
                },
            ],

            ignoredTags: [],

            recommendedTags: [{
                    name: 'gaming',
                    color: ''
                },
                {
                    name: 'anime',
                    color: ''
                },
                {
                    name: 'film',
                    color: ''
                },
                {
                    name: 'comics',
                    color: ''
                },
                {
                    name: 'manga',
                    color: ''
                },
                {
                    name: 'photography',
                    color: ''
                },
                {
                    name: 'illustration',
                    color: ''
                },
                {
                    name: 'design',
                    color: ''
                },
                {
                    name: 'art',
                    color: ''
                },
                {
                    name: 'culture',
                    color: ''
                },
                {
                    name: 'history',
                    color: ''
                },
                {
                    name: 'mythology',
                    color: ''
                },
                {
                    name: 'folklore',
                    color: ''
                },
                {
                    name: 'music',
                    color: ''
                },
                {
                    name: 'literature',
                    color: ''
                },
                {
                    name: 'writing',
                    color: ''
                },
                {
                    name: 'technology',
                    color: ''
                },
                {
                    name: 'science',
                    color: ''
                },
                {
                    name: 'fashion',
                    color: ''
                },
                {
                    name: 'travel',
                    color: ''
                },
                {
                    name: 'food',
                    color: ''
                },
                {
                    name: 'nature',
                    color: ''
                },
                {
                    name: 'anime',
                    color: ''
                },
                {
                    name: 'tvShows',
                    color: ''
                },
                {
                    name: 'animals',
                    color: ''
                },
                {
                    name: 'crafts',
                    color: ''
                },
                {
                    name: 'sports',
                    color: ''
                },
                {
                    name: 'wellness',
                    color: ''
                },
                {
                    name: 'philosophy',
                    color: ''
                },
                {
                    name: 'psychology',
                    color: ''
                },
                {
                    name: 'education',
                    color: ''
                },
                {
                    name: 'news',
                    color: ''
                }
            ],

            specialTags: [{
                name: 'fortnite',
                color: 'blue'
            }, ]

        };
    },
    methods: {
        addSelectedTag() {
            const tagInput = this.$refs.inputSelectedTags;
            const tagValue = tagInput.value.trim().toLowerCase();

            if (!/^[a-z0-9_àèéìòù-]+$/.test(tagValue)) {
                this.tagError = true;
                return;
            }

            if (this.selectedTags.length < 100 &&
                !this.selectedTags.find(tag => tag.name === tagValue)) {
                this.selectedTags.push({
                    name: tagValue
                });
                tagInput.value = '';
                this.tagError = false;
            }
        },

        addIgnoredTag() {
            const tagInput = this.$refs.inputIgnoredTags;
            const tagValue = tagInput.value.trim().toLowerCase();

            if (!/^[a-z0-9_àèéìòù-]+$/.test(tagValue)) {
                this.tagError = true;
                return;
            }

            if (this.ignoredTags.length < 100 &&
                !this.ignoredTags.find(tag => tag.name === tagValue)) {
                this.ignoredTags.push({
                    name: tagValue
                });
                tagInput.value = '';
                this.tagError = false;
            }
        },

        getSpecialTag(tag) {
            return this.specialTags.find(special => special.name === tag.name.toLowerCase());
        },
        discardSelectedTag(index) {
            if (this.selectedTags.length === 5) {
                return this.minimumTagError = true
            }

            this.minimumTagError = false
            this.selectedTags.splice(index, 1);
        },

        discardIgnoredTag(index) {
            this.ignoredTags.splice(index, 1);
        },
        uploadVideo() {
            this.$refs.uploadVideoInput.click();
        },
    },
}
</script>

<style scoped>
.baseContainer {
    padding: 0.75rem;
}

form>p {
    margin-top: 0.75rem;
}

form>div {
    gap: 0.75rem;
    width: 100%;
}

.formButtons {
    width: 100%;
    margin-top: 0.75rem;
}

.formButtons>button {
    width: calc(50% - 0.55rem);
}

label {
    margin-top: 0.75rem;
}

.tagsPreview {
    outline: 2px dashed #171717;
    border-radius: 0.25rem;
    min-height: 2rem;
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
    margin-right: 0.25rem;
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
