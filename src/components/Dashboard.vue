<template>
    <div class="guest-option">
        <h1>Profile</h1>
        <div v-if="!isEditMode">
            <form>
                <label for="text">Full Name: </label>
                <input type="text" name="name" v-model="userInfo.username" readonly><br/>
                <label for="text">Email: </label>
                <input type="text" name="email" v-model="userInfo.email" placeholder="Email" readonly><br/>
                <label for="text">Password: </label>
                <input type="password" name="password" v-model="userInfo.password" placeholder="Password" readonly><br/>
            </form>
            <button v-on:click="edit">Edit</button>
            <button v-on:click="logout">Logout</button>
        </div>
        <div v-if="isEditMode">
            <form>
                <label for="text">Full Name: </label>
                <input type="text" name="name" v-model="userInfo.username" placeholder="Full Name" required><br/>
                <label for="text">Email: </label>
                <input type="text" name="email" v-model="userInfo.email" placeholder="Email" required><br/>
                <label for="text">Password: </label>
                <input type="password" name="password" v-model="userInfo.password" placeholder="Password" required><br/>
            </form>
            <button v-on:click="updateProfile">Update</button>
            <button v-on:click="cancelEditMode">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data () {
        return {
            isLoggedIn: false,
            userName: 'World',
            isEditMode: false,
            userInfo: {}
        };
    },
    mounted (){
        this.userInfo = JSON.parse(localStorage.userInfo);
    },
    methods: {
        gotoLogin() {
            this.$router.push({ name: "login" });
        },
        gotoRegister() {
            this.$router.push({ name: "register" })
        },
        edit() {
            this.isEditMode = true;
        },
        async updateProfile() {
            this.isEditMode = false;
            // Dispatch register function
            await this.$store.dispatch("update", {name: this.userInfo.username, email: this.userInfo.email, password: this.userInfo.password, id: this.userInfo.id });
        },
        cancelEditMode() {
            this.isEditMode = false;
        },
        logout() {
            this.userInfo = {};
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userInfo');
            this.isLoggedIn = false;
            this.$router.push({ name: "login" });
        }
    }
}
</script>