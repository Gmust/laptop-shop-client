import { createDomain } from 'effector';
import { IShoppingCartItem } from '@/types/cart';

const shoppingCart = createDomain();

export const setShoppingCart = shoppingCart.createEvent<IShoppingCartItem[]>();

export const $shoppingCart = shoppingCart.createStore<IShoppingCartItem[]>([] as IShoppingCartItem[])
  .on(setShoppingCart, (_, shoppingCart) => shoppingCart);