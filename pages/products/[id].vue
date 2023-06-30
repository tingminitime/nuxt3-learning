<script lang="ts" setup>
import type { Ref } from 'vue'
import type { Product } from 'products-types'

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// fetch the product
const { data: product }: { data: Ref<Product> } = await useFetch(uri, {
  key: id as string,
})

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found !',
    fatal: true,
  })
}

definePageMeta({
  layout: 'products',
})
</script>

<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta
        name="description"
        :content="product.description"
      ></Meta>
    </Head>

    <ProductDetails :product="product"></ProductDetails>
  </div>
</template>
