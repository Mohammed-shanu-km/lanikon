import React from "react";
import image from "../../assets/suii.jpg";
import { motion } from "framer-motion";

const Herosixthpage = () => {
  // Motion variants for the experience card
  const experienceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="pl-[100px] pt-[130px] pb-[100px] bg-[] flex gap-[140px] relative md-max:gap-[50px] md-max:pl-[30px] md-small:pl-[20px] md-small:pt-[0px] md-small:gap-[40px] md-small:flex-col md-small:pr-[20px] sm-max:pt-[40px] sm-max:pl-[20px] sm-max:pr-[20px] sm-max:flex-col-reverse sm-max:gap-[50px] ">
      {/* Text Section */}
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="sm-max:text-[18px] ">
            <span
              className="text-[20px] font-bold
      bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300
      text-transparent bg-clip-text sm-max:text-[18px]"
            >
              Find Who We Are
            </span>
            <br />
            <span
              className="text-[40px] font-[600] text-[#0a2343] mt-[40px]
      sm-max:text-[28px] sm-max:leading-[30px]"
            >
              We Only Provide Quality <br />
              Care Services
            </span>
          </h1>
          <p className="text-[16px] text-[gray] leading-[30px] sm-max:text-[15px]">
            Lanikon IT Solutions uses efficient and secure technology that is
            safe for your systems and data. It optimizes resources by using
            minimal infrastructure while delivering maximum performance. Our
            specially designed software solutions are implemented to streamline
            your operations, identifying and resolving challenges seamlessly.
            The solutions are then carefully monitored and supported by the
            Lanikon expert team, ensuring smooth performance and enhanced
            productivity, followed by regular updates and maintenance to achieve
            optimal efficiency and reliability.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%] sm-max:pr-[0px]">
        <img
          className="h-[60vh] object-cover md-small:h-[40vh] md-small:w-[100%] md-max:h-[40vh]  sm-max:h-[50vh]"
          src={image}
          alt=""
        />
      </div>

      {/* Experience Card with Motion */}
      <motion.div
        className="h-[200px] w-[200px] bg-[white] shadow-lg absolute top-[35%] bottom-[50%] left-1/2 right-1/2 md-small:hidden sm-max:h-[100px] sm-max:w-[100px] sm-max:top-[50%] sm-max:hidden"
        variants={experienceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="p-[18px]">
          <div className="h-[160px] border-[1px] border-dotted border-[#80808091] flex justify-center flex-col">
            <h1
              className="text-center text-[52px] 
    bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300
    text-transparent bg-clip-text"
            >
              1+
            </h1>
            <p className="text-center text-[20px]">
              Years of <br />
              Experience
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Herosixthpage;
