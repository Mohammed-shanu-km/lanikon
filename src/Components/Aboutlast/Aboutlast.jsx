import React from "react";
import { motion } from "framer-motion";
import shanu from "../../assets/pattern.svg";

const Aboutlast = () => {
  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative w-full py-[100px] px-[100px] overflow-hidden bg-white
    sm-max:px-[20px] sm-max:py-[20px]"
    >
      {/* LEFT BACKGROUND PATTERN */}
      <div className="absolute left-0 top-0 w-[50%] h-full opacity-20 pointer-events-none">
        <img src={shanu} alt="pattern" className="w-full h-full object-cover" />
      </div>

      {/* RIGHT BACKGROUND PATTERN */}
      <div className="absolute right-0 top-0 w-[50%] h-full opacity-20 pointer-events-none">
        <img src={shanu} alt="pattern" className="object-cover" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center flex flex-col items-center gap-[20px] sm-max:gap-[0px]">
        <motion.span
          className="text-[14px] tracking-wide text-[#0a2361] font-[600] uppercase"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get started today
        </motion.span>

        <motion.h2
          className="mt-[20px] text-[48px] leading-[60px] font-[600] text-[#0a2361]
          md:text-[36px] md:leading-[46px]
          sm-max:text-[32px] sm-max:leading-[45px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Let’s Build Smarter,
          <br />
          Safer Spaces Together
        </motion.h2>

        <motion.p
          className="mt-[20px] text-[16px] leading-[28px] text-gray-500 max-w-[650px] mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Partner with Lanikon today — your trusted experts in delivering
          future-ready IT systems designed for performance and peace of mind.
        </motion.p>

        <motion.button
          className="mt-[35px] inline-flex items-center gap-[10px]
  bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300
  text-white px-[35px] py-[14px]
  rounded-full font-[600]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Contact us
          <span className="text-[18px]">↗</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Aboutlast;
