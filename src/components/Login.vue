<template>
    <div class="login-form">
        <h1>Please Login</h1>
        <form>
            <input type="text" name="username" v-model="email" placeholder="Username" required>
            <input type="password" name="password" v-model="password" placeholder="Password" required>
            <input type="button" v-on:click="login" value="Login">
        </form>
        {{test}}
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            email: '',
            password: '',
            test: 'Not logged in'
        };
    },
    methods: {
        async login () {
            // Dispatch login function
            await this.$store.dispatch("login", { email: this.email, password: this.password });
            this.test = this.$store.state.userInfo;
        }
    }
}
</script>