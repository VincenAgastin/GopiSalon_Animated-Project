import React from 'react';
import '../header/Header.css';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const sharukVarient = {
    hidden: { y: 100, scale: 0, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  const hcontentVarient = {
    hidden: { x: '-200vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.1, when: 'beforeChildren', staggerChildren: 0.4 },
    },
  };

  const colorVarients = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
    <div className='hContainer'>
      <div className='header'>
        <motion.div
          className='hcontent'
          variants={hcontentVarient}
          initial='hidden'
          animate='visible'
        >
          <motion.h1 variants={colorVarients} >
            Experience Luxury Like Never Before
          </motion.h1>
          <motion.p variants={colorVarients}>
            Indulge in Premium Beauty Services at Our Exclusive Salon
          </motion.p>
          <motion.div  variants={colorVarients}>
            <motion.a className='hlink' href='#booking'>
              Book Your Appointment
            </motion.a>
            <motion.a className='hlink' href='#services'>
              Explore Our Services
            </motion.a>
          </motion.div>
        </motion.div>
        <div className='hpng'>
          <motion.img
            variants={sharukVarient}
            initial='hidden'
            animate='visible'
            src="https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt='Luxury Salon'
            height='300px'
            className='hImg'
          />
        </div>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default Header;
