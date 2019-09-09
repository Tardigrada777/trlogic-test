import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

import vueInstance from './main';

import Axios from 'axios';

const productionURL = 'https://trlogic-blog-test.herokuapp.com/api';
const devURL = 'http://localhost:3000/api';
const axios = Axios.create({
  baseURL: productionURL
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      // Состояние регистрации запоминаем
      // в localstorage. Оператор + используется
      // потому что из storage считываются строки
      isAuth: +localStorage.getItem('isUserAuth') || 0
    },
    // Список всех статей
    articles: null,
    // Статья, выбранная для чтения
    article: null
  },
  mutations: {
    SET_USER({ user }, payload) {
      // payload == true || false
      user.isAuth = payload;
      localStorage.setItem('isUserAuth', payload);
    },
    SET_ARTICLES(state, payload) {
      state.articles = payload;
    },
    SET_ARTICLE(state, article) {
      state.article = article;
    }
  },
  actions: {
    async getArticles({ commit }) {
      // Получаем список всех статей
      // NOTE: Будем получать данные с сервера уже отсортированные
      const { data } = await axios.get('/articles?_sort=date&_order=desc');
      commit('SET_ARTICLES', data);
    },
    getArticle({ commit }, id) {
      // Получаем одну статью по id
      vueInstance.$Progress.start();

      axios
        .get(`/articles/${id}`)
        .then(res => {
          commit('SET_ARTICLE', res.data);
          vueInstance.$Progress.finish();
        })
        .catch(err => {
          vueInstance.$Progress.fail();
        });
    },
    login({ commit }) {
      // Вход, данный action должен
      // принимать данные пользователя
      // Но из-за упрощения мы опускаем
      // этот параметр.
      vueInstance.$Progress.start();

      // Симуляция процесса авторизации
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
      // Удаление статьи из базы по id

      vueInstance.$Progress.start();
      axios
        .delete(`/articles/${articleID}`)
        .then(() => {
          vueInstance.$Progress.finish();

          // Обновляем список статей после удаления
          dispatch('getArticles');
        })
        .catch(err => {
          console.log(err);
          vueInstance.$Progress.fail();
        });
    },
    createArticle({ dispatch }, article) {
      // Создание новой статьи

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
          // Обновляем список статей после создания новой
          dispatch('getArticles');
        })
        .catch(err => {
          console.log(err);
          vueInstance.$Progress.fail();
        });
    },
    editArticle({ dispatch }, article) {
      // Редактирование статьи

      vueInstance.$Progress.start();

      article.date = new Date();

      axios
        .put(`/articles/${article.id}`, article)
        .then(() => {
          // Обновляем список статей после редактирования
          dispatch('getArticles');
          vueInstance.$Progress.finish();
        })
        .catch(err => {
          console.log(err);
          vueInstance.$Progress.fail();
        });
    }
  },
  getters: {
    isUserAuth: state => state.user.isAuth,
    articles: state => state.articles,
    currentArticle: state => state.article
  }
});
