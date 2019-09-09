<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title h5">{{ article.title }}</div>
      <div class="card-subtitle text-gray">{{ formatedDate }}</div>
    </div>
    <div class="card-body">{{ contentPreview }}</div>
    <div class="card-footer" v-if="editable">
      <Button
        class="mr--10"
        color="primary"
        icon="edit"
        size="sm"
        @click="$emit('edit-article')"
      >Редактировать</Button>
      <Button
        class="mr--10"
        color="error"
        icon="delete"
        size="sm"
        @click="$emit('delete-article')"
      >Удалить</Button>
      <Button color="success" size="sm" @click="readArticle">Читать</Button>
    </div>
    <div class="card-footer" v-else>
      <Button color="success" size="sm" @click="readArticle">Читать</Button>
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
  },
  methods: {
    readArticle() {
      this.$router.push(`/article/${this.article.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>