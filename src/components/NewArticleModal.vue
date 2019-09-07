<template>
  <div class="modal active" v-show="value" id="modal-id">
    <a class="modal-overlay" aria-label="Close" @click.prevent="close"></a>
    <div class="modal-container">
      <div class="modal-header">
        <a class="btn btn-clear float-right" aria-label="Close" @click.prevent="close"></a>
        <div class="modal-title h5">Новая статья</div>
      </div>
      <div class="modal-body">
        <div class="content">
          <!-- content here -->
          New Article
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-error" @click="close">Отмена</button>
        <button class="btn btn-primary">Создать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: Boolean
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