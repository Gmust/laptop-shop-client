import Image from 'next/image';
import Link from 'next/link';
import classes from './laptopCard.module.scss';

export const LaptopCard = (laptop: ILaptop) => {

  const img = JSON.parse(laptop.images)[0];


  return (
    <Link href={'#'} className={classes.cardWrapper}>
      <Image src={img} alt={'image'} width={250} height={180} style={{ 'borderRadius': '10px' }}
             className={classes.image} />
      <h4>{laptop.name} {laptop.manufacturer}</h4>
      <span className={classes.vendorCode}>Vendor code:{laptop.vendor_code}</span>
      <span className={classes.price}>Price: {laptop.price}$</span>
    </Link>
  );
};

