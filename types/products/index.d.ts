declare module 'products-types' {
  type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }

  type Products = Product[]

  type CurrencyData = {
    meta: {
      last_updated_at: string
    }
    data: {
      [key: string]: {
        code: string
        value: number
      }
    }
  }
}
