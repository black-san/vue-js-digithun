<template>
    <div class="container">
        <h1>Hello {{userName}}</h1>
        <div v-if="!isLoggedInBool">
        <!-- <guest-home /> -->
            <guest-home />

        </div>
        <div v-if="isLoggedInBool">
            <dashboard />
        </div>
    </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue';
import GuestHome from '../components/GuestHome.vue';
export default {
  components: { GuestHome, Dashboard },
    name: 'Home',
    data () {
        return {
            isLoggedInStr: '',
            userName: 'World'
        };
    },
    mounted() {
        this.isLoggedInStr = localStorage.isLoggedIn;
        this.userName = JSON.parse(localStorage.userInfo).username || 'World';
    },
    computed: {
        isLoggedInBool() {
            if(this.isLoggedInStr === 'true'){
                return true;
            }
            else{
                return false;
            }
        }
    },
    methods: {
        
    }
}
</script>