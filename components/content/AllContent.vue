<script setup lang="ts">
const { data } = await useAsyncData(() => {
  return queryContent("/draft").find()
})
</script>

<template>
  <div>
    <div v-for="post in data" :key="post._id">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </div>
</template>

