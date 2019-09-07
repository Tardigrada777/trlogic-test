<template>
  <div class="modal active" v-show="value" id="modal-id">
    <a class="modal-overlay" aria-label="Close" @click.prevent="close"></a>
    <div class="modal-container">
      <div class="modal-header">
        <a class="btn btn-clear float-right" aria-label="Close" @click.prevent="close"></a>
        <div class="modal-title h5">{{ title }}</div>
      </div>
      <div class="modal-body">
        <div class="content" v-if="article">
          <!-- content here -->
          {{ article.title }}
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
  computed: {},
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
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>