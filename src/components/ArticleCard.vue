<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title h5">{{ article.title }}</div>
      <div class="card-subtitle text-gray">{{ formatedDate }}</div>
    </div>
    <div class="card-body">{{ contentPreview }}</div>
    <div class="card-footer" v-if="editable">
      <button class="btn btn-primary btn-sm mr--10" @click="$emit('edit-article')">
        <i class="icon icon-edit mr--5"></i>
        Редактировать
      </button>
      <button class="btn btn-error btn-sm" @click="$emit('delete-article')">
        <i class="icon icon-delete mr--5"></i>
        Удалить
      </button>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    article: {
      id: Number,
      title: String,
      date: String,
      content: String
    },
    editable: Boolean
  },
  data() {
    return {
      maxLength: 250
    };
  },
  computed: {
    formatedDate() {
      return moment(this.article.date).format("DD.MM.YY h:mm");
    },
    contentPreview() {
      if (this.article.content.length > this.maxLength) {
        const preview = `${this.article.content.slice(0, this.maxLength)}...`;
        return preview;
      }
      return this.article.content;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>