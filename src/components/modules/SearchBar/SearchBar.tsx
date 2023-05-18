import Image from 'next/image';
import classes from './searchBar.module.scss';
import { SearchInput } from '@components/elements/Inputs/SearchInput/SearchInput';
import ShoppingCartPopUp from '@components/modules/SearchBar/shoppingCart/ShoppingCartPopUp';

export const SearchBar = () => {
  return (
    <div className={classes.searchBarWrapper}>

      <div className={classes.logoBlock}>
        <Image src={'/img/logo.svg'} alt={'logo'} width={60} height={60} />
        <h1>Shoptop</h1>
      </div>

      <SearchInput />

      <ShoppingCartPopUp />

    </div>
  );
};

