'use client';

import { forwardRef } from 'react';
import { CgProfile } from 'react-icons/cg';
import { SlLogout } from 'react-icons/sl';
import { AnimatePresence, motion } from 'framer-motion';
import { IWrappedComponent, withClickOutside } from '@utils/functions';
import { logoutFx } from '@/sevices/api/auth';
import classes from './profileDropdown.module.scss';
import { $user, setUser } from '@/context/user';
import { useRouter } from 'next/navigation';

const ProfileDropdown = forwardRef<HTMLDivElement, IWrappedComponent>(({ open, setOpen }, ref) => {

  const router = useRouter();
  const toggleProfileDropdown = () => setOpen(!open);
  const user = $user.getState();

  const logoutUser = async () => {
    setUser({ userId: '', email: '', username: '' });
    await logoutFx('/users/logout');
    router.refresh();
  };

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
              <span className={classes.username}>{user.username}</span>
              <span className={classes.email}>{user.email}</span>
            </li>
            <hr />
            <li className={classes.logout}>
              <button onClick={logoutUser}>
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