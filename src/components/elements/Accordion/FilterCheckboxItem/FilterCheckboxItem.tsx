'use client';

import { Event } from 'effector';
import { IFilterCheckboxItem } from '@/types/catalog';
import { useRouter } from 'next/navigation';


interface FilterCheckboxItemProps {
  id: string,
  title: string,
  checked: boolean
  event: Event<IFilterCheckboxItem>
}

export const FilterCheckboxItem = ({ id, title, checked, event }: FilterCheckboxItemProps) => {

  const router = useRouter();

  const handleFilterChange = () => {
    event({ checked: !checked, id } as IFilterCheckboxItem);
    router.refresh();
  };

  return (
    <div>
      <input type='checkbox' id={id} name={title} checked={checked} onChange={handleFilterChange} />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

