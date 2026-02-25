import React from "react";
import setp1 from "../../assets/step1.jpg";
import setp2 from "../../assets/step2.jpg";
import setp3 from "../../assets/step3.jpg";
import setp4 from "../../assets/step-4.jpg";
import setp5 from "../../assets/step-5.jpg";

const Methsecond = () => {
  return (
    <>
      <div className="px-[100px] pt-[80px] md-max:px-[30px] md-max:pt-[50px] md-small:px-[20px] md-small:pt-[20px] md-small:mt-[40px] sm-max:px-[20px] sm-max:pt-[50px]">
        <div className="grid grid-cols-3 gap-[40px] md-small:grid-cols-2 sm-max:grid-cols-1">
          <div className="h-[300px] w-full bg-[#f3f3f3]">
            <div className="h-[200px] w-full relative ">
              <img className="h-full w-full object-cover" src={setp1} alt="" />
              <div className="h-[40px] w-[100px] bg-[#ff5603] absolute bottom-0 left-5 flex items-center justify-center">
                <h2 className="text-[16px] font-[600] text-[white]">Step-1</h2>
              </div>
            </div>
            <div className="p-[20px]">
              <p className="text-[16px] text-[#0a2343] leading-[25px] sm-max:text-[15px]">
                The operator uses a soft duster to take the dirt off from the
                car that needs to be cleaned
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full bg-[#f3f3f3]">
            <div className="h-[200px] w-full relative ">
              <img className="h-full w-full object-cover" src={setp2} alt="" />
              <div className="h-[40px] w-[100px] bg-[#ff5603] absolute bottom-0 left-5 flex items-center justify-center">
                <h2 className="text-[16px] font-[600] text-[white]">Step-2</h2>
              </div>
            </div>
            <div className="p-[20px]">
              <p className="text-[16px] text-[#0a2343] leading-[25px] sm-max:text-[15px]">
                The specially formulated wash product is sprayed on to the
                vehicle.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full bg-[#f3f3f3]">
            <div className="h-[200px] w-full relative ">
              <img className="h-full w-full object-cover" src={setp3} alt="" />
              <div className="h-[40px] w-[100px] bg-[#ff5603] absolute bottom-0 left-5 flex items-center justify-center">
                <h2 className="text-[16px] font-[600] text-[white]">Step-3</h2>
              </div>
            </div>
            <div className="p-[20px]">
              <p className="text-[16px] text-[#0a2343] leading-[25px] sm-max:text-[15px]">
                The operator uses chamois leather to clean the premixed shampoo
                solution and dirt from the car body.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full bg-[#f3f3f3]">
            <div className="h-[200px] w-full relative ">
              <img className="h-full w-full object-cover" src={setp4} alt="" />
              <div className="h-[40px] w-[100px] bg-[#ff5603] absolute bottom-0 left-5 flex items-center justify-center">
                <h2 className="text-[16px] font-[600] text-[white]">Step-4</h2>
              </div>
            </div>
            <div className="p-[20px]">
              <p className="text-[16px] text-[#0a2343] leading-[25px] sm-max:text-[15px]">
                A microfiber cloth is used to dry the water from the car body
                and wind screen
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full bg-[#f3f3f3]">
            <div className="h-[200px] w-full relative ">
              <img className="h-full w-full object-cover" src={setp5} alt="" />
              <div className="h-[40px] w-[100px] bg-[#ff5603] absolute bottom-0 left-5 flex items-center justify-center">
                <h2 className="text-[16px] font-[600] text-[white]">Step-5</h2>
              </div>
            </div>
            <div className="p-[20px]">
              <p className="text-[16px] text-[#0a2343] leading-[25px] sm-max:text-[15px]">
              Finally non-bio hazardous polish is used to clean tyres.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full bg-[#f3f3f3]">
            <div className="h-[200px] w-full relative ">
              <img className="h-full w-full object-cover" src={setp5} alt="" />
              <div className="h-[40px] w-[100px] bg-[#ff5603] absolute bottom-0 left-5 flex items-center justify-center">
                <h2 className="text-[16px] font-[600] text-[white]">Step-6</h2>
              </div>
            </div>
            <div className="p-[20px]">
              <p className="text-[16px] text-[#0a2343] leading-[25px] sm-max:text-[15px]">
              Finally non-bio hazardous polish is used to clean tyres.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Methsecond;
