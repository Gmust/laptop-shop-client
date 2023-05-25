import Image from 'next/image';
import Link from 'next/link';
import { $shoppingCart } from '@/context/shopping-cart';
import { BsCartCheck, BsCartPlus } from 'react-icons/bs';
import classes from './laptopCard.module.scss';
import { $user } from '@/context/user';
import { toggleCartItem } from '@utils/functions/toggleCartItem';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const LaptopCard = (laptop: ILaptop) => {

  const user = $user.getState();
  const shoppingCart = $shoppingCart.getState();
  const img = JSON.parse(laptop.images)[0];
  const router = useRouter();
  const isInShoppingCart = shoppingCart.some(cartItem => cartItem.id === laptop.id);

  const toggleToCart = () => {
    if (user) {
      toggleCartItem(user.username, laptop.id, isInShoppingCart);
    }else {
      toast.error('Log in to add to cart!')
    }
  }

  return (
    <div className={classes.cardWrapper}>
      <Image src={img} alt={'image'} width={250} height={180} style={{ 'borderRadius': '10px' }}
             className={classes.image} />
      <h4>{laptop.name} {laptop.manufacturer}</h4>
      <span className={classes.vendorCode}>Vendor code:{laptop.vendor_code}</span>
      <div className={classes.cardFooter}>
        <span className={classes.price}>Price: {laptop.price}$</span>
        {!isInShoppingCart ?
          <BsCartPlus className={classes.cartBtnStyle} onClick={() => {
            toggleToCart();
            router.refresh();
          }} />
          :
          <BsCartCheck className={classes.cartCheckedBtnStyle} onClick={() => {
            toggleToCart();
            router.refresh();
          }} />
        }
      </div>
    </div>
  );
};

