import Image from 'next/image';
import classes from './searchBar.module.scss';
import { SearchInput } from '@components/elements/Inputs/SearchInput/SearchInput';
import ShoppingCartPopUp from '@components/modules/SearchBar/shoppingCart/ShoppingCartPopUp';
import Link from 'next/link';
import { ROUTES } from '@utils/constants';

export const SearchBar = () => {
  return (
    <div className={classes.searchBarWrapper}>

      <Link href={ROUTES.MAIN_PAGE} className={classes.logoBlock}>
        <Image src={'/img/logo.svg'} alt={'logo'} width={60} height={60} />
        <h1>Shoptop</h1>
      </Link>

      <SearchInput />

      <ShoppingCartPopUp />

    </div>
  );
};

