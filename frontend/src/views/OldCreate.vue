<template>
<div class="basePadder">
    <article class="baseContainer">
        <section class="flexrow-sb">
            <div class="flexrow-start">
                <img class="avatar" :src="avatar" />
                <div class="flexcolumn-h-start">
                    <p class="nickname">{{ nickname }}</p>
                    <p class="username">{{ username }}</p>
                </div>
            </div>
        </section>
        <section v-if="isCarouselVisible" class="carousel flexcolumn">
            <ul class="flexcolumn">
                <li><img :src="slides[currentIndex]" class="active" /></li>
            </ul>
            <div class="separator flexrow"></div>
            <div class="flexrow sliderButtons" v-if="isSliderButtonsVisible">
                <button class="buttonIcon" @click="prevSlide"><i class="bi bi-arrow-left-circle"></i></button>
                <p>{{ sliderIndex }} / {{ slides.length }}</p>
                <button class="buttonIcon" @click="nextSlide"><i class="bi bi-arrow-right-circle"></i></button>
            </div>
        </section>
        <section class="imageSelectorContainer flexrow-sb">
            <div class="imageSelector flexcolumn">
                <button class="buttonIcon" @click="callInputFile1"><i class="bi bi-image"></i></button>
                <div class="imagePreview" v-if="isImagePreview1Visible">
                    <img :src="slides[0]">
                    <button class="buttonIcon cancelImage" @click="cancelInputFile1"><i class="bi bi-x-circle"></i></button>
                </div>
            </div>
            <div class="imageSelector flexcolumn">
                <button class="buttonIcon" @click="callInputFile2"><i class="bi bi-image"></i></button>
                <div class="imagePreview" v-if="isImagePreview2Visible">
                    <img :src="slides[1]">
                    <button class="buttonIcon cancelImage" @click="cancelInputFile2"><i class="bi bi-x-circle"></i></button>
                </div>
            </div>
            <div class="imageSelector flexcolumn">
                <button class="buttonIcon" @click="callInputFile3"><i class="bi bi-image"></i></button>
                <div class="imagePreview" v-if="isImagePreview3Visible">
                    <img :src="slides[2]">
                    <button class="buttonIcon cancelImage" @click="cancelInputFile3"><i class="bi bi-x-circle"></i></button>
                </div>
            </div>
            <div class="imageSelector flexcolumn">
                <button class="buttonIcon" @click="callInputFile4"><i class="bi bi-image"></i></button>
                <div class="imagePreview" v-if="isImagePreview4Visible">
                    <img :src="slides[3]">
                    <button class="buttonIcon cancelImage" @click="cancelInputFile4"><i class="bi bi-x-circle"></i></button>
                </div>
            </div>
            <div class="imageSelector flexcolumn">
                <button class="buttonIcon" @click="callInputFile5"><i class="bi bi-image"></i></button>
                <div class="imagePreview" v-if="isImagePreview5Visible">
                    <img :src="slides[4]">
                    <button class="buttonIcon cancelImage" @click="cancelInputFile5"><i class="bi bi-x-circle"></i></button>
                </div>
            </div>
        </section>

        <form action="">
            <input class="uploader" type="file" name="media" ref="inputFile1" @change="onFileChange1" accept="image/*">
            <input class="uploader" type="file" name="media" ref="inputFile2" @change="onFileChange2" accept="image/*">
            <input class="uploader" type="file" name="media" ref="inputFile3" @change="onFileChange3" accept="image/*">
            <input class="uploader" type="file" name="media" ref="inputFile4" @change="onFileChange4" accept="image/*">
            <input class="uploader" type="file" name="media" ref="inputFile5" @change="onFileChange5" accept="image/*">
            <label for="title" class="flexrow-sb"><span>Title</span> <span>(125 max characters)</span></label>
            <textarea class="titleInput" name="title" placeholder="Enter a title" ref="inputContent" maxlength="2500" required></textarea>
            <label for="description" class="flexrow-sb"><span>Description</span> <span>(2500 max characters)</span></label>
            <textarea name="description" placeholder="Write a post" ref="inputContent" maxlength="2500" required></textarea>
            <label for="tags" class="flexrow-sb"><span>Add Tags</span> <span>(Optional, 5 max tags)</span></label>
            <input name="tags" type="text" placeholder="Add tags" ref="inputTags" />
            <div class="flexrow-sb">
                <div class="flexrow matureContent" @click="callCheckNSFW">
                    <input class="checkbox" type="checkbox" name="nsfw" ref="checkNSFW">
                    <p>Mature content</p>
                </div>
                <div>
                    <button @click="cancelPost" class="cancelButton buttonText" type="button">Cancel</button>
                    <button class="postButton buttonText" type="submit">Post</button>
                </div>
            </div>
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
            nickname: 'Digital Art Struggler',
            username: '@reychimaru',
            avatar: 'https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg',
            isCarouselVisible: false,
            isSliderButtonsVisible: false,
            isImagePreview1Visible: false,
            isImagePreview2Visible: false,
            isImagePreview3Visible: false,
            isImagePreview4Visible: false,
            isImagePreview5Visible: false,
            slides: [],
            currentIndex: 0,
            sliderIndex: 1,
            tags: [],
        };
    },
    methods: {
        callCheckNSFW() {
            this.$refs.checkNSFW.click();
        },
        onFileChange1(event) {
            const file = event.target.files[0];

            const reader = new FileReader();
            reader.onload = (e) => {
                this.slides.push(e.target.result)
                this.checkSlides()
            }
            reader.readAsDataURL(file)
        },
        onFileChange2(event) {
            const file = event.target.files[0];

            const reader = new FileReader();
            reader.onload = (e) => {
                this.slides.push(e.target.result)
                this.checkSlides()
            }
            reader.readAsDataURL(file)
        },
        onFileChange3(event) {
            const file = event.target.files[0];

            const reader = new FileReader();
            reader.onload = (e) => {
                this.slides.push(e.target.result)
                this.checkSlides()
            }
            reader.readAsDataURL(file)
        },
        onFileChange4(event) {
            const file = event.target.files[0];

            const reader = new FileReader();
            reader.onload = (e) => {
                this.slides.push(e.target.result)
                this.checkSlides()
            }
            reader.readAsDataURL(file)
        },
        onFileChange5(event) {
            const file = event.target.files[0];

            const reader = new FileReader();
            reader.onload = (e) => {
                this.slides.push(e.target.result)
                this.checkSlides()
            }
            reader.readAsDataURL(file)
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.sliderIndex = this.currentIndex + 1
            }
        },
        nextSlide() {
            if (this.currentIndex < this.slides.length - 1) {
                this.currentIndex++;
                this.sliderIndex = this.currentIndex + 1
            }
        },
        callInputFile1() {
            this.$refs.inputFile1.click();
        },
        callInputFile2() {
            this.$refs.inputFile2.click();
        },
        callInputFile3() {
            this.$refs.inputFile3.click();
        },
        callInputFile4() {
            this.$refs.inputFile4.click();
        },
        callInputFile5() {
            this.$refs.inputFile5.click();
        },
        cancelInputFile1() {
            this.$refs.inputFile1.value = "";
            this.slides.splice(0, 1);
            this.isImagePreview1Visible = false;

            if (this.currentIndex >= this.slides.length) {
                this.currentIndex = this.slides.length - 1;
                this.checkSlides();
            }

            this.checkSlides();
        },
        cancelInputFile2() {
            this.$refs.inputFile2.value = "";
            this.slides.splice(1, 1);
            this.isImagePreview2Visible = false;

            if (this.currentIndex >= this.slides.length) {
                this.currentIndex = this.slides.length - 1;
                this.checkSlides();
            }

            this.checkSlides();
        },
        cancelInputFile3() {
            this.$refs.inputFile3.value = null;
            this.slides.splice(2, 1);
            this.isImagePreview3Visible = false;

            if (this.currentIndex >= this.slides.length) {
                this.currentIndex = this.slides.length - 1;
                this.checkSlides();
            }

            this.checkSlides();
        },
        cancelInputFile4() {
            this.$refs.inputFile4.value = "";
            this.slides.splice(3, 1);
            this.isImagePreview4Visible = false;

            if (this.currentIndex >= this.slides.length) {
                this.currentIndex = this.slides.length - 1;
                this.checkSlides();
            }

            this.checkSlides();
        },
        cancelInputFile5() {
            this.$refs.inputFile5.value = "";
            this.slides.splice(4, 1);
            this.isImagePreview5Visible = false;

            if (this.currentIndex >= this.slides.length) {
                this.currentIndex = this.slides.length - 1;
                this.checkSlides();
            }

            this.checkSlides();
        },
        checkSlides() {
            if (this.currentIndex <= 0) {
                this.currentIndex = 0
            }

            switch (this.slides.length) {
                case 1:
                    this.isCarouselVisible = true
                    this.isSliderButtonsVisible = false
                    this.isImagePreview1Visible = true;
                    this.isImagePreview2Visible = false;
                    this.isImagePreview3Visible = false;
                    this.isImagePreview4Visible = false;
                    this.isImagePreview5Visible = false;
                    break;
                case 2:
                    this.isCarouselVisible = true
                    this.isSliderButtonsVisible = true
                    this.isImagePreview1Visible = true;
                    this.isImagePreview2Visible = true;
                    this.isImagePreview3Visible = false;
                    this.isImagePreview4Visible = false;
                    this.isImagePreview5Visible = false;
                    break;
                case 3:
                    this.isCarouselVisible = true
                    this.isSliderButtonsVisible = true
                    this.isImagePreview1Visible = true;
                    this.isImagePreview2Visible = true;
                    this.isImagePreview3Visible = true;
                    this.isImagePreview4Visible = false;
                    this.isImagePreview5Visible = false;
                    break;
                case 4:
                    this.isCarouselVisible = true
                    this.isSliderButtonsVisible = true
                    this.isImagePreview1Visible = true;
                    this.isImagePreview2Visible = true;
                    this.isImagePreview3Visible = true;
                    this.isImagePreview4Visible = true;
                    this.isImagePreview5Visible = false;
                    break;
                case 5:
                    this.isCarouselVisible = true
                    this.isSliderButtonsVisible = true
                    this.isImagePreview1Visible = true;
                    this.isImagePreview2Visible = true;
                    this.isImagePreview3Visible = true;
                    this.isImagePreview4Visible = true;
                    this.isImagePreview5Visible = true;
                    break;
                default:
                    this.isCarouselVisible = false
                    this.isSliderButtonsVisible = false
                    this.isImagePreview1Visible = false;
                    this.isImagePreview2Visible = false;
                    this.isImagePreview3Visible = false;
                    this.isImagePreview4Visible = false;
                    this.isImagePreview5Visible = false;
                    break;
            }
        },
        cancelPost() {
            this.isCarouselVisible = false;
            this.sliderIndex = this.currentIndex + 1;
            this.isImagePreview1Visible = false;
            this.isImagePreview2Visible = false;
            this.isImagePreview3Visible = false;
            this.isImagePreview4Visible = false;
            this.isImagePreview5Visible = false;
            this.isImageSelector2Visible = false
            this.isImageSelector3Visible = false
            this.isImageSelector4Visible = false
            this.isImageSelector5Visible = false
            this.$refs.inputFile1.value = "";
            this.$refs.inputFile2.value = "";
            this.$refs.inputFile3.value = "";
            this.$refs.inputFile4.value = "";
            this.$refs.inputFile5.value = "";
            this.$refs.inputContent.value = "";
            this.$refs.inputTags.value = "";
            return this.slides = []
        }

    }
};
</script>

