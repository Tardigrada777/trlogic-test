<template>
  <div class="articles-edit-page p-all--15">
    <div class="d-flex a-items--center j-cont--sb mb--20">
      <h2 class="mb--0">Редактирование статей</h2>
      <Button
        color="primary"
        size="sm"
        icon="plus"
        @click="isNewArticleModalOpen = true"
      >Новая статья</Button>
    </div>
    <ArticleCard
      v-for="(article, i) in articles"
      :key="`article#${i}`"
      :article="article"
      class="mb--20"
      @edit-article="editArticle(article)"
      @delete-article="deleteArticle(article.id)"
      editable
    />

    <NewArticleModal v-model="isNewArticleModalOpen" />
    <EditArticleModal :article="article" v-model="isEditModalOpen" />
    <DeleteConfirm v-model="deleteConfirmOpen" ref="confirm" />
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
  components: {
    ArticleCard,
    EditArticleModal,
    NewArticleModal,
    DeleteConfirm
  },
  data() {
    return {
      isEditModalOpen: false,
      isNewArticleModalOpen: false,
      deleteConfirmOpen: false,
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
    },
    deleteArticle(id) {
      this.$refs.confirm.open(id);
    },
    onDeleteConfirm() {
      console.log(this.$refs.confirm.$data);
    }
  }
};
</script>

<style lang="scss">
</style>