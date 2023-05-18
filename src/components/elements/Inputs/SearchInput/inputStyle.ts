import { CSSObjectWithLabel, GroupBase, OptionProps, StylesConfig } from 'react-select';
import { IOption } from '@/types/common';

export const controlStyles = (base: CSSObjectWithLabel) => ({
  ...base,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: '1px solid #9E9E9E',
  height: '40px',
  boxShadow: 'none',
  borderRadius: '4px',
  '&:hover': {
    borderColor: '#9E9E9E'
  },
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0
});


export const menuStyles = (
  defaultStyles: CSSObjectWithLabel
) => ({
  ...defaultStyles,
  boxShadow: '0 4px 20px rgb(0 0 0 / 7%)',
  borderRadius: '4px',
  height: 'auto',
  overflow: 'hidden',
  backgroundColor: '#f2f2f2f2',
  width: 'calc(100% + 40px)',
  minHeight: 30
});

export const optionStyles = (
  defaultStyles: CSSObjectWithLabel,
  state: OptionProps<IOption, boolean, GroupBase<IOption>>
) => {
  const backgroundHoverForLightMode = state.isSelected
    ? state.isSelected
      ? '#9e9e9e'
      : '#f2f2f2'
    : state.isSelected
      ? '#f2f2f2'
      : '#9e9e9e';


  const colorHoverForLightMode = state.isSelected
    ? state.isSelected
      ? '#f2f2f2'
      : '#9e9e9e'
    : state.isSelected
      ? '#9e9e9e'
      : '#f2f2f2';

  return {
    ...defaultStyles,
    cursor: 'pointer',
    padding: '6px 12px',
    margin: 0,
    '&:hover': {
      backgroundColor: backgroundHoverForLightMode,
      color: colorHoverForLightMode
    },
    backgroundColor:
      state.isSelected
        ? '#2d2d2d'
        : '#f2f2f2',
    color:
      state.isSelected
        ? '#f2f2f2'
        : '#222222'
  };
};

export const inputStyles: StylesConfig<IOption, boolean, GroupBase<IOption>> = {
  indicatorSeparator: () => ({
    border: 'none'
  }),
  dropdownIndicator: () => ({
    display: 'none'
  }),
  menuList: (defaultStyles) => ({
    ...defaultStyles,
    paddingTop: 0,
    paddingBottom: 0,
    minHeight: 30,
    '&::-webkit-scrollbar': {
      width: '8px'
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#454545',
      borderRadius: '3px'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'grey'
    }
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: '#b9babb'
  })
};

