<script setup lang="ts">
import { RouterView } from 'vue-router'
import { themeChange } from 'theme-change'
import { onMounted } from 'vue'

onMounted(() => {
  themeChange()
})
</script>

<template>
  <div class="container mx-auto">
    <RouterView />
  </div>
</template>
