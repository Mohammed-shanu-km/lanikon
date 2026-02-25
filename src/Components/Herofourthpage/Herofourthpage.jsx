import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Herofourthpage = () => {
  return (
    <div className="px-[100px] py-[80px] sm-max:px-[20px] sm-max:py-[50px] ">
      <div className="h-[auto] w-full bg-[#ff5603] p-[50px]">
        <div className="flex flex-col gap-[50px]">
          <h1 className="text-[20px] text-[white] text-center leading-[40px] sm-max:text-[18px]">
            What We’re Offering
            <br />
            <span className="text-[40px] font-[700] text-[white]">
              Who We Are
            </span>{" "}
          </h1>
          <p className="text-[16px] text-[white] leading-[30px] text-center">
            Cleancart works with an attractive compact mobile unit that allows
            us to have in a small space, each cart is operated by just one
            person and the average service time is 25 minutes. The cleancart
            Washing Carts are fully autonomous. It is not necessary to have them
            connected to water supply or electricity outlets.The cart have
            internal deposits for clean and dirty water, with enough capacity to
            work one whole day without refilling
          </p>
          <div className="flex items-center justify-center">
            <button className="px-6 py-3  bg-[transparent] border-[1px] border-[white] text-white  animate__animated animate__fadeIn animate__delay-2s flex items-center gap-[5px]">
              Read More{" "}
              <IoArrowForwardCircleOutline className="text-[20px] text-[white]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herofourthpage;
