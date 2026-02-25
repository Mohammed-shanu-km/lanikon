import React, { useState } from "react";
import image from "../../assets/gal1.jpg";
import image1 from "../../assets/gal2.webp";
import image2 from "../../assets/gal3.jpg";
import image3 from "../../assets/gal4.jpg";
import image4 from "../../assets/gal5.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import './Heroseventh.css'

const Heroseventh = () => {
  const [showAllImages, setShowAllImages] = useState(false);

  const handleReadMore = () => {
    setShowAllImages(true);
  };

  return (
    <>
      <div className="rinshad h-[100px]  w-full p-[20px] flex items-center justify-center sm-max:h-auto">
        <h1 className="text-center text-[42px] font-[600] text-[white] sm-max:text-[28px]">
          Checkout Our Gallery
        </h1>
      </div>
      <div className="mt-[50px] px-[150px] md-small:px-[20px] md-max:px-[30px] sm-max:px-[20px]">
        <div className="grid grid-cols-5 gap-[20px] md-max:grid-cols-4 md-small:grid-cols-3 sm-max:grid-cols-1">
          <div className={`h-[250px] w-[200px] sm-max:w-[100%] ${!showAllImages ? "sm-max:block" : "sm-max:block"}`}>
            <img className="h-[230px] object-cover sm-max:w-[100%]" src={image} alt="Gallery 1" />
          </div>
          <div className={`h-[250px] w-[200px]  sm-max:w-[100%] ${!showAllImages ? "sm-max:hidden" : "sm-max:block"}`}>
            <img className="h-[230px] object-cover  sm-max:w-[100%]" src={image1} alt="Gallery 2" />
          </div>
          <div className={`h-[250px] w-[200px] sm-max:w-[100%] ${!showAllImages ? "sm-max:hidden" : "sm-max:block"}`}>
            <img className="h-[230px] object-cover  sm-max:w-[100%]" src={image2} alt="Gallery 3" />
          </div>
          <div className={`h-[250px] w-[200px]  sm-max:w-[100%] ${!showAllImages ? "sm-max:hidden" : "sm-max:block"}`}>
            <img className="h-[230px] object-cover  sm-max:w-[100%]" src={image3} alt="Gallery 4" />
          </div>
          <div className={`h-[250px] w-[200px] sm-max:w-[100%] ${!showAllImages ? "sm-max:hidden" : "sm-max:block"}`}>
            <img className="h-[230px] object-cover  sm-max:w-[100%]" src={image4} alt="Gallery 5" />
          </div>
        </div>
        {!showAllImages && (
          <div className="flex items-center justify-center mt-[10px]">
            <button
              onClick={handleReadMore}
              className="px-6 py-3 bg-[#ff5603] text-white animate__animated animate__fadeIn animate__delay-2s flex items-center gap-[5px]"
            >
              Show More{" "}
              <IoArrowForwardCircleOutline className="text-[20px] text-[white]" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Heroseventh;
