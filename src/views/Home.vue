<template>
  <div class="home p-all--15">
    <div class="d-flex a-items--center j-cont--sb mb--20">
      <h2 class="mb--0">Статьи</h2>
      <button class="btn btn-primary btn-sm">Новая статья</button>
    </div>

    <div class="c-articles-list">
      <ArticleCard :article="article" />
    </div>
  </div>
</template>

<script>
import ArticleCard from "../components/ArticleCard";

export default {
  name: "home",
  data() {
    return {
      article: {
        title: "Статья №1",
        date: "19 августа 2019",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et libero totam placeat. Praesentium facere delectus, quidem odit velit quae architecto."
      }
    };
  },
  components: {
    ArticleCard
  }
};
</script>

<style lang="scss">
.home {
  position: relative;
}
</style>