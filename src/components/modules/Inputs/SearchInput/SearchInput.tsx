'use client';

import Select from 'react-select';
import { useState } from 'react';
import { SelectOptionType } from '@/types/common';
import {
  controlStyles,
  inputStyles,
  menuStyles,
  optionStyles
} from '@components/modules/Inputs/SearchInput/inputStyle';

export const SearchInput = () => {

  const [searchOption, setSearchOption] = useState<SelectOptionType>(null);
  const [selected, setSelected] = useState(false);

  const handleSearchOptionChange = (selectedOption: SelectOptionType) => {
    setSearchOption(selectedOption);
  };

  return (
    /*    <div className={classes.searchInput}>
          <input className={classes.inputStyle} />
          <FiSearch className={classes.imgStyle} size={'1.5em'} />
        </div>*/
    <Select onChange={handleSearchOptionChange} menuPlacement='auto'
            menuPosition='fixed' value={searchOption} placeholder='I am looking for...'
            styles={{
              ...inputStyles,
              control: base => ({
                ...controlStyles(base)
              }),
              input: base => ({
                ...base
              }),
              menu: base => ({
                ...menuStyles(base)
              }),
              option: (base, props) => ({
                ...optionStyles(base, props)
              }),
              container: (base)=>({
                ...base,
                width: '65%'
              })
            }}
            isClearable={false}
            openMenuOnClick={false}
            options={[1, 5, 6, 7, 8].map(item => ({ value: item, label: item }))}
    />
  );
};

