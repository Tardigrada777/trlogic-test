import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

import vueInstance from './main';

import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000'
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isAuth: +localStorage.getItem('isUserAuth') || 0
    },
    articles: null
  },
  mutations: {
    SET_USER({ user }, payload) {
      // payload == true || false
      user.isAuth = payload;
      localStorage.setItem('isUserAuth', payload);
    },
    SET_ARTICLES(state, payload) {
      state.articles = payload;
    }
  },
  actions: {
    async getArticles({ commit }) {
      // NOTE: Будем получать данные с сервера уже отсортированные
      const { data } = await axios.get('/articles?_sort=date&_order=desc');
      commit('SET_ARTICLES', data);
    },
    login({ commit }) {
      vueInstance.$Progress.start();
      setTimeout(() => {
        commit('SET_USER', 1);
        router.push('/articlesEdit');
        vueInstance.$Progress.finish();
      }, 1000);
    },
    logout({ commit }) {
      commit('SET_USER', 0);
      router.push('/');
    },
    deleteArticle({ dispatch }, articleID) {
      vueInstance.$Progress.start();
      axios
        .delete(`/articles/${articleID}`)
        .then(() => {
          vueInstance.$Progress.finish();
          dispatch('getArticles');
        })
        .catch(err => {
          console.log(err);
          vueInstance.$Progress.fail();
        });
    },
    createArticle({ dispatch }, article) {
      vueInstance.$Progress.start();

      // FIXME: Следующую операцию на нормальном
      // сервере будет выполнять бэкенд, либо
      // дату можно будет назначать вручную
      // из интерфейса
      article.date = new Date();

      axios
        .post('/articles', article)
        .then(() => {
          vueInstance.$Progress.finish();
          dispatch('getArticles');
        })
        .catch(err => {
          console.log(err);
          vueInstance.$Progress.fail();
        });
    }
  },
  getters: {
    isUserAuth: state => state.user.isAuth,
    articles: state => {
      return state.articles;
    }
  }
});
