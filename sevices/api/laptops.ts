import instance from '@/sevices/axiosClient';

export const getAllLaptops = async ({ offset = 0, limit = 20 }: ILaptopsRequest) => {
  const { data } = await instance.get<ILaptopsResponse>(`/laptops?limit=${limit}&offset=${offset}`);
  return data;
};

export const getLaptopsBy = async ({ url }: { url: string }) => {
  const { data } = await instance.get<ILaptopsResponse>(`/laptops${url}`);
  return data
};
