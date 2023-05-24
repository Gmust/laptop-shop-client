'use state';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { IFilterManufacturerAccordionProps } from '@/types/catalog';
import classes from './accordion.module.scss';
import { FilterCheckboxItem } from '@components/elements/Accordion/FilterCheckboxItem/FilterCheckboxItem';


export const Accordion = ({
                            setManufacturer,
                            updateManufacturer,
                            manufacturersList,
                            title
                          }: IFilterManufacturerAccordionProps) => {

  const [isActive, setIsActive] = useState<boolean>(false);

  const selectAll = () => {
    setManufacturer(manufacturersList.map(item => ({ ...item, checked: true })));
  };

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
            <button onClick={selectAll} >Select All</button>
            <div>
              {manufacturersList.map((manuf) =>
                <FilterCheckboxItem id={manuf.id} title={manuf.title} checked={manuf.checked}
                                    event={updateManufacturer} key={manuf.id} />
              )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
};

