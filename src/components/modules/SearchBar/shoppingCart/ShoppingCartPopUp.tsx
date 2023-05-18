'use client';
import React, { forwardRef } from 'react';
import { useStore } from 'effector-react';
import { TiShoppingCart } from 'react-icons/ti';
import { FiDollarSign } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { IWrappedComponent, withClickOutside } from '@utils/functions';
import { $shoppingCart } from '@/context/shopping-cart';
import classes from './shoppingCartPopUp.module.scss';

const ShoppingCartPopUp = forwardRef<HTMLDivElement, IWrappedComponent>(({ open, setOpen }, ref) => {

  const shoppingCart = useStore($shoppingCart);
  const toggleOpenDropdown = () => setOpen(!open);
  const router = useRouter();
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
                      <li key={item.id}>
                        {item.name}
                      </li>
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