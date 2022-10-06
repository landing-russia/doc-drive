<script setup>
const { next } = useContent()
</script>

<template>
  <div class="prose lg:prose-lg max-w-prose md:max-w-2xl lg:max-w-3xl mx-auto px-4">
    <slot />
  </div>
</template>
