import { uuid } from '@utils/functions/common';
import { manufacturers } from '@utils/constants/manufacturers';

export const createManufacturerCheckboxObj = (title: string) => ({
  title,
  checked: false,
  id: uuid()
});

export const checkboxManufacturers = manufacturers.map(createManufacturerCheckboxObj);
