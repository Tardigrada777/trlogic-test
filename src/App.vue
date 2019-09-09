<template>
  <div id="app">
    <AppBar />
    <div class="wrapper">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>

    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppBar from "./components/AppBar";

export default {
  data() {
    return {
      articles: []
    };
  },
  components: {
    AppBar
  },
  methods: {
    ...mapActions(["getArticles"])
  },
  created() {
    this.getArticles();
  }
};
</script>

<style lang="scss">
// Подключаем кастомные утилитарные стили
@import "./assets/customization.scss";

#app {
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
