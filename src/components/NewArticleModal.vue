<template>
  <div class="modal active" v-show="value">
    <a class="modal-overlay" aria-label="Close" @click.prevent="close"></a>
    <div class="modal-container">
      <div class="modal-header">
        <a class="btn btn-clear float-right" aria-label="Close" @click.prevent="close"></a>
        <div class="modal-title h5">Новая статья</div>
      </div>
      <div class="modal-body">
        <div class="content">
          <div class="new-article-form">
            <div class="form-group">
              <label class="form-label" for="article-title">Название</label>
              <input
                class="form-input"
                type="text"
                id="article-title"
                placeholder="Name"
                v-model="article.title"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="article-content">Текст</label>
              <textarea
                class="form-input"
                id="article-content"
                placeholder="Текст статьи"
                rows="15"
                v-model="article.content"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <Button color="error" size="sm" @click="close">Отмена</Button>
        <Button color="primary" size="sm" @click="create" class="mlf--10">Создать</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      article: {
        title: "Новая статья",
        content: "Содержимое новой статьи"
      }
    };
  },
  props: {
    value: Boolean
  },
  methods: {
    ...mapActions(["createArticle"]),
    close() {
      this.$emit("input", !this.value);
    },
    create() {
      this.createArticle(this.article).then(() => {
        this.close();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>