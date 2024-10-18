import React, { useEffect, useRef } from 'react'
import '../service/Serviceing.css'
import { ImScissors } from "react-icons/im";
import {motion, useInView} from 'framer-motion'


const Serviceing = () => {

  const ref =useRef(null);

  const refView=useInView(ref,{ once: true })


  const text = "Discover our range of bespoke services, each thoughtfully designed to cater to your unique needs and preferences. At GopiSaloon, we offer a comprehensive suite of treatments, ensuring you leave looking and feeling your best.";

  // Split the text into individual characters including spaces
  const splitText = text.split('');


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Delay between each letter animation
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state before animation
    visible: { opacity: 1, y: 0 }, // Final state when animation is triggered
  };

  return (
    <div className='serviceContainer' id='services'>
    <motion.div className="serviceLogo"
    animate={{x:[20,0,20,0,20]}}
    transition={{repeat:Infinity,ease:'easeInOut',duration:2}}
    >
   <span className='logoservice'> <ImScissors className='img' />
    <h1>Service</h1></span>
    </motion.div>

    <div className="servicetype" ref={ref}>
      <motion.div className='serviceHead' 
      variants={containerVariants}
      initial='hidden'
      animate={refView ? 'visible' : 'hidden'}
      >
      <motion.p>
      {splitText.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
             
            >
              {char}
            </motion.span>
          ))}
      </motion.p>
      </motion.div>
      <motion.div className="serviceImg" 
      initial={{x: 300, opacity: 0}}
      animate={refView ? { x: 0, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 70, // Adjust stiffness for smooth animation
        damping: 20,   // Damping for controlling the bounce effect
        duration: 0.5, // Adjust duration to control speed
      }}
      >
        <img className='serviceTopicImg' src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NO Img" />
        <div className="imgcontent">
          <h3>Transform Your Hair, Elevate Your Style.</h3>
        </div>
      </motion.div>
    </div>

   1

    </div>
  )
}

export default Serviceing