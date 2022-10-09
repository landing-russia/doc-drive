<script setup>
const { data } = await useAsyncData(() => {
  return queryContent("/blog/").find()
})
</script>

<template>
  <div>
    <div v-for="post in data" :key="post._id">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
    <pre>{{ data }}</pre>
  </div>
</template>
