import instance from '@/sevices/axiosClient';

export const getLaptops = async ({ offset = 0, limit = 20 }: ILaptopsRequest) => {
  const { data } = await instance.get<ILaptopsResponse>(`/laptops?limit=${limit}&offset=${offset}`);
  return data;
};