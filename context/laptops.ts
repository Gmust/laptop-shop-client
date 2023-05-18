import { createDomain } from 'effector';
import { getLaptops } from '@/sevices/api/laptops';

const laptops = createDomain();


export const getLaptopsFx = laptops.createEffect(async ({ limit, offset }: ILaptopsRequest) => {
  const res = await getLaptops({ offset, limit });
  setLaptops(res.rows);
  setAmount(res.count);
  setManufacturers(res.rows);
});


const setLaptops = laptops.createEvent<ILaptop[]>();
const setAmount = laptops.createEvent<number>();
const setManufacturers = laptops.createEvent<ILaptop[]>();

const $laptops = laptops.createStore<ILaptop[]>([] as ILaptop[])
  .on(setLaptops, (_, state) => state);

const $goodsAmount = laptops.createStore<number>(0)
  .on(setAmount, (_, state) => state);

const $manufacturers = laptops.createStore<IManufacturer[]>([] as IManufacturer[])
  .on(setManufacturers, (_, state) => {
    const manufacturers = state.map((laptop) => ({
      name: laptop.manufacturer,
      icon: `Si${laptop.manufacturer}`
    }));
    return manufacturers;
  });