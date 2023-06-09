import { getTrackBackground, Range } from 'react-range';
import classes from './priceRange.module.scss';

const STEP = 0.1;
const MIN = 0;
const MAX = 1000000;

interface PriceRangeProps {
  priceRange: number[],
  setPriceRange: (arg0: number[]) => void,
  setIsPriceChanged: (arg0: boolean) => void,
  applyFilters: () => void
}

export const PriceRange = ({ setPriceRange, priceRange, setIsPriceChanged, applyFilters }: PriceRangeProps) => {

  const handleChangePrice = (values: number[]) => {
    setIsPriceChanged(true);
    setPriceRange(values);
    applyFilters();
  };

  return (
    <div
      className={classes.priceRange}
    >
      <div className={classes.inputWrapper}>
        <input
          type='text'
          value={Math.ceil(priceRange[0])}
          placeholder='от 00 000'
          readOnly
        />
        <span></span>
        <input
          type='text'
          value={Math.ceil(priceRange[1])}
          placeholder='до 10 000'
          readOnly
        />
      </div>
      <Range
        values={priceRange}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={handleChangePrice}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: 'auto',
              display: 'flex',
              width: '100%',
              padding: '0 10px'
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values: priceRange,
                  colors: ['#B1CEFA', '#247CC8', '#B1CEFA'],
                  min: MIN,
                  max: MAX
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style
            }}
          >
            <div
              style={{
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '3px solid #1C629E',
                boxShadow: '0px 12px 8px -6px rgba(174, 181, 239, 0.2)'
              }}
            />
          </div>
        )}
      />
      <button onClick={() => setPriceRange([0, 1000000])}>
        Reset price
      </button>
    </div>
  );
};

