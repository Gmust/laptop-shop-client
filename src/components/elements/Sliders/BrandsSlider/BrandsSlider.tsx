'use client';
import Slider from 'react-slick';
import { SiAcer, SiApple, SiAsus, SiDell, SiLenovo, SiMsi } from 'react-icons/si';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './brandsSlider.module.scss';

export const BrandsSlider = () => {

  const manufacturers = [
    {
      name: 'Asus',
      Icon: SiAsus
    },
    {
      name: 'Dell',
      Icon: SiDell
    },
    {
      name: 'MSI',
      Icon: SiMsi
    },
    {
      name: 'Lenovo',
      Icon: SiLenovo
    },
    {
      name: 'Apple',
      Icon: SiApple
    }, {
      name: 'Acer',
      Icon: SiAcer
    }
  ];


  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    nextArrow: <GrLinkNext size={'1.5em'} />,
    prevArrow: <GrLinkPrevious size={'1.5em'} />,
    autoplaySpeed: 2000,
    centerMode: true
  };

  return (
    <div className={classes.brandsSlider}>
      <div className={classes.sliderContainer}>
        <Slider {...settings}>
          {manufacturers.map(({ name, Icon }) => {
            return (<div key={name} className={classes.slide}>
                <Icon size={'2.1em'} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

