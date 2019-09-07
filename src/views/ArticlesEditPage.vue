<template>
  <div class="articles-edit-page p-all--15">
    <div class="d-flex a-items--center j-cont--sb mb--20">
      <h2 class="mb--0">Редактирование статей</h2>
      <button class="btn btn-primary btn-sm" @click="isNewArticleModalOpen = true">
        <i class="icon icon-plus mr--5"></i>
        Новая статья
      </button>
    </div>
    <ArticleCard
      v-for="(article, i) in articles"
      :key="`article#${i}`"
      :article="article"
      class="mb--20"
      @edit-article="editArticle(article)"
      @delete-article="deleteConfirm = true"
      editable
    />

    <NewArticleModal v-model="isNewArticleModalOpen" />
    <EditArticleModal :article="article" v-model="isEditModalOpen" />
    <DeleteConfirm v-model="deleteConfirm" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ArticleCard from "../components/ArticleCard";

import EditArticleModal from "../components/EditArticleModal";
import NewArticleModal from "../components/NewArticleModal";
import DeleteConfirm from "../components/DeleteConfirm";

export default {
  name: "articlesEdit",
  data() {
    return {
      isEditModalOpen: false,
      isNewArticleModalOpen: false,
      deleteConfirm: false,
      article: {}
    };
  },
  computed: {
    ...mapGetters(["articles"])
  },
  methods: {
    editArticle(article) {
      this.article = article;
      this.isEditModalOpen = true;
    }
  },
  components: { ArticleCard, EditArticleModal, NewArticleModal, DeleteConfirm }
};
</script>

<style lang="scss">
</style>