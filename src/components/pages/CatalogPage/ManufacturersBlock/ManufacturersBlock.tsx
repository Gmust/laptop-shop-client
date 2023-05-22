'use client';

import { motion } from 'framer-motion';
import { $manufacturers, clearFilters, setManufacturersFilter } from '@/context/filter';
import classes from './manufacturersBlock.module.scss';
import { FilterItem } from '@components/elements/misc/FilterItem/FilterItem';
import { Button } from '@components/elements/Buttons/Btn1/Button';
import { useRouter } from 'next/navigation';
import { FilterSelect } from '@components/elements/Inputs/FiltersSelect/FilterSelect';

export const ManufacturersBlock = () => {

  const manufacturers = $manufacturers.getState();
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.manufacturersBlock}
    >
      <h3>Laptops manufacturers:</h3>
      <button onClick={() => {
        setManufacturersFilter('test');
        router.refresh();
      }}>test
      </button>
      <div className={classes.laptopsManufacturerFilter}>
        {manufacturers ? manufacturers.map((name: string) => <FilterItem label={name} />)
          : null}
      </div>
      <div className={classes.filterBlockControls}>
        <Button func={() => {
          clearFilters();
          router.refresh();
        }}>Clear all filter</Button>
        <FilterSelect />
      </div>
    </motion.div>
  );
};

