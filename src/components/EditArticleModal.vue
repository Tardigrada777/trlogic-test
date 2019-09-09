<template>
  <div class="modal active" v-show="value" id="modal-id">
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
              <label class="form-label" for="userLoginInput">Название</label>
              <input
                class="form-input"
                type="text"
                id="userLoginInput"
                :value="article.title"
                placeholder="Название"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="input-example-3">Текст</label>
              <textarea
                class="form-input"
                id="input-example-3"
                placeholder="Текст статьи"
                rows="15"
                v-model="article.content"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-error" @click="close">Отмена</button>
        <button class="btn btn-success">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: Boolean,
    article: {
      id: Number,
      title: String,
      date: String,
      content: String
    }
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>