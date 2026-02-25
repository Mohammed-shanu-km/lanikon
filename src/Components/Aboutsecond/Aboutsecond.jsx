import React from "react";
import aboutimage from "../../assets/mm.jpg";
import { motion } from "framer-motion";

const Aboutsecond = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="px-[100px] py-[40px]
      md-max:px-[30px] md-max:py-[50px]
      md-small:px-[20px] md-small:py-[40px]
      sm-max:px-[20px] sm-max:py-[0px]"
    >
      {/* TITLE SECTION */}
      <motion.div
        className="text-left max-w-[900px]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="text-[14px] tracking-widest text-gray-400">
          MISSION AND VISION
        </span>

        <h2
          className="mt-[10px] text-[40px] font-[500] text-[#0a2343]
          leading-[60px] sm-max:text-[32px] sm-max:leading-[42px]"
        >
          Guided by Purpose, Driven by Innovation
        </h2>

        <p className="mt-[20px] text-[16px] text-gray-500 leading-[30px]">
          Our mission and vision drive us to deliver smart, secure, and
          connected solutions while building trusted relationships through
          innovation, quality service, and long-term client satisfaction.
        </p>
      </motion.div>

      {/* GRID SECTION */}
      <div
        className="mt-[60px] grid grid-cols-2 gap-[50px]
        sm-max:grid-cols-1 sm-max:gap-[30px] sm-max:mt-[px]"
      >
        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={aboutimage}
            alt="Team"
            className="rounded-[18px] w-full h-[] object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-[30px]">
          {/* MISSION */}
          <motion.div
            className="bg-white p-[35px] rounded-[20px] shadow-lg relative transition-all duration-300 
            hover:bg-gradient-to-br hover:from-blue-900 hover:via-blue-600 hover:to-sky-300 group"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <div className="absolute top-[20px] right-[20px] text-sky-400 text-[28px] group-hover:text-white transition">
              ⚡
            </div>

            <h3 className="text-[24px] text-[#0a2361] font-[600] group-hover:text-white transition">
              Our Mission
            </h3>

            <p className="mt-[15px] text-[15px] leading-[28px] text-gray-500 group-hover:text-white transition">
              To deliver innovative IT systems and security solutions that
              exceed client expectations, while fostering long-term
              relationships built on trust, quality, safety, and exceptional
              service.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            className="bg-white p-[35px] rounded-[20px] shadow-lg relative transition-all duration-300 
            hover:bg-gradient-to-br hover:from-blue-900 hover:via-blue-600 hover:to-sky-300 group"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          >
            <div className="absolute top-[20px] right-[20px] text-sky-400 text-[28px] group-hover:text-white transition">
              ⚡
            </div>

            <h3 className="text-[24px] text-[#0a2361] font-[600] group-hover:text-white transition">
              Our Vision
            </h3>

            <p className="mt-[15px] text-[15px] leading-[28px] text-gray-500 group-hover:text-white transition">
              To be a leading IT systems and security solutions provider,
              recognized for innovation, reliability, and exceptional client
              service, shaping a smarter and safer future for businesses
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsecond;
