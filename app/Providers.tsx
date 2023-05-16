import { ReactNode } from 'react';
import { EffectorNext } from '@effector/next';
import classes from './providers.module.scss';

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {

  return (
    <EffectorNext>
      <div className={classes.wrapper}>
        {children}
      </div>
    </EffectorNext>
  );
};