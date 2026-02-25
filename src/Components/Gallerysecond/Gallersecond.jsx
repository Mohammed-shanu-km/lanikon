import React from "react";
import gal1 from "../../assets/gal1.jpg";
import gal2 from "../../assets/gal2.webp";
import gal3 from "../../assets/gal3.jpg";
import gal4 from "../../assets/gal4.jpg";
import gal5 from "../../assets/gal5.jpg";
import gal6 from "../../assets/gal6.jpeg";
import gal7 from "../../assets/gal7.jpg";
import gal8 from "../../assets/gal8.webp";
import gal9 from "../../assets/gal9.jpg";
import gal10 from "../../assets/gal10.jpg";

const Gallersecond = () => {
  return (
    <div className="px-[100px] pt-[80px] md-max:px-[30px] md-max:pt-[50px] md-small:px-[20px] md-small:pt-[40px] sm-max:px-[20px] sm-max:pt-[50px]">
      <div className="grid grid-cols-4 gap-[50px] md-small:grid-cols-3 sm-max:grid-cols-2 sm-max:gap-[20px]">
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal1} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal2} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal3} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal4} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal5} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal6} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal7} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal8} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal9} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallersecond;
