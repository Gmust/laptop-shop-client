import { VscLocation } from 'react-icons/vsc';
import classes from './location.module.scss';

export const LocationBtn = () => {
  return (
    <div className={classes.location}>
      <VscLocation color='white' fontSize='1.4em' />
      <span>Poznan</span>
    </div>
  );
};

