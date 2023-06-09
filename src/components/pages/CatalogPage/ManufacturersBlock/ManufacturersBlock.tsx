'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { $manufacturers, clearFilters } from '@/context/filter';
import { Button } from '@components/elements/Buttons/Btn1/Button';
import { FilterSelect } from '@components/elements/Inputs/FiltersSelect/FilterSelect';
import { FilterItem } from '@components/elements/misc/FilterItem/FilterItem';
import classes from './manufacturersBlock.module.scss';
import useQueryParams from '@hooks/useQueryParams';


export const ManufacturersBlock = ({ laptops }: { laptops: ILaptop[] }) => {

  const { setQueryParams, queryParams } = useQueryParams();
  const router = useRouter();
  const manufacturers = $manufacturers.getState();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.manufacturersBlock}
    >
      <h3>Laptops manufacturers:</h3>
      <div className={classes.laptopsManufacturerFilter}>
        {manufacturers && manufacturers.map(({ id, title, checked }: any) => (
          checked && <FilterItem key={id} label={title} id={id} checked={checked} />
        ))}
      </div>
      <div className={classes.filterBlockControls}>
        <Button func={() => {
          clearFilters();
          setQueryParams({
            priceQuery: null,
            laptopsQuery: null,
            first: null
          });
          router.refresh();
        }}>Clear all filter</Button>
        <FilterSelect laptops={laptops} />
      </div>
    </motion.div>
  );
};

