import React from 'react'
import AboutCon from '../components/aboutContent/AboutCon'
import  '../components/aboutContent/AboutCon.css'
import Serviceing from '../components/service/Serviceing'
import Service from './Service'
 

const About = () => {
  return (
    <div className='ABOUT'>
      <AboutCon />
      <Service />
    </div>
  )
}

export default About