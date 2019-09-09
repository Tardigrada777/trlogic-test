<template>
  <button class="btn" :class="classProps" @click="$emit('click')">
    <i class="icon mr--5" :class="iconProps" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "lg"
    },
    icon: String
  },
  computed: {
    classProps() {
      return {
        "btn-success": this.color === "success",
        "btn-primary": this.color === "primary",
        "btn-error": this.color === "error",
        "btn-sm": this.size === "sm"
      };
    },
    iconProps() {
      return {
        "icon-delete": this.icon === "delete",
        "icon-edit": this.icon === "edit",
        "icon-plus": this.icon === "plus"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>