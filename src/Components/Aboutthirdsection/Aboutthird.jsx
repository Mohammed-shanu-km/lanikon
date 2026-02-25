import React from "react";
import image from "../../assets/t.jpg";

const Aboutthird = () => {
  return (
    <div className="pl-[0px] pt-[0px] pb-[30px] h-[90vh]  bg-[white] flex flex-row-reverse gap-[100px] relative md-max:h-[55vh]  sm-max:h-[auto] md-small:flex-col-reverse md-small:h-[100vh] md-small:gap-[40px] sm-max:flex-col-reverse  sm-max:gap-[10px]">
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%] sm-max:p-[20px]">
        <div className="flex flex-col gap-[20px]  mt-[30px] md-small:mt-[0px] sm-max:mt-[0px]">
          <div className="flex flex-col gap-[10px] md-small:gap-[0px] md-small:mt-[0px] md-small:pl-[20px]">
            <div className="flex flex-col gap-[10px] mt-[20px]  sm-max:gap-[10px]">
              <h1 className=" text-[24px] font-[600] sm-max:text-[22px]">Our Mission</h1>
              <p className="text-[16px] text-[gray] leading-[30px] max-w-[80%] md-small:max-w-[100%] sm-max:max-w-[100%] sm-max:text-[15px ">
              To be the leading provider of innovative, sustainable, and
              tech-driven car wash solutions, creating a cleaner world while
              setting the standard for convenience, quality, and customer
              satisfaction in vehicle care
              </p>
            </div>
            <div className="flex flex-col gap-[10px] mt-[30px] sm-max:mt-[20px]">
              <h1 className=" text-[24px] font-[600] sm-max:text-[22px]">Our Vision</h1>
              <p className="text-[16px] text-[gray] leading-[30px] max-w-[80%] md-small:max-w-[100%] sm-max:max-w-[100%] sm-max:text-[15px ">
              To be the leading provider of innovative, sustainable, and
              tech-driven car wash solutions, creating a cleaner world while
              setting the standard for convenience, quality, and customer
              satisfaction in vehicle care.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] mt-[30px] sm-max:mt-[20px]">
              <h1 className=" text-[24px] font-[600] sm-max:text-[22px]">Our Values</h1>
              <p className="text-[16px] text-[gray] leading-[30px] max-w-[80%] md-small:max-w-[100%] sm-max:max-w-[100%] sm-max:text-[15px] ">
                Safety, excellence, care, commitment, professionalism, ,
                creativity, co-operation and knowledge
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
        <img className="h-[90vh] object-cover md-max:h-[50vh] md-small:h-[40vh] md-small:w-[100%] sm-max:h-[50vh] " src={image} alt="" />
      </div>
    </div>
  );
};

export default Aboutthird;
