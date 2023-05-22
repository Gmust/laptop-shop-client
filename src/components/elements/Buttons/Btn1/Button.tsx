'use client'

import { ReactNode } from 'react';
import classes from './button.module.scss';

interface BtnProps {
  children: ReactNode,
  func: ()=> void
}

export const Button = ({ children,func }: BtnProps) => {
  return (
    <button className={classes.btn1} onClick={func}>
      {children}
    </button>
  );
};

