import toast from 'react-hot-toast';
import {
  addToShoppingCartFx,
  deleteFromCartFx,
  removeShoppingCartItem,
  updateShoppingCart
} from '@/context/shopping-cart';

export const toggleCartItem = async (username: string, laptopId: number, isInCart: boolean) => {
  try {
    if (isInCart) {
      await deleteFromCartFx(laptopId);
      removeShoppingCartItem(laptopId);
      return;
    }

    const data = await addToShoppingCartFx({ username, laptopId });
    updateShoppingCart(data);
  } catch (e) {
    toast.error((e as Error).message);
  }
};