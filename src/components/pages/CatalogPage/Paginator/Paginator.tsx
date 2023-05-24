'use client';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';
import { getAllLaptopsFx } from '@/context/laptops';
import useQueryParams from '@hooks/useQueryParams';
import classes from './paginator.module.scss';
import { useEffect } from 'react';

export const Paginator = ({ count }: { count: number }) => {

  const router = useRouter();
  const { setQueryParams, queryParams } = useQueryParams();

  const savePaginationParams = (offset: string) => {
    setQueryParams({ offset: offset });
    console.log(queryParams);
  };

  useEffect(() => {
    const loadLaptops = async () => {
      await getAllLaptopsFx({ offset: +queryParams.offset });
    };
    loadLaptops();
  }, []);

  return <ReactPaginate
    containerClassName={classes.container}
    pageClassName={classes.page}
    pageLinkClassName={classes.link}
    previousClassName={classes.prev}
    breakClassName={classes.break}
    breakLinkClassName={classes.breakLink}
    nextClassName={classes.next}
    breakLabel='...'
    pageCount={count / 20}
    forcePage={+queryParams.offset || 1}
    onPageChange={async (e) => {
      await getAllLaptopsFx({ offset: e.selected });
      savePaginationParams((e.selected).toString());
      router.refresh();
    }}
  />;
};

