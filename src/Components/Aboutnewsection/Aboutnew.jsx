import React from "react";
import screen from "../../assets/sc.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import image from "../../assets/poss.jpg";
import { Link } from "react-router-dom";
import image1 from "../../assets/salim.svg";
import { motion } from "framer-motion";

const Aboutnew = () => {
  // Motion variants for text and image
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className="w-full px-[100px] py-[80px] flex gap-[80px]
      md-max:py-[50px] md-max:px-[30px] md-max:gap-[50px]
      md-small:px-[20px] md-small:py-[40px] md-small:flex-col
      sm-max:px-[20px] sm-max:py-[50px] sm-max:flex-col-reverse sm-max:gap-[40px]"
    >
      {/* TEXT SECTION (40%) */}
      <motion.div
        className="w-[55%] md-small:w-[100%] sm-max:w-[100%]"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-[25px] sm-max:gap-[15px] sm-max:mt-[-20px]">
          <h1 className="text-[20px] leading-[40px] sm-max:text-[18px] sm-max:leading-[35px]">
            <div>
              <span className="text-[30px] font-[500] sm-max:text-[24px] text-[#0a2343]">
                Lanikon IT: Premier Solutions for Clients Who Wish to Be the Best
              </span>
            </div>
          </h1>

          <p className="text-[16px] text-[gray] mt-[-10px] leading-[30px] sm-max:text-[15px]">
            Located in the Amber Gem Tower in Ajman, Lanikon Information
            Technology is a premier service provider dedicated to clients who
            strive for excellence. Managed by Noushad, we specialize in
            delivering high-quality IT infrastructure and security solutions
            tailored to meet the demands of modern businesses.
          </p>

          <p className="text-[16px] text-[gray] mt-[-10px] leading-[30px] sm-max:text-[15px]">
            Our expertise covers a wide range of services, including POS
            systems, customized software, and web design, alongside advanced
            security features like CCTV, biometric attendance, and GPS vehicle
            tracking. From laptop repairs to automated car parking systems, we
            provide the essential technology tools needed to streamline your
            operations and secure your future.
          </p>
          {/* DIVIDER can be added here if needed */}
        </div>
      </motion.div>

      {/* IMAGE SECTION (60%) */}
      <motion.div
        className="w-[45%] md-small:w-[100%] sm-max:w-[100%] flex justify-center"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          className="h-[60vh]  object-cover rounded-[12px]
          md-max:h-[45vh]
          md-small:h-[40vh] md-small:w-[100%]
        
          sm-max:h-[35vh]  sm-max:w-[100%]"
          
          src={image}
          alt="About Us"
        />
      </motion.div>
    </div>
  );
};

export default Aboutnew;
