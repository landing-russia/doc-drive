<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <p>isDark: {{ isDark }}</p>

  <button
    @click="toggleDark()"
    class="px-4 py-2 text-white bg-teal-500 rounded"
  >
    Toggle Dark Mode
  </button>
</template>
