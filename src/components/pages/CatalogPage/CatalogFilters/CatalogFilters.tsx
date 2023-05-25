'use client';

import { useState } from 'react';
import useQueryParams from '@hooks/useQueryParams';
import { $manufacturers, setManufacturersFilter, updateManufacturersFilter } from '@/context/filter';
import { PriceRange } from '@components/elements/PriceRange/PriceRange';
import { Accordion } from '@components/elements/Accordion/Accordion';
import {
  ManufacturersAccordion
} from '@components/pages/CatalogPage/CatalogFilters/ManufacturersAccordion/ManufacturersAccordion';
import classes from './catalogFilters.module.scss';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { getAllLaptopsFx, setFilteredLaptops } from '@/context/laptops';

export const CatalogFilters = () => {

  const manufacturers = $manufacturers.getState();
  const [priceRange, setPriceRange] = useState<number[]>([1000, 1000000]);
  const [isPriceChanged, setIsPriceChanged] = useState<boolean>(false);
  const router = useRouter();
  const { setQueryParams, queryParams } = useQueryParams();

  const applyFilters = async () => {
    try {
      const priceFrom = priceRange[0];
      const priceTo = priceRange[1];
      const priceQuery = isPriceChanged ? `&priceFrom=${priceFrom}&priceTo=${priceTo}` : null;
      const laptops = $manufacturers.getState().filter(item => item.checked).map(item => item.title);
      const encodedLaptopQuery = encodeURIComponent(JSON.stringify(laptops));
      const laptopsQuery = `laptops=${encodedLaptopQuery}`;
      if (laptops.length && isPriceChanged) {
        setQueryParams({ priceQuery: priceQuery, laptopsQuery: laptopsQuery });
        const data = await getAllLaptopsFx({ offset: 1, query: `${priceQuery}${laptopsQuery}` });
        setFilteredLaptops(data.rows);
        return;
      }

      if (isPriceChanged) {
        setQueryParams({ priceQuery: priceQuery });
        const data = await getAllLaptopsFx({ offset: 1, query: `${priceQuery}` });
        console.log(data.rows);
        setFilteredLaptops(data.rows);
        return;
      }

      if (laptops.length) {
        setQueryParams({ laptopsQuery: laptopsQuery });
        const data = await getAllLaptopsFx({ offset: 1, query: `${laptopsQuery}` });
        console.log(data);
        setFilteredLaptops(data.rows);
        return;
      }
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className={classes.catalogFiltersWrapper}>
      <h3>Filters</h3>
      <div className={classes.divider}></div>
      <div>
        <ManufacturersAccordion manufacturersList={manufacturers} title={'Manufacturers'}
                                setManufacturer={setManufacturersFilter} applyFilters={applyFilters}
                                updateManufacturer={updateManufacturersFilter} />
      </div>

      <div>
        <Accordion title={'Price'}>
          <div>
            <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} setIsPriceChanged={setIsPriceChanged}
                        applyFilters={applyFilters} />
          </div>
        </Accordion>
      </div>
    </div>
  );
};

