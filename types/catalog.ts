import { Event } from 'effector';

export interface IFilterCheckboxItem {
  title: string,
  checked: boolean,
  id: string
}

export interface IFilterManufacturerAccordionProps {
  manufacturersList: IFilterCheckboxItem[],
  title: string | false,
  setManufacturer: Event<IFilterCheckboxItem[]>
  updateManufacturer: Event<IFilterCheckboxItem>
  applyFilters: () => void
}