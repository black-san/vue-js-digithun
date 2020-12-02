import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

let api = "http://localhost:3000/";

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
    async login({ commit }, email, password) {
        console.log('Call LOGIN')
        await Axios.post(api + '/auth', {
            firstName: email,
            lastName: password
          })
        .then(res => commit("login", { res }))
        .catch(err => alert(err));
    }
  },

  getters: {
    groups: state => state.groups,
    members: state => state.members
  }
});