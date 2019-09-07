<template>
  <div class="login-page p-all--15">
    <div class="login-form pt--100">
      <h1 class="text align--center">Вход</h1>
      <div class="form-group">
        <label class="form-label" for="userLoginInput">Name</label>
        <input
          class="form-input"
          type="text"
          id="userLoginInput"
          placeholder="Name"
          v-model="userLogin"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input class="form-input" type="password" id="password" placeholder="Password" />
      </div>
      <div class="mt--20 text align--center">
        <button class="btn btn-primary btn-lg" @click.prevent="login">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userLogin: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"])
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 35%;
  margin: 0 auto;
}
</style>