<template>
  <div class="article-page p-all--15">
    <h1 class="h2 mb--20 text align--center">{{ currentArticle.title }}</h1>
    <div class="article-page__content">{{ currentArticle.content }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    id: String
  },
  data() {
    return {
      article: null
    };
  },
  computed: {
    ...mapGetters(["currentArticle"])
  },
  methods: {
    ...mapActions(["getArticle"])
  },
  created() {
    this.getArticle(this.id);
  }
};
</script>

<style lang="scss" scoped>
</style>