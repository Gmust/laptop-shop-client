import classes from './submitInput.module.scss';

export const SubmitInput = ({ value }: { value: string }) => {
  return <input type='submit' className={classes.submitInput} value={value} />;
};

