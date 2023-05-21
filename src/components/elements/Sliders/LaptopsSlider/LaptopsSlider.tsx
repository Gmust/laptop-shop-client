'use client';
import Slider from 'react-slick';
import { LaptopCard } from '@components/modules/LaptopCard/LaptopCard';
import { GrNext, GrPrevious } from 'react-icons/gr';
import classes from './LaptopsSlider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useWindowSize } from '@hooks/useWindowSize';
import { useEffect, useState } from 'react';

export const LaptopsSlider = ({ laptops }: { laptops: ILaptop[] }) => {

  const [slidesCount, setSlidesCount] = useState<number>(4);
  const { width, height } = useWindowSize();

  const setAmountOfSliders = () => {
    if (width! >= 1080) {
      setSlidesCount(4);
    }
    if (width! < 1080 && width! > 950) {
      setSlidesCount(3);
    }
    if (width! < 800) {
      setSlidesCount(1);
    }
  };

  useEffect(() => {
    setAmountOfSliders();
  }, [width]);


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
    slidesToScroll: slidesCount,
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

