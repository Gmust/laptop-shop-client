import Link from 'next/link';
import { IconType } from 'react-icons';
import classes from './navbarItem.module.scss';

interface NavbarItemProps {
  url: string,
  title: string,
  Icon: IconType
}

export const NavbarItem = ({ Icon, title, url }: NavbarItemProps) => {
  return (
    <Link href={url} className={classes.menuItem}>
      <Icon size='1.5em' color='orange' className={classes.icon} />
      <p className={classes.title}>{title}</p>
    </Link>
  );
};

