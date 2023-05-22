'use client';

import Select from 'react-select';
import { useState } from 'react';
import { SelectOptionType } from '@/types/common';
import { optionStyles } from '@components/elements/Inputs/SearchInput/inputStyle';
import { createSelectOption } from '@utils/functions';
import { categoryOptions } from '@utils/functions/selectContent';
import { controlStyles, menuStyles, selectStyles } from './select';

export const FilterSelect = () => {

  const [categoryOption, setCategoryOption] = useState<SelectOptionType>(null);

  const handleCategoryOptionChange = (selectedOption: SelectOptionType) => {
    setCategoryOption(categoryOption);
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

