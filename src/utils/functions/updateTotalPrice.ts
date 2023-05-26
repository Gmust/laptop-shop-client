import { updateCartItemFx, updateCartItemTotalPrice } from '@/context/shopping-cart';

export const updateTotalPrice = async (total_price: number, laptopId: number) => {
  const data = await updateCartItemFx({
    url: `shopping-cart/total-price/${laptopId}`,
    payload: { total_price }
  });

  updateCartItemTotalPrice({ laptopId, totalPrice: data.total_price });
};