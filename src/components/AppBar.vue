<template>
  <div class="c-appbar">
    <div class="wrapper">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="navbar-brand mr-2 text size--32 weight--bold">Blog</router-link>

          <router-link
            to="/articlesEdit"
            class="btn btn-link"
            v-if="isUserAuth && !isArticleEditPage"
          >Редактирование статей</router-link>

          <router-link to="/" class="btn btn-link" v-if="$route.name == 'articlesEdit'">Главная</router-link>
        </section>
        <section class="navbar-section">
          <a href="#" v-if="isUserAuth" @click.prevent="logout" class="btn btn-link">
            <i class="icon icon-shutdown text size--16 mr--5"></i> Выйти
          </a>
          <a href="#" v-else @click.prevent="$router.push('/login')" class="btn btn-link">
            <i class="icon icon-people text size--16 mr--5"></i> Войти
          </a>
        </section>
      </header>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isUserAuth"]),
    isArticleEditPage() {
      return this.$route.name === "articlesEdit";
    }
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>

<style lang="scss" scoped>
.c-appbar {
}
</style>

vbase