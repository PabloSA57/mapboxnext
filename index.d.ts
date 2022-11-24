type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string

type TProductAttributes = {
  description: string
  shape: string
  hardiness: string
  taste: string
}

type TProduct = {
  id: TProductId
  name: string
  sku: string
  price: number
  image: Url
  attributes: TProductAttributes
}

type TCoin = {
  id: string,
  name: string,
  symbol: string,
  current_price: number,
  image: string,
}

type TAPIAVODetailResponse = TProduct

type TAPIAvoResponse = {
  length: number
  data: TProduct[]
  error?: string
}

