<template>
  <div class="modal active" v-show="value" id="modal-id">
    <a class="modal-overlay" aria-label="Close" @click.prevent="close"></a>
    <div class="modal-container">
      <div class="modal-header">
        <a class="btn btn-clear float-right" aria-label="Close" @click.prevent="close"></a>
        <div class="modal-title h5">Подтверждение удаления</div>
      </div>
      <div class="modal-body">
        <div
          class="content"
        >Данное действие невозможно будет отменить. Вы уверены, что хотите удалить эту статью?</div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-error" @click="close">Нет</button>
        <button class="btn btn-primary">Да</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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