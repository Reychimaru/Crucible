<template>
<nav class="headerNavContainer flexcolumn">
    <section class="flexrow-sb">
        <button class="buttonIcon"><i class="bi bi-arrow-left"></i></button>
        <div class="flexcolumn">
            <form action="">
                <input type="search" name="search">
            </form>
            <i class="searchIcon bi bi-search"></i>
        </div>
        <button class="buttonIcon"><i class="bi bi-tags"></i></button>
    </section>
</nav>
<div class="headerSpacer"></div>
</template>

<script>
</script>

<style scoped>
section {
    width: 100%;
    max-width: 516px;
}

div {
    width: 224px;
    position: relative;
}

input {
    background-color: rgb(23, 23, 23);
    border-radius: 0.5rem;
    border: none;
    width: 250px;
    color: white;
    height: 2rem;
    font-size: 0.8rem;
    padding-left: 2.15rem;
    padding-right: 0.8rem;
    resize: none;
    overflow: hidden;
    outline: none;
}

input:hover {
    background-color: rgb(35, 35, 35);
}

input:focus {
    background-color: rgb(35, 35, 35);
}

.searchIcon {
    position: absolute;
    color: rgb(150, 150, 150);
    top: 6px;
    left: -4px;

}

.headerSpacer {
    margin-bottom: 3.5rem;
}
</style>
