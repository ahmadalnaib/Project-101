<template>
  <button role="button" :class="{primary:primary}">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text'],
  data() {
    return {
      primary: true,
    }
  },
}
</script>

<style scoped>
  @reference "tailwindcss";
button {
  @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply border-0 bg-indigo-400  text-white hover:shadow-indigo-600;
}

</style>
