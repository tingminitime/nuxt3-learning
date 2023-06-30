<script lang="ts" setup>
import type { Ref } from 'vue'
import type { Products } from 'products-types'

definePageMeta({
  layout: 'products',
})

// fetch the products
const { data: products }: { data: Ref<Products> } = await useFetch(
  'https://fakestoreapi.com/products'
)

useHead({
  title: 'Nuxt Dojo | Merch',
  meta: [{ name: 'description', content: 'Nuxt 3 Merch' }],
})
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :product="product"></ProductCard>
      </div>
    </div>
  </div>
</template>
