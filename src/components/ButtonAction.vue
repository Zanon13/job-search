<script>
export default {
  name: 'ButtonAction',

  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },

  computed: {
    buttonClass() {
      return { [this.type]: true }
    }
  }
}
</script>

<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}
.login {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}
.search {
  @apply hover:bg-brand-blue-2 bg-transparent text-brand-blue-1 hover:text-white;
}
</style>
