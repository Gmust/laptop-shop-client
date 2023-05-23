import { Catalog } from '@components/pages/CatalogPage/Catalog';
import { allSettled, fork, serialize } from 'effector';
import classes from './catalogPageWrapper.module.scss';
import { setManufacturersFilter } from '@/context/filter';
import { EffectorNext } from '@effector/next';
import { getAllLaptopsFx, setLaptops } from '@/context/laptops';

const CatalogPage = async () => {
  const laptops = await getAllLaptopsFx({});
  const manufacturerScope = fork();
  const laptopScope = fork();

  await allSettled(setManufacturersFilter, { scope: manufacturerScope });
  await allSettled(setLaptops, { scope: laptopScope });

  const val1 = serialize(manufacturerScope);
  const val2 = serialize(laptopScope);

  return (
    <EffectorNext values={{ val1, val2 }}>
      <div className={classes.catalogPageWrapper}>
        <Catalog
          rows={laptops.rows} count={laptops.count}
        />
      </div>
    </EffectorNext>
  );
};

export default CatalogPage;
