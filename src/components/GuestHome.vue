<template>
    <div class="guest-option">
        <form>
            <input type="button" v-on:click="gotoLogin" value="Login">
            <input type="button" v-on:click="gotoRegister" value="Register">
        </form>
    </div>
</template>

<script>
export default {
    name: 'GuestHome',
    data () {
        return {
            isLoggedIn: false,
            userName: 'World'
        };
    },
    methods: {
        gotoLogin() {
            this.$router.push({ name: "login" });
        },
        gotoRegister() {
            this.$router.push({ name: "register" })
        }
    }
}
</script>