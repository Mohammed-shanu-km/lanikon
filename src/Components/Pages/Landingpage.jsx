import React, { useEffect } from "react";
import Navbar1 from "../Navbar1/Navbar1";
import Navbar2 from "../Navbar2/Navbar2";
import Herosectionmain from "../Herosectionmain/Herosectionmain";
import Herosecond from "../Herosecondpage/Herosecond";
import Herothirdpage from "../Herothirdpage/Herothirdpage";
import Herofifthpage from "../Herofifthpage/Herofifthpage";
import Herosixthpage from "../Herosixtpage/Herosixthpage";
import Heroseventh from "../Heroseventh/Heroseventh";
import Footer from "../Footer/Footer";
import Watsapp from "../../Watsapp/Watsapp";
import ScrollCards from "../../Components/ScrollCards/ScrollCards";
import Services from "../Services/Services";

const Landingpage = () => {
 useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []); 
  return (
    <>
      {/* <Navbar1/> */}
      <Navbar2 />
      <Herosectionmain />

 
      <Services />

      <Herofifthpage />
      {/* <Herosecond /> */}
      <Herosixthpage />
      {/* <Heroseventh/> */}
      <Footer />
    </>
  );
};

export default Landingpage;
