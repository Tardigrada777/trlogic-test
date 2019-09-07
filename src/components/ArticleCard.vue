<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title h5">{{ article.title }}</div>
      <div class="card-subtitle text-gray">{{ article.date }}</div>
    </div>
    <div class="card-body">{{ article.content }}</div>
    <div class="card-footer" v-if="editable">
      <button class="btn btn-primary mr--10">Редактировать</button>
      <button class="btn btn-error">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      id: Number,
      title: String,
      date: String,
      content: String
    },
    editable: Boolean
  }
};
</script>

<style lang="scss" scoped>
</style>