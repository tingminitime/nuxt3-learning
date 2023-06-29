<script lang="ts" setup>
import type { Ref } from 'vue'
import type { Product } from 'products-types'

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// fetch the product
const { data: product }: { data: Ref<Product> } = await useFetch(uri, {
  key: id as string,
})

definePageMeta({
  layout: 'products',
})
</script>

<template>
  <div>
    <ProductDetails :product="product"></ProductDetails>
  </div>
</template>
