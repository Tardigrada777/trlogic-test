<template>
  <div class="modal active" v-show="value">
    <a class="modal-overlay" aria-label="Close" @click.prevent="close"></a>
    <div class="modal-container">
      <div class="modal-header">
        <a class="btn btn-clear float-right" aria-label="Close" @click.prevent="close"></a>
        <div class="modal-title h5">Редактировать статью</div>
      </div>
      <div class="modal-body">
        <div class="content" v-if="article">
          <div class="new-article-form">
            <div class="form-group">
              <label class="form-label" for="article-title">Название</label>
              <input
                class="form-input"
                type="text"
                id="article-title"
                v-model="editedArticle.title"
                placeholder="Название"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="article-content">Текст</label>
              <textarea
                class="form-input"
                id="article-content"
                placeholder="Текст статьи"
                rows="15"
                v-model="editedArticle.content"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <Button color="error" size="sm" @click="close">Отмена</Button>
        <Button color="success" size="sm" @click="edit" class="mlf--10">Сохранить</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    value: Boolean,
    article: {
      id: Number,
      title: String,
      date: String,
      content: String
    }
  },
  data() {
    return {
      editedArticle: {}
    };
  },
  methods: {
    ...mapActions(["editArticle"]),
    close() {
      this.$emit("input", !this.value);
    },
    edit() {
      this.editArticle(this.editedArticle).then(() => {
        this.close();
      });
    }
  },
  beforeUpdate() {
    this.editedArticle = this.article;
  }
};
</script>

<style lang="scss" scoped>
</style>