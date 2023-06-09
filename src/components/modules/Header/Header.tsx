'use client';

import { FcAbout } from 'react-icons/fc';
import { MdOutlineContactSupport } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { useRouter } from 'next/navigation';
import { CiShop } from 'react-icons/ci';
import ProfileDropdown from '@components/modules/Header/ProfileDropdown/ProfileDropdown';
import { $user, setUser } from '@/context/user';
import { ROUTES } from '@utils/constants/routes';
import { LocationBtn } from './LocationBtn/LocationBtn';
import { NavbarItem } from './NavbarItem/NavbarItem';
import classes from './header.module.scss';
import { useEffect } from 'react';
import { checkUserAuthFx } from '@/sevices/api/auth';

export const Header = () => {
  const router = useRouter();
  const user = $user.getState();
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const data =
      await checkUserAuthFx('/users/login-check');
    setUser(data);
    router.refresh();
  };

  return (
    <header className={classes.header}>

      <>
        <LocationBtn />
      </>

      <nav>
        <ul className={classes.navbarStyle}>
          <li>
            <NavbarItem url={ROUTES.ABOUT_PAGE} title='About' Icon={FcAbout} />
          </li>
          <li>
            <NavbarItem url={ROUTES.CATALOG_PAGE} title='Catalog' Icon={CiShop} />
          </li>
          <li>
            <NavbarItem url={ROUTES.CONTACTS_PAGE} title='Contacts' Icon={MdOutlineContactSupport} />
          </li>
          <li>
            <NavbarItem url={ROUTES.DELIVERY_PAGE} title='Delivery and payment' Icon={TbTruckDelivery} />
          </li>
        </ul>
      </nav>

      <>
        {user?.email?.length > 1 ?
          <ProfileDropdown />
          :
          <div onClick={() => router.push(ROUTES.AUTH_PAGE)}>
            Login
          </div>
        }
      </>

    </header>
  )
    ;
};

