<template>
  <div class="articles-edit-page p-all--15">
    <div class="d-flex a-items--center j-cont--sb mb--20">
      <h2 class="mb--0">Редактирование статей</h2>
      <button class="btn btn-primary btn-sm">
        <i class="icon icon-plus mr--5"></i>
        Новая статья
      </button>
    </div>
    <ArticleCard
      v-for="(article, i) in articles"
      :key="`article#${i}`"
      :article="article"
      class="mb--20"
      editable
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ArticleCard from "../components/ArticleCard";

export default {
  name: "articlesEdit",
  components: { ArticleCard },
  computed: {
    ...mapGetters(["articles"])
  }
};
</script>

<style lang="scss">
</style>