'use client';
import React, { forwardRef, useEffect } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { FiDollarSign } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { IWrappedComponent, withClickOutside } from '@utils/functions';
import { CartItem } from '@components/modules/SearchBar/shoppingCart/CartItem/CartItem';
import {
  $shoppingCart,
  $totalPrice,
  deleteAllFromCartFx,
  getShoppingCartFx,
  removeShoppingCartItem,
  setShoppingCart,
  setTotalPrice
} from '@/context/shopping-cart';
import { $user } from '@/context/user';
import toast from 'react-hot-toast';
import classes from './shoppingCartPopUp.module.scss';

const ShoppingCartPopUp = forwardRef<HTMLDivElement, IWrappedComponent>(({ open, setOpen }, ref) => {

  const user = $user.getState();
  const shoppingCart = $shoppingCart.getState();
  const totalPrice = $totalPrice.getState();
  const toggleOpenDropdown = () => setOpen(!open);
  const router = useRouter();


  useEffect(() => {
    if (user) {
      router.refresh();
      loadCartItems();
    }
  }, [user]);

  useEffect(() => {
    setTotalPrice(
      $shoppingCart.getState().reduce((defaultCount, item) => defaultCount + item.totalPrice, 0)
    );
    router.refresh();
    console.log($shoppingCart.getState());
  }, []);

  const loadCartItems = async () => {
    try {
      const cartItems = await getShoppingCartFx(+user.userId);
      setShoppingCart(cartItems);
      router.refresh();
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  return (
    <div className={classes.shoppingCart} ref={ref}>
      <button className={classes.shoppingCartBtn} onClick={toggleOpenDropdown}>
        {shoppingCart.length > 0 ?
          <div>{shoppingCart.length}</div> : null}
        <TiShoppingCart size='2em' />
      </button>


      <AnimatePresence>
        {open &&
          <motion.div initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className={classes.shoppingCartPopUp}
                      style={{ transformOrigin: 'top right' }}
          >
            <div className={classes.shoppingCartContent}>
              <h3>Shopping cart</h3>
              <ul className={classes.shoppingCartList}>
                {shoppingCart.length > 0 ?
                  <div>
                    {shoppingCart.map(item =>
                      <CartItem key={item.id} {...item} />
                    )}
                  </div>
                  :
                  <li className={classes.empty}>
                    There is nothing here
                  </li>
                }
              </ul>
              <div className={classes.shoppingCartFooter}>
                <div className={classes.total}>
                  <span>Total price:</span>
                  <span className={classes.amount}> {totalPrice} <FiDollarSign /></span>
                </div>
                <div className={classes.btns}>
                  <button className={shoppingCart.length <= 0 ? `${classes.removeBtn} ${classes.disabled}`
                    : `${classes.removeBtn} ${classes.active}`} onClick={() => {
                    deleteAllFromCartFx(+user.userId);
                    shoppingCart.forEach((item) => removeShoppingCartItem(item.laptopId));
                    router.refresh();
                  }}>
                    Clear all cart
                  </button>
                  <button onClick={() => router.push('/')} disabled={!shoppingCart.length}
                          className={shoppingCart.length <= 0 ? `${classes.checkoutBtn} ${classes.disabled}`
                            : `${classes.checkoutBtn} ${classes.active}`}>
                    Сheckout
                  </button>
                </div>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>
  );

});


ShoppingCartPopUp.displayName = 'ShoppingCartPopUp';


export default withClickOutside(ShoppingCartPopUp);