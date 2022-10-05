<script setup>
  const { data } = await useAsyncData(() => {
    return queryContent("/").find()
  })
  </script>
  
  <template>
    <div>
      <div>
        <pre>{{ data }}</pre>
      </div>
    </div>
  </template>
  