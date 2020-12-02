<template>
    <div class="login-form">
        <h1>Please Login</h1>
        <form>
            <input type="text" name="username" v-model="email" placeholder="Username" required>
            <input type="password" name="password" v-model="password" placeholder="Password" required>
            <input type="button" v-on:click="login" value="Login">
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login () {
            // Dispatch login function
            console.log(this.email, this.password);
            await this.$store.dispatch("login");
        }
    }
}
</script>