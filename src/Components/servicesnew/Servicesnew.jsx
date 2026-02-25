import React from "react";
import { motion } from "framer-motion";
import serviceimg from "../../assets/elv3.jpg"; // change path to your image

const Servicesnew = () => {
  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="px-[100px] py-[80px] sm-max:py-[20px] sm-max:px-[20px] sm-max:hidden">
      <div className="relative w-full rounded-[25px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src={serviceimg}
          alt="service"
          className="w-full h-[450px] object-cover sm-max:h-[100%]"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#0a2343]/80"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[550px] px-[60px] md:px-[30px] sm-max:max-w-[100%] sm-max:px-[20px] text-white">
            {/* Heading */}
            <motion.h2
              className="text-[45px] leading-[55px] font-[600] sm-max:text-[32px]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let’s Connect &<br /> Secure Your Future
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="mt-[20px] text-[16px] leading-[28px] text-gray-200 sm-max:text-[16px]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Looking for smart IT and automation solutions? Contact Lanikon
              Information Technology for reliable design, installation, and
              support. Let’s secure, connect, and future-proof your business
              today
            </motion.p>

            {/* Buttons & Call */}
            <motion.div
              className="mt-[30px] flex items-center gap-[20px] flex-wrap"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* BUTTON */}
              <button
                className="bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300
                text-white px-[30px] py-[14px] rounded-full font-[600] inline-flex items-center gap-[8px]"
              >
                Contact us
                <span>↗</span>
              </button>

              <span className="text-white font-[600]">OR</span>

              {/* CALL */}
              <div className="flex items-center gap-[12px]">
                <div className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center text-[#0a2343] text-[18px]">
                  📞
                </div>
                <div>
                  <p className="text-[14px] text-gray-200">Call us any time</p>
                  <p className="font-[600]">+971 566445949</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesnew;
