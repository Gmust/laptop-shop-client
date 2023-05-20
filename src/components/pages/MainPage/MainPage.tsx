import { BrandsSlider } from '@components/elements/Sliders/BrandsSlider/BrandsSlider';
import classes from './mainPage.module.scss';
import { LaptopsSlider } from '@components/elements/Sliders/LaptopsSlider/LaptopsSlider';
import { LaptopCard } from '@components/modules/LaptopCard/LaptopCard';

interface MainPageProps {
  allLaptops: ILaptop[],
  newLaptops: ILaptop[],
  bestsellersLaptops: ILaptop[]
}

export const MainPage = ({ allLaptops, bestsellersLaptops, newLaptops }: MainPageProps) => {

  return (
    <>
      <BrandsSlider />
      <div className={classes.mainPageWrapper}>
        <div>
          <h2>Our Laptops</h2>
          <div className={classes.divider}></div>
          <div>
            <h3>New laptops</h3>
            <div>
              <LaptopsSlider laptops={newLaptops} />
            </div>
          </div>

          <div className={classes.divider}></div>

          <div>
            <h3>Bestsellers laptops</h3>
            <div>
              <LaptopsSlider laptops={bestsellersLaptops} />
            </div>
          </div>

          <div className={classes.divider}></div>

          <div>
            <h3>All Laptops</h3>
            <div className={classes.allLaptops}>
              {allLaptops.map(laptop => <LaptopCard key={laptop.id} {...laptop} />)}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

