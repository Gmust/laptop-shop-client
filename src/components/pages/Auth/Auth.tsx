'use client';

import classes from './auth.module.scss';
import { SignIn } from '@components/pages/Auth/SignIn/SignIn';
import { SignUp } from '@components/pages/Auth/SignUp/SignUp';
import { useState } from 'react';
import { useRedirectByUserCheck } from '@hooks/useRedirectByUserCheck';

export const Auth = () => {

  useRedirectByUserCheck();
  const [type, setType] = useState<'signIn' | 'signUp'>('signIn');

  return (
    <div className={classes.authWrapper}>
      <div className={classes.header}>
        <h2
          className={type === 'signIn' ? classes.active : undefined} onClick={() => setType('signIn')}>
          Sign in
        </h2>
        <h2
          className={type === 'signUp' ? classes.active : undefined} onClick={() => setType('signUp')}>
          Sign Up
        </h2>
      </div>
      <div>
        {type === 'signIn' ?
          <SignIn />
          :
          <SignUp />
        }
      </div>
    </div>
  );
};

