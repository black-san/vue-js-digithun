<template>
    <div class="register-form">
        <h1>Register</h1>
        <form>
            <input type="text" name="name" v-model="name" placeholder="Full Name" required>
            <input type="text" name="email" v-model="email" placeholder="Email" required>
            <input type="password" name="password" v-model="password" placeholder="Password" required>
            <input type="button" v-on:click="register" value="Register">
        </form>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data () {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async register () {
            // Dispatch register function
            await this.$store.dispatch("register", {name: this.name, email: this.email, password: this.password })
            .then(() => this.$router.push({ name: "home" }));
        }
    }
}
</script>