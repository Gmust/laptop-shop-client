import { createDomain } from 'effector';
import { IAddToCart, IShoppingCartItem, IUpdateCartItemFx } from '@/types/cart';
import {
  addToCart,
  deleteAllFromCart,
  deleteFromCart,
  getCartItems,
  updateCartItem
} from '@/sevices/api/shopping-cart';

const shoppingCart = createDomain();


export const getShoppingCartFx = shoppingCart.createEffect(async (id: number) => {
  return getCartItems(id);
});

export const addToShoppingCartFx = shoppingCart.createEffect(async ({ username, laptopId }: IAddToCart) => {
  return addToCart({ username, laptopId });
});

export const deleteFromCartFx = shoppingCart.createEffect(async (laptopId: number) => {
  return deleteFromCart(laptopId);
});

export const deleteAllFromCartFx = shoppingCart.createEffect(async (id: number) => {
  return deleteAllFromCart(id);
});

export const updateCartItemFx = shoppingCart.createEffect(async ({ url, payload }: IUpdateCartItemFx) => {
  return updateCartItem({ url, payload });
});

export const setShoppingCart = shoppingCart.createEvent<IShoppingCartItem[]>();
export const updateShoppingCart = shoppingCart.createEvent<IShoppingCartItem>();
export const removeShoppingCartItem = shoppingCart.createEvent<number>();
export const updateCartItemTotalPrice = shoppingCart.createEvent<{ laptopId: number, totalPrice: number }>();
export const updateCurrentItemCount = shoppingCart.createEvent<{ laptopId: number, count: number }>();
export const setTotalPrice = shoppingCart.createEvent<number>();

const remove = (cartItems: IShoppingCartItem[], laptopId: number) => cartItems.filter(item => item.laptopId !== laptopId);
const updateTotalPrice = (cartItems: IShoppingCartItem[], laptopId: number, total_price: number) =>
  cartItems.map((item) => {
    if (item.laptopId === laptopId) {
      return { ...item, total_price };
    }
    return item;
  });


const updateCartTotal = (cartItems: IShoppingCartItem[], laptopId: number, total_count: number) =>
  cartItems.map((item) => {
    if (item.laptopId === laptopId) {
      return { ...item, total_count };
    }
    return item;
  });


export const $shoppingCart = shoppingCart.createStore<IShoppingCartItem[]>([] as IShoppingCartItem[])
  .on(setShoppingCart, (_, shoppingCart) => shoppingCart)
  .on(updateShoppingCart, (state, shoppingCart) => [...state, shoppingCart])
  .on(removeShoppingCartItem, (state, laptopId) => [...remove(state, laptopId)])
  .on(updateCartItemTotalPrice, (state, {
    laptopId,
    totalPrice
  }) => [...updateTotalPrice(state, laptopId, totalPrice)])
  .on(updateCurrentItemCount, (state, {
    laptopId,
    count
  }) => [...updateCartTotal(state, laptopId, count)]);


export const $totalPrice = shoppingCart.createStore<number>(0)
  .on(setTotalPrice, (_, val) => val);