import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import { updateManufacturersFilter } from '@/context/filter';
import { IFilterCheckboxItem } from '@/types/catalog';
import classes from './filterItem.module.scss';

interface FilterItemProps {
  label: string;
  id: string;
  checked: boolean;
}

export const FilterItem = ({ label, checked, id }: FilterItemProps) => {

  const router = useRouter();

  const handleFilterChange = () => {
    updateManufacturersFilter({ checked: false, id } as IFilterCheckboxItem);
    router.refresh();
  };


  return (
    <div className={classes.filterItemWrapper}>
      <span>{label}</span>
      <RxCross2 onClick={handleFilterChange} className={classes.icon} />
    </div>
  );
};

