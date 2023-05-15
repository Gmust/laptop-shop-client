import { Auth } from '@components/pages/Auth';
import classes from './authPage.module.scss';

const AuthPage = () => {
  return (
    <div className={classes.authPageWrapper}>
        <Auth />
    </div>
  );
};

export default AuthPage;