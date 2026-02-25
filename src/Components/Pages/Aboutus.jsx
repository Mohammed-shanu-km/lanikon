import React, { useEffect } from "react";
import Navbar1 from "../Navbar1/Navbar1";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Footer/Footer";
import Aboutherosection from "../Abouthersection/Aboutherosection";
import Aboutsecond from "../Aboutsecond/Aboutsecond";
import Aboutthird from "../Aboutthirdsection/Aboutthird";
import Heroseventh from "../Heroseventh/Heroseventh";
import Watsapp from "../../Watsapp/Watsapp";
import Aboutnew from "../Aboutnewsection/Aboutnew";
import Aboutnewtwo from "../Aboutnewtwo/Aboutnewtwo";
import Aboutlast from "../Aboutlast/Aboutlast";
import Whatsapp from "../Whatsapp/Whatsapp";
import Herothirdpage from "../Herothirdpage/Herothirdpage";
import Herosecond from "../Herosecondpage/Herosecond";

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      {/* <Watsapp/> */}
      {/* <Navbar1 /> */}

      <Navbar2 />
      <Aboutherosection />
<Herosecond/>
      {/* <Aboutnew /> */}
      <Aboutsecond />
      <Aboutnewtwo />
      <Aboutlast />

      <Footer />
    </>
  );
};

export default Aboutus;
