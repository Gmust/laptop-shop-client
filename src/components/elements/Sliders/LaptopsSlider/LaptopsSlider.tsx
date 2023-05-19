'use client';
import Slider from 'react-slick';
import { LaptopCard } from '@components/modules/LaptopCard/LaptopCard';
import { GrNext, GrPrevious } from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './LaptopsSlider.module.scss';


export const LaptopsSlider = ({ laptops }: { laptops: ILaptop[] }) => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
    dots: false
  };


  return (
    <div className={classes.laptopsSliderWrapper}>
      <Slider {...settings}>
        {laptops.map(laptop => <LaptopCard {...laptop} />)}
      </Slider>
    </div>
  );
};

