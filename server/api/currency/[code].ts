import type { CurrencyData } from 'products-types'

export default defineEventHandler(async event => {
  const { code } = event.context.params as { code: string }
  const { currencyApiKey } = useRuntimeConfig()

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyApiKey}`

  const { data } = await $fetch<CurrencyData>(uri)

  return data
})
