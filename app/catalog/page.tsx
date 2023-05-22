import { Catalog } from '@components/pages/CatalogPage/Catalog';
import { allSettled, fork, serialize } from 'effector';
import classes from './catalogPageWrapper.module.scss';
import { $manufacturers, setManufacturersFilter } from '@/context/filter';
import { EffectorNext } from '@effector/next';
import { getAllLaptopsFx } from '@/context/laptops';

export async function generateStaticParams() {
  const scope = fork();

  // @ts-ignore
  await allSettled(setManufacturersFilter, { scope });

  const manufacturers = scope.getState($manufacturers);

  return manufacturers.map((name: string) => ({ name }));
}

const CatalogPage = async ({ params }: { params: { name: string } }) => {

  const { name } = params;
  const scope = fork();
  //@ts-ignore
  await allSettled(setManufacturersFilter, { scope, params: { name: name } });
  const values = serialize(scope);
  const laptops = await getAllLaptopsFx({ limit: 20, offset: 0 });

  return (
    <EffectorNext values={values}>
      <div className={classes.catalogPageWrapper}>
        <Catalog rows={laptops.rows} count={laptops.count} />
      </div>
    </EffectorNext>
  );
};

export default CatalogPage;
