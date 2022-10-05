<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "ru",
  },
  bodyAttrs: {
    class: "bg-slate-100 font-sans",
  },
})
const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation()
})
</script>

<template>
  <div>
    <UiNavBar />
    <NuxtPage />
  </div>
</template>
