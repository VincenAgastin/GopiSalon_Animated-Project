import {React,useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Image from '../components/images/Image';
import About from './About';
import PreLoad from '../components/preLoad/PreLoad';
import Service from './Service';

const Home = () => {
  // Corrected the array declaration with quotes around each letter
 
  const [loader, setLoader] = useState(true)

  return (
    <div>
      {loader && <PreLoad setLoader={setLoader} />}
      {!loader && <>
        <Navbar />
        <About />
      </>}

    </div>
  );
};

export default Home;
