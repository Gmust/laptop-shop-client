'use client';

import { FcAbout } from 'react-icons/fc';
import { MdOutlineContactSupport } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { useRouter } from 'next/navigation';
import { CiShop } from 'react-icons/ci';
import ProfileDropdown from '@components/modules/Header/ProfileDropdown/ProfileDropdown';
import { $user } from '@/context/user';
import { ROUTES } from '@utils/constants/routes';
import { LocationBtn } from './LocationBtn/LocationBtn';
import { NavbarItem } from './NavbarItem/NavbarItem';
import classes from './header.module.scss';

export const Header = () => {
  const router = useRouter();
  const user = $user.getState();



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
            <NavbarItem url={ROUTES.MAIN_PAGE} title='Catalog' Icon={CiShop} />
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
          <div onClick={() => router.push('/auth')}>Login
          </div>
        }
      </>

    </header>
  )
    ;
};

