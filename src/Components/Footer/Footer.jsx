import React from "react";
import "./Footer.css";
import { FaLocationDot, FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import image from "../../assets/la.svg"
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
 return (
    <div className='footer  w-full px-[100px] pt-[60px] pb-[20px]  sm-max:px-[15px]'>
      <div className='flex justify-around sm-max:flex-col sm-max:gap-[20px]'>
        <div className='sm-max:hidden'>
          <img className='object-cover w-[250px]' src={image} alt='Logo' />
        </div>
        
          <div className='flex flex-col  gap-[10px]'>
          <h1 className='text-white font-[600]'>Quick Links</h1>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/'>Home</Link>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/about'>About</Link>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/services'>Services</Link>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/contact'>Contact</Link>
        </div>
          <div className='flex flex-col  gap-[10px]'>
          <h1 className='text-white font-[600]'>Solutions</h1>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/'>Pos system and software</Link>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/about'>Customized Software</Link>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/services'>Web Design</Link>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/contact'>laptop and system services</Link>
        </div>
        
        <div className='flex flex-col  gap-[10px]'>
          <h1 className='text-white font-[600]'>Contact Us</h1>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/'>CWS-1V-223278 26th Floor,<br/> Amber Gem Tower, Ajman</Link>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/about'>+971 566445949</Link>
          <Link className='text-[#d5d2d2] text-[16px] font-normal' to='/services'>lanikoninformation@gmail.com</Link>
 
        </div>
        
       
      </div>
      
      <div className='w-[100%] h-[1px] bg-[gray] mt-[30px]'></div>
      <h1 className='mt-[50px] text-center text-[14px] text-[gray]'>Copyright © 2026 LANIKON</h1>
    </div>
  );
};

export default Footer;
