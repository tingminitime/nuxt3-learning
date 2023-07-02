import type { CurrencyData } from 'products-types'

export default defineEventHandler(async event => {
  const { currencyApiKey } = useRuntimeConfig()
  console.log('New request: ' + getRequestURL(event))

  // handle query params
  // const { name } = getQuery(event)

  // handle post data
  // const { age } = await readBody(event)

  // api call with private key
  const { data: currencyData } = await $fetch<CurrencyData>(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyApiKey}`
  )

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`,
  //   success: true,
  // }
  return currencyData
})
