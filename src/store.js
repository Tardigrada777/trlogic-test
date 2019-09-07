import Vue from 'vue';
import Vuex from 'vuex';

import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000'
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isAuth: true
    },
    articles: null
  },
  mutations: {
    SET_USER({ user }, payload) {
      // payload == true || false
      user.isAuth = payload;
    },
    SET_ARTICLES(state, payload) {
      state.articles = payload;
    }
  },
  actions: {
    async getArticles({ commit }) {
      const { data } = await axios.get('/articles');
      commit('SET_ARTICLES', data);
    }
  },
  getters: {
    isUserAuth: state => state.user.isAuth,
    articles: state => state.articles
  }
});
