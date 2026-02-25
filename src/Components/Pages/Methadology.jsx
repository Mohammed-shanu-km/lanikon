import React, { useEffect } from 'react'
import Navbar1 from '../Navbar1/Navbar1'
import Navbar2 from '../Navbar2/Navbar2'
import Footer from '../Footer/Footer'
import Methherosection from '../Methherosection/Methherosection'
import Methsecond from '../Methsecond/Methsecond'
import Herothirdpage from '../Herothirdpage/Herothirdpage'
import Herofifthpage from '../Herofifthpage/Herofifthpage'
import Servicesnew from '../servicesnew/Servicesnew'
import Services from '../Services/Services'

const Methadology = () => {
 useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []); 
  return (
   <>
   {/* <Navbar1/> */}
   <Navbar2/>
   <Methherosection/>
 <Services/>
<Servicesnew/>
 
   <Footer/>
   </>
  )
}

export default Methadology