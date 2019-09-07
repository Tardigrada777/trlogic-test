<template>
  <div class="c-appbar">
    <div class="wrapper">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="navbar-brand mr-2 text size--32 weight--bold">Blog</router-link>
          <router-link to="/about" class="btn btn-link">Редактирование статей</router-link>
          <router-link to="/" class="btn btn-link">Главная</router-link>
        </section>
        <section class="navbar-section">
          <a href="#" @click.prevent="logout" class="btn btn-link">
            <i class="icon icon-2x icon-shutdown text size--16"></i> Выход
          </a>
        </section>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      console.log("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.c-appbar {
}
</style>