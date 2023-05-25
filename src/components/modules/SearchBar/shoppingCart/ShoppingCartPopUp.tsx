'use client';
import React, { forwardRef, useEffect } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { FiDollarSign } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { IWrappedComponent, withClickOutside } from '@utils/functions';
import classes from './shoppingCartPopUp.module.scss';
import { CartItem } from '@components/modules/SearchBar/shoppingCart/CartItem/CartItem';
import { $shoppingCart, getShoppingCartFx, setShoppingCart } from '@/context/shopping-cart';
import { $user } from '@/context/user';
import toast from 'react-hot-toast';

const ShoppingCartPopUp = forwardRef<HTMLDivElement, IWrappedComponent>(({ open, setOpen }, ref) => {

  const user = $user.getState();
  const shoppingCart = $shoppingCart.getState();
  const toggleOpenDropdown = () => setOpen(!open);
  const router = useRouter();


  useEffect(() => {
    if (user) {
      router.refresh();
      loadCartItems()
        .then(() => {
          router.refresh();
          loadCartItems();
        });
    }

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
              <ul>
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
                  <span className={classes.amount}>0<FiDollarSign /></span>
                </div>
                <div className={classes.checkoutBtn}>
                  <button onClick={() => router.push('/')} disabled={!shoppingCart.length}
                          className={shoppingCart.length <= 0 ? `${classes.btn} ${classes.disabled}` : classes.active}>
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