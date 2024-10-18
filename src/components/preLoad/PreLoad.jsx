import React, { useEffect } from 'react';
import '../preLoad/PreLoad.css';
import { AnimatePresence, motion } from 'framer-motion';

const PreLoad = ({ setLoader }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [setLoader]);

  const boxVarient = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.6, when: 'beforeChildren', staggerChildren: 0.3 },
    },
  };

  const childVarient = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const imag = [
    { id: 1, src: 'https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',class:"im1" },
    { id: 2, src: 'https://images.pexels.com/photos/1321916/pexels-photo-1321916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',class:"im2" },
    { id: 3, src: 'https://images.pexels.com/photos/3065207/pexels-photo-3065207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',class:"im3" },
    { id: 4, src: 'https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',class:"im4" },
  ];

  

  return (
    <AnimatePresence>
      <div className='box-container'>
        <motion.div
          className="preimgs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img 
            style={{ width: "350px", height: "180px", zIndex: 88 }} 
            src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="No Img" 
            layoutId="sharedImage"
          />
        </motion.div>
        <motion.div
          className="boxss"
          variants={boxVarient}
          initial="hidden"
          animate="visible"
        >
          {imag.map((image) => (
            <motion.img
              key={image.id}
              className={image.class}
              src={image.src}
              alt="No Img"
              variants={childVarient}
             
              exit={{ scale: 0 ,transition:{duration:2}}}
            />
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PreLoad;
