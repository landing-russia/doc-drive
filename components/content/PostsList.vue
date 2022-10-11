<script setup lang="ts">
const { data } = await useAsyncData(() => {
  return queryContent("/blog/").sort({ date: -1 }) // show latest articles first
  .where({ _partial: false, _path: { $ne: "/blog" } }) // exclude the Partial files
  .find()
})
</script>

<template>
  <div>
    <div v-for="post in data" :key="post._id">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply cursor-default no-underline;
}
</style>
