import { createDomain } from 'effector';


const filterBlock = createDomain();


export const setManufacturersFilter = filterBlock.createEvent<string>();
export const clearFilters = filterBlock.createEvent()

export const $manufacturers = filterBlock.createStore<any>([])
  .on(setManufacturersFilter, (manufArr, state) => {
    return [...manufArr, state];
  })
  .reset(clearFilters);