<script setup lang="ts">
import { NuxtError } from 'nuxt/app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div class="mt-7 max-w-sm mx-auto text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Oops !</p>
    <p class="mt-7">{{ error.message }}</p>
  </div>
</template>

<style scoped></style>
