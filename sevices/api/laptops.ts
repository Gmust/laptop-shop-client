import instance from '@/sevices/axiosClient';

export const getAllLaptops = async ({ offset = 1, limit = 20, query = '' }: ILaptopsRequest & {
  query?: string | null
}) => {
  const { data } = await instance.get<ILaptopsResponse>(`/laptops?limit=${limit}&offset=${+offset || 1}&${query}`);
  return data;
};

export const getLaptopsBy = async ({ url }: { url: string }) => {
  const { data } = await instance.get<ILaptopsResponse>(`/laptops${url}`);
  return data;
};

export const getLaptopById = async (id: number) => {
  const { data } = await instance.get<ILaptop>(`/laptops/find/${id}`);
  return data;
};