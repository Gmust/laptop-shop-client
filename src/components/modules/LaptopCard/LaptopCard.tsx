import Image from 'next/image';
import { $shoppingCart } from '@/context/shopping-cart';
import { BsCartCheck, BsCartPlus } from 'react-icons/bs';
import classes from './laptopCard.module.scss';
import { $user } from '@/context/user';
import { toggleCartItem } from '@utils/functions/toggleCartItem';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useState } from 'react';

export const LaptopCard = (laptop: ILaptop) => {

  const [isInShoppingCart, setIsInShoppingCart] = useState<boolean>(false);
  const user = $user.getState();
  const shoppingCart = $shoppingCart.getState();
  const img = JSON.parse(laptop.images)[0];
  const router = useRouter();


  const checkIsInShoppingCart = () => {
    setIsInShoppingCart(shoppingCart.some(cartItem => cartItem.id === laptop.id));
  };

  const toggleToCart = () => {
    if (user) {
      toggleCartItem(user.username, laptop.id, isInShoppingCart);
      router.refresh();
    } else {
      toast.error('Log in to add to cart!');
    }
  };

  return (
    <div className={classes.cardWrapper} onClick={() => router.push(`/catalog/${laptop.id}`)}>
      <Image src={img} alt={'image'} width={250} height={180} style={{ 'borderRadius': '10px' }}
             className={classes.image} />
      <h4>{laptop.name} {laptop.manufacturer}</h4>
      <span className={classes.vendorCode}>Vendor code:{laptop.vendor_code}</span>
      <div className={classes.cardFooter}>
        <span className={classes.price}>Price: {laptop.price}$</span>
        {!isInShoppingCart ?
          <BsCartPlus className={classes.cartBtnStyle} onClick={(e) => {
            e.stopPropagation();
            toggleToCart();
            checkIsInShoppingCart();
            router.refresh();
          }} />
          :
          <BsCartCheck className={classes.cartCheckedBtnStyle} onClick={(e) => {
            e.stopPropagation();
            toggleToCart();
            checkIsInShoppingCart();
            router.refresh();
          }} />
        }
      </div>
    </div>
  );
};

