<script lang="ts" setup>
import type { Ref } from 'vue'
import type { Product } from 'products-types'

const { product } = defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="card text-center">
    <div class="flex-grow">
      <img
        class="thumb"
        :src="product.image"
        alt="product thumb"
      />
    </div>
    <p class="font-bold text-gray-500 m-4 truncate">
      {{ product.title }}
    </p>
    <NuxtLink
      class=""
      :to="`/products/${product.id}`"
    >
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
