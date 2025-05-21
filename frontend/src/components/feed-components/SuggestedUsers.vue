<template>
<article class="baseContainer">
    <div class="innerShadow"></div>
    <div class="title flexcolumn">
        <p>Suggested Users</p>
    </div>
    <section class="flexrow">
        <div class="suggestedUsers flexrow-start">
            <div>
                <UserSuggested />
            </div>
            <div>
                <UserSuggested />
            </div>
            <div>
                <UserSuggested />
            </div>
            <div>
                <UserSuggested />
            </div>
            <div>
                <UserSuggested />
            </div>
        </div>
    </section>

</article>
</template>

<script>
import UserSuggested from './UserSuggested.vue';

export default {
    components: {
        UserSuggested
    }
}
</script>

<style scoped>
.baseContainer {
    position: relative;
    border: 1px solid transparent;
}

.innerShadow {
    border: 1px solid rgb(15, 15, 15);
    box-shadow: inset 0px 0px 20px black;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
    pointer-events: none;
    border-radius: 0.25rem;
}

.title {
    margin-top: 1rem;
    font-weight: 600;
}

.suggestedUsers {
    padding: 0.5rem;
    overflow: auto;
    white-space: nowrap;
}
</style>
