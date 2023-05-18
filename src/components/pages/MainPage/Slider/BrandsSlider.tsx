'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './brandsSlider.module.scss';

export const BrandsSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear'
  };

  return (
    <div className={classes.brandsSlider}>
      <Slider {...settings} >
      </Slider>
    </div>
  );
};

