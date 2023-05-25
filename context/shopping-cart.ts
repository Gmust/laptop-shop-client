import { createDomain } from 'effector';
import { IAddToCart, IShoppingCartItem } from '@/types/cart';
import { addToCart, deleteAllFromCart, deleteFromCart, getCartItems } from '@/sevices/api/shopping-cart';

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

export const setShoppingCart = shoppingCart.createEvent<IShoppingCartItem[]>();
export const updateShoppingCart = shoppingCart.createEvent<IShoppingCartItem>();
export const removeShoppingCartItem = shoppingCart.createEvent<number>();

const remove = (cartItems: IShoppingCartItem[], laptopId: number) => cartItems.filter(item => item.laptopId !== laptopId);

export const $shoppingCart = shoppingCart.createStore<IShoppingCartItem[]>([] as IShoppingCartItem[])
  .on(setShoppingCart, (_, shoppingCart) => shoppingCart)
  .on(updateShoppingCart, (state, shoppingCart) => [...state, shoppingCart])
  .on(removeShoppingCartItem, (state, laptopId) => [...remove(state, laptopId)]);