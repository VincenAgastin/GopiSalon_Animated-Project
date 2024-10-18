import React, { useRef } from 'react';
import '../aboutContent/AboutCon.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import Serviceing from '../service/Serviceing';

const AboutCon = () => {
  const abtcontain = {
    hidden: {
      opacity: 0,
      x: 300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.10,
        type: 'spring',
        mass: 1,
        stiffness: 200,
        delayChildren: 0.10,
        staggerChildren: 0.4,
      },
    },
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // Scroll animation for each ref
  const { scrollYProgress: scrollYProgress1 } = useScroll({ target: ref1,offset:["start 49%","end end"] });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref2,offset:["start 49%","end end"] });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: ref3,offset:["start 49%","end end"] });

  const scale1 = useTransform(scrollYProgress1, [0, 1], [1, 0]);
  const opacity1 = useTransform(scrollYProgress1, [0, 1], [1, 0]);

  const scale2 = useTransform(scrollYProgress2, [0, 1], [1, 0]);
  const opacity2 = useTransform(scrollYProgress2, [0, 1], [1, 0]);

  const scale3 = useTransform(scrollYProgress3, [0, 1], [1, 0]);
  const opacity3 = useTransform(scrollYProgress3, [0, 1], [1, 0]);

  return (
    <div className="aboutContainer" id='abouts'>
        <div className="aboutus">
            <h1>About Us</h1>
        </div>
      <motion.div
        className='abcontainer'
        variants={abtcontain}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          ref={ref1}
          className="abBox1 box"
          whileHover={{scale:1.08}}
          style={{ scale: scale1, opacity: opacity1,transition:'all 0.5s', }}
        >
          <h1>Our <span>Story</span></h1>
          <h3>"At Gopi Salon, we believe that beauty is more than skin deep. Our luxury salon is a space where you can escape the ordinary and immerse yourself in an atmosphere of elegance, sophistication, and exceptional service."</h3>
        </motion.div>
        <motion.div
          ref={ref2}
          className="abBox2 box"
          style={{ scale: scale2, opacity: opacity2,transition:'all 0.5s', }}
          whileHover={{scale:1.08}}
        >
          <h1>Our <span>Mission</span></h1>
          <h3>"To redefine luxury by providing personalized, high-end beauty experiences tailored to each individual’s needs."</h3>
        </motion.div>
        <motion.div
          ref={ref3}
          className="abBox3 box"
          style={{ scale: scale3, opacity: opacity3,transition:'all 0.5s', }}
          whileHover={{scale:1.08}}
        >
          <h1>Our <span>Team</span></h1>
          <h3>"Our team of highly skilled stylists, estheticians, and therapists are dedicated to delivering the finest service with a personal touch. With years of experience and continuous training, we bring the latest in beauty trends and techniques."</h3>
        </motion.div>
      </motion.div>
    
    </div>
  );
};

export default AboutCon;
