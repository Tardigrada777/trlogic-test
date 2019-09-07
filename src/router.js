import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import store from './store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articlesEdit',
      name: 'articlesEdit',
      component: () =>
        import(
          /* webpackChunkName: "articlesEdit" */ './views/ArticlesEditPage.vue'
        ),
      beforeEnter: (to, from, next) => {
        const isAuth = store.getters.isUserAuth;
        const storageAuthState = +localStorage.getItem('isUserAuth');
        if (!isAuth && !storageAuthState) {
          return next('/login');
        }
        next();
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/LoginPage.vue')
    }
  ]
});
