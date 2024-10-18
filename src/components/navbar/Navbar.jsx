import React from 'react';
import '../navbar/Navbar.css';
import { motion } from 'framer-motion';
import Image from '../images/Image';
import Header from '../header/Header';
import { Link } from 'react-scroll';

const Navbar = () => {
    const gopis = ['G', 'O', 'P', 'I', " ",'S', 'A', 'L', 'O', 'O', 'N'];

    const logoVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const spanVariants = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const svgVariants = {
        hidden: {
            y: -200
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                type: 'spring',
                stiffness: 60,
                mass: 1
            }
        }
    };

    const pathVariants = {
        hidden: {
            pathLength: 0
        },
        visible: {
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div>
            <div className="container" id='hero'>
                <div className="navbar">
                    <motion.div
                        className="logo"
                        variants={logoVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        <motion.svg
                            variants={svgVariants}
                            initial='hidden'
                            animate='visible'
                            width="30px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                fill="#fff"
                                d="M256 17c-62.5 0-124.8 16.55-153.6 45.36L99.72 65H72.99v62H439V65h-26.7l-2.7-2.64C380.8 33.55 318.5 17 256 17zM144 79h224v18H144zm-87.01 66v126h30v-96H169v96h46v-71c0-22 20.5-33 41-33s41 11 41 33v71h46v-96h82v96h30V145zM247 186.1c-7.8 1.9-14 6.6-14 13.9v23h14zm18 0V223h14v-23c0-7.3-6.2-12-14-13.9zM105 193v30h14v-30zm32 0v30h14v-30zm224 0v30h14v-30zm32 0v30h14v-30zm-288 48v30h14v-30zm32 0v30h14v-30zm96 0v30h14v-30zm32 0v30h14v-30zm96 0v30h14v-30zm32 0v30h14v-30zM50.11 289l-28 14H489.9l-28-14zm-27.12 32v110h18V321zm50 0v110H119v-67.3L76.23 321zm28.71 0l17.3 17.3V321zm35.3 0v17.3l17.2-17.3zm42.8 0L137 363.7V431h62v-96h114v96h62v-67.3L332.2 321zm178 0l17.2 17.3V321zm35.2 0v17.3l17.2-17.3zm42.8 0L393 363.7V431h46V321zm35.2 0v110h18V321zm-254 32v27.9c3.3-1.3 7-3 11-5 8-3.9 17-8.9 27.9-8.9 10.8-.1 19.6 4.9 27.7 8.9 4.1 2 7.9 3.8 11.4 5.1v-28zm30 34.1c-3.3 1.3-7 3-11 5-5.7 2.9-11.9 6.2-19 7.8V431h30zm18 .1V431h30v-31.1c-7.2-1.7-13.5-5-19.4-7.9-3.8-1.9-7.4-3.5-10.6-4.8zM24.99 449v46H154.4l23-46zm172.61 0l-7 14h130.8l-7-14H199zm137 0l23 46H487v-46zm-153 32l-7 14h162.8l-7-14z"
                                variants={pathVariants}
                            />
                        </motion.svg>

                        {gopis.map((gopi, index) => (
                            <motion.span
                                key={index}
                                variants={spanVariants}
                            >
                                {gopi}
                            </motion.span>
                        ))}
                    </motion.div>
                    <ul>
                        <li><Link className='a' to='hero' spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                        <li><Link className='a' to='abouts' spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                        <li><Link className='a' to='services' spy={true} smooth={true} offset={-100} duration={500}>Services</Link></li>
                        <li><Link className='a' to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact Us</Link></li>
                    </ul>
                </div>
                <Header />
                <Image />  
            </div>
        </div>
    );
};

export default Navbar;
