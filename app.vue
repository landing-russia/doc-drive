<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "ru",
  },
  bodyAttrs: {
    class: "bg-slate-100 dark:bg-slate-800 font-sans",
  },
})
const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation()
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <UiNavBar />
    <NuxtPage />
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</template>
