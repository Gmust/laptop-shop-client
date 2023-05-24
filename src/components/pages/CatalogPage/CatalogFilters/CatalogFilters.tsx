'use client';

import classes from './catalogFilters.module.scss';
import { $manufacturers, setManufacturersFilter, updateManufacturersFilter } from '@/context/filter';
import { Accordion } from '@components/elements/Accordion/Accordion';

export const CatalogFilters = () => {

  const manufacturers = $manufacturers.getState();

  return (
    <div className={classes.catalogFiltersWrapper}>
      <h3>Filters</h3>
      <div className={classes.divider}></div>
      <div>
        <Accordion manufacturersList={manufacturers} title={'Manufacturers'}
                   setManufacturer={setManufacturersFilter} updateManufacturer={updateManufacturersFilter} />
      </div>

      <div>
        <h4>Price</h4>
      </div>
    </div>
  );
};

