'use state';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import classes from './accordion.module.scss';


interface AccordionProps {
  children: React.ReactNode,
  title: string
}

export const Accordion = ({
                            children,
                            title
                          }: AccordionProps) => {

  const [isActive, setIsActive] = useState<boolean>(false);


  return (
    <div className={classes.accordionWrapper}>
      <div className={classes.accordionTop} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className={classes.icon}>{isActive ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</div>
      </div>
      <AnimatePresence initial={false}>

        {isActive &&
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 1, ease: [0.40, 0.62, 0.23, 1] }}
            className={classes.accordionBottom}>
            {children}
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
};

