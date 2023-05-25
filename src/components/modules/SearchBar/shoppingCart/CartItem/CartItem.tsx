import classes from './cartItem.module.scss';
import { IShoppingCartItem } from '@/types/cart';
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';

export const CartItem = (item: IShoppingCartItem) => {
  return (
    <li className={classes.cartItemWrapper}>
      <div className={classes.cartItemTop}>
        <Link href={`/catalog/${item.id}`}>
          <Image src={item.image} alt={item.name} width={50} height={50} />
          <span>
          {item.name}
            {item.manufacturer}
        </span>
        </Link>
      </div>
      <div className={classes.cartItemBottom}>
        <div className={classes.count}>
          <AiOutlinePlus />
          {item.count}
          <AiOutlineMinus />
        </div>
        <div>
          {item.totalPrice}
        </div>
      </div>
      <button>
        Remove from cart
      </button>
    </li>
  );
};

