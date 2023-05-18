'use client';

import { forwardRef } from 'react';
import { CgProfile } from 'react-icons/cg';
import { SlLogout } from 'react-icons/sl';
import { AnimatePresence, motion } from 'framer-motion';
import { IWrappedComponent, withClickOutside } from '@utils/functions';
import classes from './profileDropdown.module.scss';

const ProfileDropdown = forwardRef<HTMLDivElement, IWrappedComponent>(({ open, setOpen }, ref) => {

  const toggleProfileDropdown = () => setOpen(!open);

  return (
    <div className={classes.profile} ref={ref}>
      <button className={classes.profileBtn} onClick={toggleProfileDropdown}>
        <span>
          <CgProfile color='white' size='2.5em' />
        </span>
      </button>

      <AnimatePresence>
        {open &&
          <motion.ul initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0 }}
                     className={classes.profileDropdown}
                     style={{ transformOrigin: 'right top' }}
          >
            <li className={classes.userInfo}>
              <span className={classes.username}>User</span>
              <span className={classes.email}>Useremail@gmail.com</span>
            </li>
            <hr />
            <li className={classes.logout}>
              <button>
                <span className={classes.text}>Log out</span>
                <span><SlLogout color='black' size='1.2em' /></span>
              </button>
            </li>
          </motion.ul>}
      </AnimatePresence>
    </div>
  );
});


ProfileDropdown.displayName = 'ProfileDropdown';


export default withClickOutside(ProfileDropdown);