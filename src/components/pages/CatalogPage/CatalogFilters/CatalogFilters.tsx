'use client';

import classes from './catalogFilters.module.scss';
import { $manufacturers, setManufacturersFilter, updateManufacturersFilter } from '@/context/filter';
import { PriceRange } from '@components/elements/PriceRange/PriceRange';
import { useState } from 'react';
import {
  ManufacturersAccordion
} from '@components/pages/CatalogPage/CatalogFilters/ManufacturersAccordion/ManufacturersAccordion';
import { Accordion } from '@components/elements/Accordion/Accordion';

export const CatalogFilters = () => {

  const manufacturers = $manufacturers.getState();
  const [priceRange, setPriceRange] = useState<number[]>([1000, 1000000]);
  const [isPriceChanges, setIsPriceChanged] = useState<boolean>(false);

  return (
    <div className={classes.catalogFiltersWrapper}>
      <h3>Filters</h3>
      <div className={classes.divider}></div>
      <div>
        <ManufacturersAccordion manufacturersList={manufacturers} title={'Manufacturers'}
                                setManufacturer={setManufacturersFilter}
                                updateManufacturer={updateManufacturersFilter} />
      </div>

      <div>
        <Accordion title={'Price'}>
          <div>
            <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} setIsPriceChanged={setIsPriceChanged} />
          </div>
        </Accordion>
      </div>
    </div>
  );
};

