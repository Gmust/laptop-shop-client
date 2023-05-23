import Image from 'next/image';
import Link from 'next/link';
import { $shoppingCart } from '@/context/shopping-cart';
import { BsCartCheck, BsCartPlus } from 'react-icons/bs';
import classes from './laptopCard.module.scss';

export const LaptopCard = (laptop: ILaptop) => {

  const shoppingCart = $shoppingCart.getState();
  const img = JSON.parse(laptop.images)[0];

  const isInShoppingCart = shoppingCart.some(cartItem => cartItem.id === laptop.id);

  return (
    <Link href={'#'} className={classes.cardWrapper}>
      <Image src={img} alt={'image'} width={250} height={180} style={{ 'borderRadius': '10px' }}
             className={classes.image} />
      <h4>{laptop.name} {laptop.manufacturer}</h4>
      <span className={classes.vendorCode}>Vendor code:{laptop.vendor_code}</span>
      <div className={classes.cardFooter}>
        <span className={classes.price}>Price: {laptop.price}$</span>
        {isInShoppingCart ?
          <BsCartPlus className={classes.cartBtnStyle} onClick={()=> {} } />
          :
          <BsCartCheck className={classes.cartCheckedBtnStyle} />
        }
      </div>
    </Link>
  );
};

