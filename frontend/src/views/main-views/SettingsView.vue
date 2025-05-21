<template>
<div class="basePadder">
    <article class="baseContainer flexcolumn-h-start">
        <h2>Content settings</h2>
        <p>This filter is enabled by default. It blurs any post marked as mature content (e.g. nudity, sexual themes, graphic material), allowing the user to click "Show Content" if they wish to view it.
            Disabling the filter will display all mature content without warning.</p>
        <form @submit.prevent class="flexrow-h-end">
            <button class="buttonText applyButton">Apply Changes</button>
        </form>

        <h2>Email settings</h2>
        <form @submit.prevent class="flexcolumn-h-end">
            <label for="nickname">Change email</label>
            <input type="email" placeholder="Enter your new email" required>
            <label for="nickname">Confirm new email</label>
            <input type="email" placeholder="Confirm your new email" required>
            <label for="nickname">Current password</label>
            <input type="password" placeholder="Enter your current password" required>
            <button class="buttonText applyButton">Change email</button>
        </form>

        <h2>Password settings</h2>
        <form @submit.prevent class="flexcolumn-h-end">
            <label for="nickname">Change password</label>
            <input type="password" placeholder="Enter your new password" required>
            <label for="nickname">Confirm new password</label>
            <input type="password" placeholder="Confirm your new password" required>
            <label for="nickname">Current password</label>
            <input type="password" placeholder="Enter your current password" required>
            <button class="buttonText applyButton">Change password</button>
        </form>

<!--         <h2>Assistance</h2>
        <form @submit.prevent class="flexcolumn-h-end">
            <label for="nickname">How can we help you?</label>
            <textarea name="supportMessage" placeholder="Enter your problem" required></textarea>
            <button class="buttonText applyButton">Send Ticket</button>
        </form> -->

        <h2>Current User</h2>
        <section class="flexcolumn-h-start">
                <div class="flexrow-h-start">
                    <img class="avatar" :src="avatar">
                    <div class="flexcolumn-h-start">
                        <p class="nickname">{{ nickname }}</p>
                        <p class="username">{{ username }}</p>
                </div>
            </div>
            <div class="flexrow-h-end">
                <button class="buttonText">Logout</button>
            </div>
        </section>
    </article>
</div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            cover: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/8261407/Ghost_Shell_1995_Screenshot_0399.jpg",
            avatar: "https://hypercritic.org/wp-content/uploads/2022/04/xhyxmjtwdepkpblrnnzxoilvqj0-1.jpeg",
            nickname: "Digital Art Struggler",
            username: "@reychimaru",
            biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do, eiusmod tempor incididunt ut, labore et dolore magna aliqua. Ut enim ad minim veniam.",
            website: "www.reychimaru.com",
            following: 10,
            followers: 2200,
            nicknamePlaceholder: null,
            avatarPlaceholder: null,
            coverPlaceholder: null
        };
    },
    created() {
        this.nicknamePlaceholder = this.nickname
        this.avatarPlaceholder = this.avatar;
        this.coverPlaceholder = this.cover;
    },
    methods: {
        onAvatarChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.avatarUrl = e.target.result;
                    this.avatarPlaceholder = this.avatarUrl
                };
                reader.readAsDataURL(file);
            }
        },
        resetAvatar() {
            this.$refs.avatarInput.value = "";
            this.avatarPlaceholder = this.avatar;
        },
        onCoverChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.coverUrl = e.target.result;
                    this.coverPlaceholder = this.coverUrl
                };
                reader.readAsDataURL(file);
            }
        },
        resetCover() {
            this.$refs.coverInput.value = "";
            this.coverPlaceholder = this.cover;
        },
    }
}
</script>

<style scoped>
.baseContainer {
    padding: 0rem 0.75rem 0.75rem 0.75rem;
}

section {
    width: 100%;
}

form {
    width: 100%;
}

.avatar {
    cursor: auto;
}

.nickname {
    cursor: auto;
}

.username {
    cursor: auto;
}

h2 {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    height: 1.75rem;
    border-bottom: 1px solid #171717;
}

.applyButton {
    width: 50%;
}
</style>
