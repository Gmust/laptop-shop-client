import { BrandsSlider } from '@components/pages/MainPage/Slider/BrandsSlider';
import classes from './mainPage.module.scss';

export const MainPage = ({ rows, count }: ILaptopsResponse) => {
  return (
    <div className={classes.mainPageWrapper}>
      <div>
        <BrandsSlider />
      </div>

      main
    </div>
  );
};

