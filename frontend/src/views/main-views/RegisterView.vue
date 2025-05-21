<template>
<div class="wrapper">
    <article class="baseContainer">
        <h1 class="flexrow">crucible</h1>
        <h2 class="flexrow-h-start">Create account</h2>
        <form @submit.prevent="handleSubmit" class="flexcolumn-h-end">
            <div class="flexrow">
                <label for="username" v-if="isUsernameValid">Username</label>
                <label for="username" class="notValid" v-else>Username must be from 5 to 15 characters</label>
            </div>
            <input type="text" id="username" v-model="username" required>

            <div class="flexrow">
                <label for="email" v-if="isEmailValid">Email</label>
                <label for="email" class="notValid" v-else>Email already registered</label>
            </div>
            <input type="text" id="email" v-model="email" required>

            <div class="flexrow">
                <label for="password" v-if="isPasswordValid">Password</label>
                <label for="password" class="notValid" v-else>Password must be at least 8 characters</label>
            </div>
            <input type="password" id="password" v-model="password" required>

            <div class="flexrow">
                <button class="buttonText" type="submit">Register</button>
            </div>
        </form>

        <section>
            <h2 class="flexrow-h-start">Already registered?</h2>
            <RouterLink to="/"><button class="buttonText">Login</button></RouterLink>
        </section>
    </article>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            isUsernameValid: true,
            isEmailValid: true,
            isPasswordValid: true,
        };
    },
    methods: {
        async handleSubmit() {
            this.isUsernameValid = true;
            this.isEmailValid = true;
            this.isPasswordValid = this.password.length >= 8;

            if (this.username.length < 5 || this.username.length > 15) {
                this.isUsernameValid = false;
                return;
            }

            if (!this.isPasswordValid) return;

            try {
                const response = await axios.post('http://localhost:3000/api/register', {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }, {
                    withCredentials: true
                });

                const redirectTo = response.data.redirectTo;
                this.$router.push(redirectTo); // sarà tipo /user/username

            } catch (error) {
                if (error.response) {
                    const data = error.response.data;
                    if (data.error === 'username_taken') this.isUsernameValid = false;
                    if (data.error === 'email_registered') this.isEmailValid = false;
                } else {
                    console.error('Network error:', error);
                }
            }
        }
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
    color: #B23232;
}
</style>
