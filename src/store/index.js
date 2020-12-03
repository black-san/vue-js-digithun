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
    fectchGroup(state, { res }) {
      state.groups = res.data.items;
    },
    fetchMember(state, { res }) {
        state.members = res.data.items;
    },
    login(state, { res }) {
      console.log("Login succes: " + res.data);  
      state.userInfo = res.data.userInfo;
    }
  },

  actions: {
    async fectchGroup({ commit }) {
      await Axios.get(api + "group/")
        .then(res => commit("fectchGroup", { res }))
        .catch(err => alert(err));
    },
    async fetchMember({ commit }) {
        await Axios.get(api + "member/")
          .then(res => commit("fetchMember", { res }))
          .catch(err => alert(err));
    },
    async login({ commit }, reqData) {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      };
      console.log(reqData.email, reqData.password);
      const userLoginRequest = {
        'username': reqData.email,
        'password': reqData.password
      };
      await Axios.post(api + '/auth', userLoginRequest, headers)
      .then(res => commit("login", { res }))
      .catch(err => alert(err));
    }
  },

  getters: {
    groups: state => state.groups,
    members: state => state.members,
    userInfo: state => state.userInfo
  }
});