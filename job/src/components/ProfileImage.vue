<template>
  <img class="h-8 w-8 rounded-3xl object-contain" :src="imageLink" alt="userprofileImage">
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: 'https://placehold.co/400',

    }
  },
}
</script>