<template>
  <div id="app">
    <AppBar />
    <div class="container grid-lg">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
  created() {
    axios
      .get("http://localhost:3000/articles")
      .then(res => {
        this.articles = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss">
@import "./assets/customization.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
