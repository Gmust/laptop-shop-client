import classes from './laptop.module.scss';
import { ImageSlider } from '@components/elements/Sliders/ImageSlider/ImageSlider';
import { LaptopsSlider } from '@components/elements/Sliders/LaptopsSlider/LaptopsSlider';

interface ILaptopPage {
  laptop: ILaptop,
  newLaptops: ILaptop[],
  bestsellers: ILaptop[]
}

export const Laptop = ({ newLaptops, bestsellers, laptop }: ILaptopPage) => {


  return (
    <div className={classes.laptopWrapper}>

      <div className={classes.laptopTop}>
        <div className={classes.leftSide}>
          <div className={classes.sliderWrapper}>
            <ImageSlider images={JSON.parse(laptop.images)} />
          </div>
          <h3>Name: {laptop.name} {laptop.manufacturer} </h3>
          <h3>Price: {laptop.price}$</h3>
          <div>
            {laptop.new && <div>New one</div>}
            {laptop.bestseller && <div>Bestseller</div>}
          </div>
        </div>

        <div className={classes.rightSide}>
          <span className={classes.desc}>Description: <p>{laptop.description}</p></span>
          <span className={classes.desc}>Vendor code: <p> {laptop.vendor_code}</p></span>
          <span className={classes.desc}>Technical data:</span>
          <ul className={classes.techData}>
            {laptop.technical_data.map(item =>
              <li key={item.techDataId}>
                <div className={classes.title}>{item.title}</div>
                <div className={classes.techDataDesc}>{item.description}</div>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div>
        <div>
          <h4>New models:</h4>
          <LaptopsSlider laptops={newLaptops} />
        </div>
        <div>
          <h4>Bestsellers:</h4>
          <LaptopsSlider laptops={bestsellers} />
        </div>
      </div>
    </div>
  );
};

