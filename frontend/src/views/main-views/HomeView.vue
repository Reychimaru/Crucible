<template>
<div class="wrapper">
    <article class="baseContainer flexcolumn">
        <h1>crucible</h1>
        <h2 class="flexrow-h-start">Login</h2>
        <form action="/login" @submit.prevent class="flexcolumn-h-end">
            <div class="flexrow-start">
                <label for="email" v-if="isEmailValid">Email</label>
                <label for="email" class="notValid" v-if="!isEmailValid">Email not registered</label>
            </div>
            <input type="text" name="email" required>
            <div class="flexrow-start">
                <label for="email" v-if="isPasswordValid">Password</label>
                <label for="email" class="notValid" v-if="!isPasswordValid">Password incorrect</label>
            </div>
            <input type="password" name="password" required>
            <div class="formButtons flexrow">
                <div><RouterLink to="/recover"><button class="buttonText">Forgot Password</button></RouterLink></div>
                <div><button class="buttonText" type="submit">Login</button></div>
            </div>
        </form>
        <section>
            <h2 class="flexrow-h-start">New user?</h2>
            <RouterLink to="/register"><button class="buttonText">Create Account</button></RouterLink>
        </section>
    </article>
</div>
</template>

<script>
export default {
    data() {
        return {
            isEmailValid: true,
            isPasswordValid: true,
        };
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
    margin-bottom: 2.75rem;
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
