import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar1 = () => {
  return (
    <div className="backgroundImage h-[auto] px-[100px] w-full bg-[#ff5603] flex items-center justify-between p-[10px] sm-max:hidden">
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <div>
            <MdOutlineEmail className="text-[20px] text-[white]" />
          </div>
          <div>
            <h2 className="text-[16px] text-[white]">
              info@cleancartcarwash.com
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div>
            <MdOutlinePhone className="text-[20px] text-[white]" />
          </div>
          <div>
            <h2 className="text-[16px] text-[white]">
              info@cleancartcarwash.com
            </h2>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[10px]">
        <FaInstagram className="text-[20px] text-[white]" />
        <SlSocialFacebook className="text-[20px] text-[white]" />
        <FaWhatsapp className="text-[20px] text-[white]" />
      </div>
    </div>
  );
};

export default Navbar1;
