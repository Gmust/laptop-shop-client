import { RxCross2 } from 'react-icons/rx';
import classes from './filterItem.module.scss';

interface FilterItemProps {
  label: string;
}

export const FilterItem = ({ label }: FilterItemProps) => {
  return (
    <div className={classes.filterItemWrapper}>
      <span>{label}</span>
      <RxCross2 />
    </div>
  );
};

