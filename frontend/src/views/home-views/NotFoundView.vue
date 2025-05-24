<template>
<div class="wrapper">
    <article class="baseContainer flexcolumn">
        <h2>Page not found</h2>
        <div>
            <button class="buttonText" @click="goBack">Return</button>
        </div>
    </article>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        goBack() {
            this.$router.go(-1);
            const audio = new Audio('/public/asset/audio/click.mp3');
            audio.play();
        }
    }
}
</script>

<style scoped>
router-link {
    width: 100%;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85vh;
}

.baseContainer {
    max-width: 20rem;
    padding: 0.75rem;
}

h1 {
    font-size: 4.75rem;
    margin: 1.5rem 0;
}

h2 {
    width: 100%;
    margin-bottom: 0.75rem;
    height: 1.75rem;
    border-bottom: 2px solid #171717;
}

div,
button {
    width: 100%;
}
</style>
