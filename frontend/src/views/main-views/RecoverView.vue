<template>
<div class="wrapper">
    <article class="baseContainer flexcolumn">
        <h1>crucible</h1>
        <h2 class="flexrow-h-start">Recover password</h2>
        <form action="" class="flexcolumn-h-end">
            <div class="flexrow-start">
                <label for="email" v-if="isEmailValid">Email</label>
                <label for="email" class="notValid" v-if="!isEmailValid">Email not registered</label>
            </div>
            <input type="text" name="email" required>
            <div class="formButtons flexrow">
                <div>
                    <RouterLink to="/"><button class="buttonText">Back</button></RouterLink>
                </div>
                <div>
                    <button class="buttonText" type="submit">Reset password</button>
                </div>
            </div>
        </form>
    </article>
</div>
</template>

<script>
export default {
    data() {
        return {
            isEmailValid: true,
        };
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.baseContainer {
    max-width: 20rem;
    padding: 0.75rem;
}

section {
    width: 100%;
}

h1 {
    font-size: 2.75rem;
    margin: 1.5rem 0;
}

h2 {
    width: 100%;
    margin-bottom: 0.75rem;
    height: 1.75rem;
    border-bottom: 2px solid #171717;
}

form {
    width: 100%;
}

.formButtons {
    gap: 0.75rem
}

div {
    width: 100%;
}

input {
    width: 294px;
}

button {
    width: 100%;
}

.notValid {
    color: B23232;
}
</style>
