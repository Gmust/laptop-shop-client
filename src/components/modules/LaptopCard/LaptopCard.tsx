import classes from './laptopCard.module.scss';
import Image from 'next/image';

export const LaptopCard = (laptop: ILaptop) => {

  const img = JSON.parse(laptop.images)[0];


  return (
    <div className={classes.cardWrapper}>
      <Image src={img} alt={'image'} width={200} height={150} />
      <h4>{laptop.name} {laptop.manufacturer}</h4>
      <span>{laptop.vendor_code}</span>
      <span>{laptop.price}</span>
    </div>
  );
};

