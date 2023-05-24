import {
  FilterCheckboxItem
} from '@components/pages/CatalogPage/CatalogFilters/ManufacturersAccordion/FilterCheckboxItem/FilterCheckboxItem';
import { IFilterManufacturerAccordionProps } from '@/types/catalog';
import { Accordion } from '@components/elements/Accordion/Accordion';
import { useRouter } from 'next/navigation';

export const ManufacturersAccordion = ({
                                         setManufacturer,
                                         updateManufacturer,
                                         manufacturersList
                                       }: IFilterManufacturerAccordionProps) => {


  const router = useRouter();
  const selectAll = () => {
    setManufacturer(manufacturersList.map(item => ({ ...item, checked: true })));
    router.refresh();
  };
  return (
    <Accordion title='Manufacturers'>
      <button onClick={selectAll}>Select All</button>
      <div>
        {manufacturersList.map((manuf) =>
          <FilterCheckboxItem id={manuf.id} title={manuf.title} checked={manuf.checked}
                              event={updateManufacturer} key={manuf.id} />
        )}
      </div>
    </Accordion>
  );
};

