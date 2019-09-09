import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Подключаем и инициализируем
// плагин vue-progressbar
import VueProgressBar from 'vue-progressbar';
Vue.use(VueProgressBar, {
  color: '#5755d9',
  failedColor: 'red'
});

// Подключаем наш компонент кнопки глобально
// из-за частого использования в разных частях приложения
import Button from './components/Button.vue';
Vue.component('Button', Button);

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
