import instance from '@/sevices/axiosClient';
import { IAddToCart } from '@/types/cart';

export const getCartItems = async (id: number) => {
  const { data } = await instance.get(`/shopping-cart/${id}`);
  return data;
};

export const addToCart = async ({ username, laptopId }: IAddToCart) => {
  const { data } = await instance.post(`/shopping-cart/add`, { username, laptopId });
  return data;
};

export const deleteFromCart = async (id: number) => {
  const { data } = await instance.delete(`/shopping-cart/one/${id}`);
  return data;
};

export const deleteAllFromCart = async (id: number) => {
  const { data } = await instance.delete(`/shopping-cart/delete-all/${id}`);
  return data;
};