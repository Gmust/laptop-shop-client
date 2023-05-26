'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import classes from './imageSlider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

export const ImageSlider = ({ images }: { images: string[] }) => {

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <GrLinkNext size={'1.5em'} />,
    prevArrow: <GrLinkPrevious size={'1.5em'}  />,
  };

  return (
    <Slider {...settings} className={classes.imageSliderWrapper}>
      {images.map((item) =>
        <div>
          <Image src={item} alt={'image'} width={400} height={400} />
        </div>
      )}
    </Slider>
  );
};

