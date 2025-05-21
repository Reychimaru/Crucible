<template>
<article class="carouselContainer flexcolumn" :style="{ backgroundImage: `url(${content[carouselIndex]})` }">
    <img :src="content[carouselIndex]" alt="" @onclick="" class="carouselContent">
    <button type="button" v-if="content.length > 1" @click="prevContent" class="buttonIcon flexrow carouselButtonLeft"><i class="bi bi-arrow-left-circle"></i></button>
    <button type="button" v-if="content.length > 1" @click="nextContent" class="buttonIcon flexrow carouselButtonRight"><i class="bi bi-arrow-right-circle"></i></button>
    <button type="button" @click="emitDiscard" class="buttonIcon flexrow carouselButtonDiscard"><i class="bi bi-trash"></i></button>
    <button type="button" @click="addContent" class="buttonIcon flexrow carouselButtonAdd"><i class="bi bi-images"></i></button>
    <div v-if="content.length > 1" class="flexrow carouselCounter">{{ carouselIndex + 1 }} <span>/</span> {{ content.length }}</div>
</article>
</template>

<script>
export default {
    props: {
        content: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            carouselIndex: 0,
        };
    },
    methods: {
        emitDiscard() {
            this.$emit('discard', this.carouselIndex)
        },
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
    }
}
</script>

<style scoped>
.carouselContainer {
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    border-radius: 0.25rem;
    margin-top: 0.75rem;
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
    border-radius: 0.25rem;
    z-index: 0;
}

.carouselContainer::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0.25rem;
    z-index: 0;
}

.carouselContainer>* {
    position: relative;
    z-index: 1;
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
.carouselCounter,
.carouselButtonDiscard,
.carouselButtonAdd {
    position: absolute;
    background-color: #0b0b0b;
    border-radius: 5rem;
    border: 0.1rem solid #171717;
    z-index: 3;
    height: 2.25rem;
    width: 2.25rem;
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

.carouselButtonDiscard {
    top: 0.75rem;
    right: 0.75rem;
}

.carouselButtonAdd {
    top: 0.75rem;
    left: 0.75rem;
}

.carouselCounter {
    bottom: 0.75rem;
    align-items: center;
    height: 2rem;
    width: 3.5rem;
    gap: 0.25rem;
}

.contentFilter {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    z-index: 5;
    border-top: 1px solid #171717;
    background-color: #0b0b0b;
    border-bottom: 1px solid #171717;
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

.buttonText {
    width: 50%;
}
</style>
