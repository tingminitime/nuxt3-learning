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
}
