export interface IShoppingCartItem {
  id: number,
  userId: number,
  laptopId: number,
  name: string
  vendor_code: string,
  price: number,
  in_stock: number,
  manufacturer: string,
  image: string,
  count: number,
  totalPrice: number
}

export interface IAddToCart {
  username: string,
  laptopId: number
}

export interface IUpdateCartItemFx {
  url: string,
  payload: {
    total_price?: number,
    count?: number
  }
}