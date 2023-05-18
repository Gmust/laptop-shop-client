import { FcAbout } from 'react-icons/fc';
import { MdOutlineContactSupport } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { CiShop } from 'react-icons/ci';
import { ROUTES } from '@utils/constants/routes';
import { LocationBtn } from './LocationBtn/LocationBtn';
import { NavbarItem } from './NavbarItem/NavbarItem';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';
import classes from './header.module.scss';

export const Header = () => {
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
        <ProfileDropdown />
      </>

    </header>
  );
};

