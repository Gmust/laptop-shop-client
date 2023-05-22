'use client';

import { ManufacturersBlock } from '@components/pages/CatalogPage/ManufacturersBlock/ManufacturersBlock';
import { AnimatePresence } from 'framer-motion';
import classes from './catalog.module.scss';
import { $laptops } from '@/context/laptops';
import { LaptopCard } from '@components/modules/LaptopCard/LaptopCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const Catalog = ({ rows, count }: ILaptopsResponse) => {

  const [laptopsToRender, setLaptopsToRender] = useState<ILaptop[]>(rows);
  const router = useRouter();

  const laptops = $laptops.getState();

  useEffect(() => {
    if (laptops.length > 0) {
      setLaptopsToRender(laptops);
      router.refresh();
    }
  }, [laptops]);

  return (
    <div className={classes.catalogWrapper}>
      <h2>Catalog</h2>

      <AnimatePresence>
        <ManufacturersBlock />
      </AnimatePresence>

      <div className={classes.catalogBottom}>
        <div>
          Filters
        </div>

        <ul className={classes.catalogList}>
          {laptopsToRender.length > 0 ? laptopsToRender.map((laptop) =>
              <li key={laptop.id}>
                <LaptopCard {...laptop} />
              </li>
            )
            :
            <div>
              Laptop list is empty...
            </div>
          }
        </ul>
      </div>

    </div>
  );
};
