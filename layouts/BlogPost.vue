<script setup>
const { next } = useContent()
</script>

<template>
  <div class="max-w-prose mx-auto">
    <div class="prose">
      <slot />
    </div>
  </div>
</template>