<style scoped>
.baseContainer {
    padding: 0.75rem;
}

.buttons {
    width: 100%;
}

.postButton {
    min-width: 5rem;
    margin-left: 0.75rem;
}

.postButton:hover {
    background-color: #0084ff;
}

.carousel {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 0.75rem;
    max-height: 540px;
    max-width: 540px;
    aspect-ratio: 1 / 1;
    background-color: black;
    border-radius: 0.25rem;
}

li>img {
    display: block;
    object-fit: contain;

    max-height: 540px;
    width: 100%;
}

img.active {
    display: block;
    object-fit: contain;
    max-height: 540px;
    width: 100%;
    border-radius: 0.25rem;
}

form {
    margin-top: 0.75rem;
}

textarea {
    height: 16rem;
}

.titleInput {
    height: 2.5rem;
}

input[type="file"] {
    display: none;
}

.sliderButtons {
    position: absolute;
    width: 7rem;
    height: 2rem;
    bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    border-radius: 1rem;
}

.sliderButtons>p {
    height: 1rem;
    width: 2rem;
    text-align: center;
}

.imageSelectorContainer {
    margin-top: 0.75rem;
    gap: 0.75rem;
    width: 100%;
}

.imageSelector {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 0.25rem;
    background-color: #171717;
    max-width: 6rem;
    max-height: 6rem;
}

.imageSelector:hover {
    background-color: #1c1c1c;
}

.imageSelector>button {
    width: 100%;
    height: 100%;
    max-width: 6rem;
    max-height: 6rem;
}

.imagePreview {
    position: absolute;
    top: 0;
    left: 0;
}

.imagePreview>img {
    width: 100%;
    object-fit: contain;
    aspect-ratio: 1 / 1;
    max-width: 6rem;
    max-height: 6rem;
    background-color: black;
    border: 1px solid white;
}

.cancelImage {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #171717;
    border-radius: 1rem;
}

.cancelImage:hover {
    background-color: brown;
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

form>div>div>p {
    font-weight: 600;
    text-align: center;
    margin-left: 0.5rem;
}

.matureContent {
    background-color: #171717;
    height: 2.5rem;
    padding: 0 0.75rem;
    border-radius: 0.25rem;
    transition: ease-in-out 0.1s;
    cursor: pointer;
}

.matureContent:hover {
    background-color: #232323;
    transition: ease-in-out 0.1s;
}
</style>
