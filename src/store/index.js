import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

let api = "http://localhost:3000";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groups: {},
    members: {},
    userInfo: {}
  },

  mutations: {
    login(state, { res }) {
      state.userInfo = res.data.userInfo;
      localStorage.isLoggedIn = true;
      localStorage.userInfo = JSON.stringify(res.data.userInfo);
    },
    register(state, { res }) {
      state.userInfo = res.data.userInfo;
      localStorage.isLoggedIn = true;
      localStorage.userInfo = JSON.stringify(res.data.userInfo);    
    },
    update(state, { res }) {
      state.userInfo = res.data.userInfo;
      localStorage.isLoggedIn = true;
      localStorage.userInfo = JSON.stringify(res.data.userInfo);    
    }
    
  },
    

  actions: {
    async login({ commit }, reqData) {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      };
      console.log(reqData.email, reqData.password);
      const userLoginRequest = {
        'email': reqData.email,
        'password': reqData.password
      };
      await Axios.post(api + '/auth', userLoginRequest, headers)
      .then(res => commit("login", { res }))
      .catch(err => alert(err));
    },
    async register({ commit }, reqData) {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      };
      console.log('Register: ' + reqData.email + reqData.password);
      const userResgistrationRequest = {
        'username': reqData.name,
        'email': reqData.email,
        'password': reqData.password
      };
      await Axios.post(api + '/register', userResgistrationRequest, headers)
      .then(res => commit("register", { res }))
      .catch(err => alert(err));
    },
    async update({ commit }, reqData) {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      };
      console.log('Update: ' + reqData.email + reqData.password);
      const userUpdateRequest = {
        'username': reqData.name,
        'email': reqData.email,
        'password': reqData.password,
        'id': reqData.id
      };
      await Axios.post(api + '/update', userUpdateRequest, headers)
      .then(res => commit("update", { res }))
      .catch(err => alert(err));
    }
  },

  getters: {
    groups: state => state.groups,
    members: state => state.members,
    userInfo: state => state.userInfo
  }
});