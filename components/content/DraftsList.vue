<script setup lang="ts">
const { data } = await useAsyncData(() => {
  return queryContent("/drafts/")
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false, _path: { $ne: "/drafts" } }) // exclude the Partial files
    .find()
})
</script>

<template>
  <div class="space-y-8">
    <div v-for="post in data" :key="post._id">
      <div class="text-xs text-slate-500">
        {{
          new Date(post.date).toLocaleDateString("ru", {
            // weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </div>
      <NuxtLink :to="post._path" class="leading-3">{{ post.title }}</NuxtLink>
      <div class="mt-2 text-sm text-slate-400">{{post.description}}</div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply cursor-default no-underline;
}
</style>
