'use client';
import Slider from 'react-slick';
import { LaptopCard } from '@components/modules/LaptopCard/LaptopCard';
import { GrNext, GrPrevious } from 'react-icons/gr';
import classes from './LaptopsSlider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const LaptopsSlider = ({ laptops }: { laptops: ILaptop[] }) => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
    dots: false
  };


  return (
    <div className={classes.laptopsSliderWrapper}>
      <Slider {...settings}>
        {laptops.map(laptop => <LaptopCard key={laptop.id} {...laptop} />)}
      </Slider>
    </div>
  );
};

