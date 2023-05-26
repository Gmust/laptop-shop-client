'use client';

import classes from './cartItem.module.scss';
import { IShoppingCartItem } from '@/types/cart';
import Image from 'next/image';
import Link from 'next/link';
import { deleteFromCartFx, removeShoppingCartItem, updateCartItemFx } from '@/context/shopping-cart';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CartItemCounter } from '@components/modules/SearchBar/shoppingCart/CartItem/CartItemCounter/CartItemCounter';
import { updateTotalPrice } from '@utils/functions/updateTotalPrice';

export const CartItem = (item: IShoppingCartItem) => {
  const [price, setPrice] = useState(item.price);
  const router = useRouter();

  useEffect(() => {
    setPrice(price * item.count);
  }, []);

  useEffect(() => {
    updateTotalPrice(price, item.laptopId)
    router.refresh();
  }, [price]);
  const incPrice = () => {
    setPrice(price + item.price);
  };
  const decPrice = () => {
    setPrice(price - item.price);
  };
  const deleteFromCart = () => {
    deleteFromCartFx(item.laptopId);
    removeShoppingCartItem(item.laptopId);
    router.refresh();
  };

  return (
    <li className={classes.cartItemWrapper}>
      <Link href={`/catalog/${item.id}`} className={classes.cartItemTop}>
        <Image src={item.image} alt={item.name} width={100} height={100} style={{ borderRadius: '10px' }} />
        <span>{item.name} <br /> {item.manufacturer}</span>
      </Link>
      <div className={classes.cartItemBottom}>
        <CartItemCounter totalCount={item.in_stock} initialCount={item.count} laptopId={item.laptopId}
                         incPrice={incPrice} decPrice={decPrice} />
        <span>
          {item.totalPrice} $
        </span>
      </div>
      <button className={classes.removeBtn} onClick={deleteFromCart}>
        Remove from cart
      </button>
    </li>
  );
};

