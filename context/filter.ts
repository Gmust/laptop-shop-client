import { createDomain } from 'effector';
import { IFilterCheckboxItem } from '@/types/catalog';
import { checkboxManufacturers } from '@utils/functions/createManufacturerCheckboxObj';


const filterBlock = createDomain();


export const setManufacturersFilter = filterBlock.createEvent<IFilterCheckboxItem[]>();
export const updateManufacturersFilter = filterBlock.createEvent<IFilterCheckboxItem>();
export const clearFilters = filterBlock.createEvent();


const updateManufacturer = (manufacturers: IFilterCheckboxItem[], id: string, payload: Partial<IFilterCheckboxItem>) =>
  manufacturers.map(manuf => {
    if (manuf.id === id) {
      return { ...manuf, ...payload };
    } else {
      return manuf;
    }
  });

export const $manufacturers =
  filterBlock.createStore<IFilterCheckboxItem[]>(checkboxManufacturers as IFilterCheckboxItem[])
    .on(setManufacturersFilter, (_, laptops) => laptops)
    .on(updateManufacturersFilter, (state, payload) =>
      [...updateManufacturer(state, payload.id, { checked: payload.checked })]
    )
    .reset(clearFilters);