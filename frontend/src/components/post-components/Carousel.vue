<template>
<article @mouseenter="carouselHover = true" @mouseleave="carouselHover = false" class="carouselContainer flexcolumn" :style="{ backgroundImage: `url(${content[carouselIndex]})` }">

    <RouterLink v-if="!isOpen" to="/post/id">
        <img :src="content[carouselIndex]" alt="" class="carouselContent">
    </RouterLink>

    <img v-if="isOpen" :src="content[carouselIndex]" alt="" class="carouselContent">

    <button v-if="content.length > 1 && carouselHover && !isSpoiler && !isMature" @click="prevContent()" class="buttonIcon flexcolumn carouselButtonLeft"><i class="bi bi-arrow-left-circle"></i></button>
    <button v-if="content.length > 1 && carouselHover && !isSpoiler && !isMature" @click="nextContent()" class="buttonIcon flexcolumn carouselButtonRight"><i class="bi bi-arrow-right-circle"></i></button>
    <div v-if="content.length > 1 && carouselHover && !isSpoiler && !isMature" class="flexrow carouselCounter">{{ carouselIndex + 1 }} <span>/</span> {{ content.length }}</div>

    <div class="contentFilterBlur" v-if="isMature" :style="{ backgroundImage: `url(${content[carouselIndex]})` }"></div>
    <div class="contentFilterBlur" v-if="isSpoiler" :style="{ backgroundImage: `url(${content[carouselIndex]})` }"></div>

    <div v-if="isMature" class="contentFilter flexcolumn">
        <i class="bi bi-eye-slash"></i>
        <p>This post contains mature content.</p>
        <p>You can disable this filter in your settings.</p>
        <button class="buttonText" @click="showMature()">Show Content</button>
    </div>
    <div v-if="isSpoiler" class="contentFilter flexcolumn">
        <i class="bi bi-exclamation-diamond"></i>
        <p>This post contains spoilers.</p>
        <button class="buttonText" @click="showSpoiler()">Show Spoiler</button>
    </div>
</article>
</template>

<script>
export default {
    props: {
        content: Array,
        isOpen: Boolean,
        isMatureContent: Boolean,
        isSpoilerContent: Boolean
    },
    data() {
        return {
            carouselHover: false,
            carouselIndex: 0,
            isMature: this.isMatureContent,
            isSpoiler: this.isSpoilerContent
        };
    },
    methods: {
        prevContent() {
            if (this.content.length === 0 || this.carouselIndex === 0) {
                return;
            }
            this.carouselIndex--;
        },
        nextContent() {
            if (this.carouselIndex >= this.content.length - 1) {
                return;
            }
            this.carouselIndex++;
        },
        showMature() {
            this.isMature = false
        },
        showSpoiler() {
            this.isSpoiler = false
        },
    }
}
</script>

<style scoped>
.carouselContainer {
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    outline: 1px solid #171717;
    margin: 0.25rem 0rem;
    width: 100%;
    aspect-ratio: 1 / 1;
}

.carouselContainer::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: inherit;
    background-size: inherit;
    background-position: inherit;
    background-repeat: no-repeat;
    filter: blur(15px);
    transform: scale(1.2);
    z-index: 0;
}

.carouselContainer::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
}

.carouselContainer>* {
    position: relative;
    z-index: 1;
}

.contentFilterBlur {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}

.contentFilterBlur::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: inherit;
    background-size: inherit;
    background-position: inherit;
    background-repeat: no-repeat;
    filter: blur(20px);
    transform: scale(1.4);
    z-index: 4;
}

.contentFilter {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    z-index: 5;
    background-color: #0b0b0b75;
    outline: 1px solid #171717;
}

.contentFilter>i {
    margin-bottom: 0.25rem;
    font-size: 5rem;
}

.contentFilter>p {
    text-align: center;
}

.contentFilter>button {
    margin-top: 0.75rem;
}

.carouselContent {
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.25rem;
}

.carouselButtonLeft,
.carouselButtonRight,
.carouselCounter {
    position: absolute;
    background-color: #0b0b0b;
    border-radius: 5rem;
    border: 0.1rem solid #171717;
    z-index: 3;
}

.carouselButtonLeft:hover,
.carouselButtonRight:hover {
    background-color: #232323;
}

.carouselButtonLeft {
    left: 0.75rem;
    align-items: center;
}

.carouselButtonRight {
    right: 0.75rem;
    align-items: center;
}

.carouselCounter {
    bottom: 0.75rem;
    align-items: center;
    height: 2rem;
    width: 3.5rem;
    gap: 0.25rem;
}

.buttonText {
    width: 50%;
}
</style>
