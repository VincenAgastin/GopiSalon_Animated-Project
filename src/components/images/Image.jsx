import React from 'react';
import '../images/Image.css';
import { AnimatePresence, motion } from 'framer-motion';

const Image = () => {
  return (
    <AnimatePresence>
      <div className='imgContainer'>
        <motion.div
          className="imglong"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img 
            src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="No Img" 
            layoutId="sharedImage"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Image;
