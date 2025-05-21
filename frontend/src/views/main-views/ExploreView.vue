<template>
    <div class="basePadder">
<article class="baseContainer">
    <form action="" @submit.prevent class="flexrow">
        <input type="search" name="search" placeholder="Search something">
        <button class="buttonText applyButton">Search</button>
    </form>
    <i class="searchIcon bi bi-search"></i>
    <nav class="flexrow">
        <button class="roundLeft buttonText">Posts</button>
        <button class="buttonText">Users</button>
        <button class="roundRight buttonText">Communities</button>
    </nav>
</article>
</div>
</template>

<script>

export default {
    components: {

    }
}
</script>

<style scoped>
.baseContainer {
    padding: 0.75rem 0rem 0rem 0rem;
}

nav {
    width: 100%;
}

nav>button {
    width: 100%;
    min-width: 4.5rem;
    background-color: #070707;
}

nav>button:hover {
    background-color: rgb(15, 15, 15);
}

.roundLeft {
    border-radius: 0rem 0rem 0rem 0.25rem;
}

.roundRight {
    border-radius: 0rem 0rem 0.25rem 0rem;
}

input {
    position: relative;
    padding-left: 2.25rem;
    border-radius: 0.25rem 0rem 0rem 0.25rem;
}

form {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

form>button {
    border-radius: 0rem 0.25rem 0.25rem 0rem;
    margin-bottom: 0.75rem;
    border-left: 2px solid black;
}

.searchIcon {
    position: absolute;
    color: rgb(150, 150, 150);
    top: 1.4rem;
    left: 1.4rem;
    font-size: 1rem;
}
</style>
