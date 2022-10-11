<script setup lang="ts">
const props = defineProps({
  date: { type: String, required: true },
})
</script>

<template>
  <div class="text-xs text-slate-500">
    {{
      new Date(props.date).toLocaleDateString("ru", {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }}
  </div>
</template>
