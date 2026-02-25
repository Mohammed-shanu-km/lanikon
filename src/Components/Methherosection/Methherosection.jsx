import React from "react";
import "./Methhero.css";
import { Link } from "react-router-dom";

const Methherosection = () => {
  return (
    <>
      <div className="meth-hero relative">
        <div className="px-[100px] pt-[100px] md-max:px-[30px] md-small:px-[20px] sm-max:px-[20px]">
          <div className="flex flex-col mt-[80px]">
            <h1 className="text-[20px] text-center text-white font-[400] md-small:text-[32px] sm-max:text-[16px] sm-max:mt-[-50px]">
              SERVICES
            </h1>

            <h2 className="text-center text-[45px] text-white font-[600] mt-[20px] sm-max:text-[22px]">
              Our Process for Smarter,
              <br />
              Safer
            </h2>
          </div>

          {/* Breadcrumb (optional – same as About style) */}
          {/* 
          <div className="h-[50px] w-[200px] bg-white absolute bottom-0 right-12 flex items-center justify-center">
            <Link to={"/"}>
              <h2 className="text-[16px] text-black sm-max:text-[16px]">
                Home <span className="text-[#38bdf8]">/ Methodology</span>
              </h2>
            </Link>
          </div>
          */}
        </div>
      </div>
    </>
  );
};

export default Methherosection;
