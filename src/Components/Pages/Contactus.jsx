import React, { useEffect } from 'react'
import Navbar1 from "../Navbar1/Navbar1";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Footer/Footer";
import Contacthero from '../Contactherosection/Contacthero';
import Contacttwo from '../Contacttwo/Contacttwo';

const Contactus = () => {
 useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []); 
  return (
   <>
    {/* <Navbar1 /> */}
    <Navbar2 />
    <Contacthero/>
    <Contacttwo/>
    <Footer/>
 
   </>
  )
}

export default Contactus
