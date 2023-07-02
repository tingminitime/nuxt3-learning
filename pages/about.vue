<script setup>
// const { data } = await useFetch('/api/ninja?name=mario', {
//   method: 'POST',
//   body: { age: 30 },
// })

// const { data } = await useFetch('/api/ninja')
const { data } = await useFetch('/api/currency/TWD')
</script>

<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, facilis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, facilis!
    </p>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
