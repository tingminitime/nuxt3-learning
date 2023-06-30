<script setup lang="ts">
const props = defineProps({
  error: Object,
})

// const statusCode = props.error?.statusCode || 500

// if (statusCode === 404) {
//   clearError({ redirect: '/404' })
// }

function clearErrorHandler() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error?.statusCode }}</p>
    <p class="mt-7 text-6xl">Oops !</p>
    <p class="mt-7">{{ error?.message }}</p>
    <button
      type="button"
      class="btn my-7"
      @click="clearErrorHandler"
    >
      Go Home
    </button>
  </div>
</template>

<style scoped></style>
