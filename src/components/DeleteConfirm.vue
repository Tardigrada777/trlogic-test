<template>
  <div class="modal modal-sm active" v-show="value" id="modal-id">
    <a class="modal-overlay" aria-label="Close" @click.prevent="close"></a>
    <div class="modal-container">
      <div class="modal-header">
        <a class="btn btn-clear float-right" aria-label="Close" @click.prevent="close"></a>
        <div class="modal-title h5">⛔ Внимание!</div>
      </div>
      <div class="modal-body">
        <div
          class="content"
        >Данное действие невозможно будет отменить. Вы уверены, что хотите удалить эту статью?</div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-error" @click="close">Нет</button>
        <button class="btn btn-primary" @click="del">Да</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      articleID: null
    };
  },
  props: {
    value: Boolean
  },
  methods: {
    ...mapActions(["deleteArticle"]),
    close() {
      this.$emit("input", !this.value);
    },
    open(id) {
      this.$emit("input", !this.value);
      this.articleID = id;
    },
    del() {
      this.deleteArticle(this.articleID).then(() => {
        this.close();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-sm {
  width: 100%;
}
</style>