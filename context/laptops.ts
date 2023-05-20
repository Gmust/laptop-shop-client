import { createDomain } from 'effector';
import { getAllLaptops, getLaptopsBy } from '@/sevices/api/laptops';
import toast from 'react-hot-toast';

const laptops = createDomain();


export const getAllLaptopsFx = laptops.createEffect(async ({ limit, offset }: ILaptopsRequest) => {
  const res = await getAllLaptops({ offset, limit });
  setLaptops(res.rows);
  setAmount(res.count);
  return res;
});

export const getLaptopsByFx = laptops.createEffect(async ({ url }: { url: string }) => {
  try {
    const data = await getLaptopsBy({ url });
    if (url === '/new') {
      setNew(data.rows);
    }
    if (url === '/bestsellers') {
      setBestsellers(data.rows);
    }

    return data;
  } catch (e) {
    toast.error((e as Error).message);
  }
});

const setLaptops = laptops.createEvent<ILaptop[]>();
const setAmount = laptops.createEvent<number>();
const setNew = laptops.createEvent<ILaptop[]>();
const setBestsellers = laptops.createEvent<ILaptop[]>();

export const newLaptops = laptops.createStore<ILaptop[]>([])
  .on(setNew, (_, state) => state);

export const bestsellersLaptops = laptops.createStore<ILaptop[]>([])
  .on(setBestsellers, (_, state) => state);

export const $laptops = laptops.createStore<ILaptop[]>([] as ILaptop[])
  .on(setLaptops, (_, state) => state);

export const $goodsAmount = laptops.createStore<number>(0)
  .on(setAmount, (_, state) => state);