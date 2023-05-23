'use client';

import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IOption, SelectOptionType } from '@/types/common';
import { optionStyles } from '@components/elements/Inputs/SearchInput/inputStyle';
import { createSelectOption } from '@utils/functions';
import { setCheapLaptopsFirst, setExpensiveLaptopsFirst } from '@/context/laptops';
import { categoryOptions } from '@utils/functions/selectContent';
import useQueryParams from '@hooks/useQueryParams';
import { controlStyles, menuStyles, selectStyles } from './select';

export const FilterSelect = ({ laptops }: { laptops: ILaptop[] }) => {

  const router = useRouter();
  const [categoryOption, setCategoryOption] = useState<SelectOptionType>(null);
  const { setQueryParams, queryParams } = useQueryParams();

  const updateRouteParams = (first: string) => {
    setQueryParams({ first: first });
  };

  useEffect(() => {
    switch (queryParams.first) {
      case 'cheap': {
        setCheapLaptopsFirst(laptops);
        updateCategoryOption('Cheap at first');
        router.refresh();
        break;
      }
      case 'expensive': {
        setExpensiveLaptopsFirst(laptops);
        updateCategoryOption('Expensive at first');
        router.refresh();
        break;
      }
    }
  }, []);

  const handleCategoryOptionChange = (selectedOption: SelectOptionType) => {
    setCategoryOption(selectedOption);
    switch ((selectedOption as IOption).value) {
      case 'Cheap at first': {
        setCheapLaptopsFirst(laptops);
        updateRouteParams('cheap');
        router.refresh();
        break;
      }
      case 'Expensive at first': {
        setExpensiveLaptopsFirst(laptops);
        updateRouteParams('expensive');
        router.refresh();
        break;
      }
    }
  };

  const updateCategoryOption = (value: string) => {
    setCategoryOption({ value, label: value });
    console.log(categoryOption);
  };

  return (
    <Select
      placeholder='I am looking for...'
      value={categoryOption || createSelectOption('Cheap first')}
      onChange={handleCategoryOptionChange}
      styles={{
        ...selectStyles,
        control: (defaultStyles) => ({
          ...controlStyles(defaultStyles)
        }),
        input: (defaultStyles) => ({
          ...defaultStyles,
          color: '#222222'
        }),
        menu: (defaultStyles) => ({
          ...menuStyles(defaultStyles)
        }),
        option: (defaultStyles, state) => ({
          ...optionStyles(defaultStyles, state)
        })
      }}
      isSearchable={false}
      options={categoryOptions}
    />
  );
};

