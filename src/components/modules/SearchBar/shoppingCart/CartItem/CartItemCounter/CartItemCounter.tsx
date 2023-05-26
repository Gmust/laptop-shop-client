import { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import classes from '@components/modules/SearchBar/shoppingCart/CartItem/cartItem.module.scss';
import toast from 'react-hot-toast';
import { updateCartItemFx, updateCurrentItemCount } from '@/context/shopping-cart';

interface CartItemCounter {
  totalCount: number,
  initialCount: number,
  laptopId: number,
  incPrice: VoidFunction,
  decPrice: VoidFunction
}

export const CartItemCounter = ({ totalCount, laptopId, incPrice, decPrice, initialCount }: CartItemCounter) => {

  const [count, setCount] = useState<number>(initialCount);
  const [disableIncrease, setDisableIncrease] = useState<boolean>(false);
  const [disableDecrease, setDisableDecrease] = useState<boolean>(false);

  useEffect(() => {
    if (count === 1) {
      setDisableDecrease(true);
    } else {
      setDisableDecrease(false);
    }

    if (count === totalCount) {
      setDisableIncrease(true);
    }
  }, [count, totalCount]);

  const inc = async () => {
    try {
      incPrice();
      setDisableIncrease(false);
      setCount(count + 1);
      const data = await updateCartItemFx({
        url: `/shopping-cart/count/${laptopId}`,
        payload: { count: count + 1 }
      });
      updateCurrentItemCount({ laptopId, count: data.count });
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  const dec = async () => {
    try {
      decPrice();
      setDisableDecrease(false);
      setCount(count - 1);
      const data = await updateCartItemFx({
        url: `/shopping-cart/count/${laptopId}`,
        payload: { count: count - 1 }
      });
      updateCurrentItemCount({ laptopId, count: data.count });
    } catch (e) {
      toast.error((e as Error).message);
    }
  };


  return (
    <div>
      <div className={classes.count}>
        <button disabled={disableDecrease} onClick={dec}>
          <AiOutlineMinus style={{ cursor: 'pointer' }} />
        </button>
        <span>{count}</span>
        <button disabled={disableIncrease} onClick={inc}>
          <AiOutlinePlus style={{ cursor: 'pointer' }} />
        </button>
      </div>
    </div>
  );
};

