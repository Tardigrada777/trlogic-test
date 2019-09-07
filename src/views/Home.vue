<template>
  <div class="home p-all--15">
    <h2 class="mb--20">Статьи</h2>

    <div>
      <ArticleCard
        v-for="(article, i) in articles"
        :key="`article#${i}`"
        :article="article"
        class="mb--20"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ArticleCard from "../components/ArticleCard";

export default {
  name: "home",
  components: {
    ArticleCard
  },
  computed: {
    ...mapGetters(["articles"])
  }
};
</script>

<style lang="scss">
.home {
  position: relative;
}
</style>