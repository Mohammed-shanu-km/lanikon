import React from "react";
import image from "../../assets/rahee.jpg";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { motion } from "framer-motion";

const Herofifthpage = () => {
  // Animation variants for the service cards
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // List of services
  const services = [
    "Pos system and software",
    "customized software",
    "web design",
    "car parking systems",
    "computer and laptop",
    "cctv camera system",
    "laptop and system services",
    "remote gate system",
  ];

  return (
    <div className="flex gap-[60px] bg-[] h-[110vh] md-max:h-[60vh] md-max:gap-[50px] md-small:h-[115vh] md-small:gap-[40px] md-small:flex-col sm-max:flex-col sm-max:gap-[40px] sm-max:h-[auto]">
      
      {/* Image Section */}
      <div className="w-[50%] pt-[80px] md-small:w-[100%] md-small:pt-[30px] sm-max:w-[100%] sm-max:pt-[40px]">
        <div className="relative">
          <img
            className="h-[100vh] object-cover md-max:h-[55vh] md-small:h-[40vh] md-small:w-[100%] sm-max:h-[50vh] sm-max:object-cover"
            src={image}
            alt=""
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="w-[50%] pr-[100px] pt-[80px] md-small:w-[100%] md-small:pr-[20px] md-small:pl-[20px] md-small:pt-[10px] sm-max:w-[100%] sm-max:pt-[0px] sm-max:p-[20px]">
        <div className="flex flex-col gap-[20px] sm-max:gap-[0px]">
          
          {/* Heading */}
          <h1 className="sm-max:text-[18px]">
            <span
              className="text-[20px] font-bold
      bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300
      text-transparent bg-clip-text sm-max:text-[18px]"
            >
              Our Service Benefits
            </span>
            <br />
            <span
              className="text-[40px] font-[600] text-[#0a2343]
      sm-max:text-[28px] sm-max:leading-[28px] sm-max:text-center"
            >
              How We Make IT Easy for You
            </span>
          </h1>

          {/* Description */}
          <p className="text-[16px] text-[gray] leading-[30px] sm-max:text-[15px]">
           We follow a streamlined process to deliver smart IT solutions. From understanding your needs to implementing and supporting the right technology, we ensure efficient and reliable results.
          </p>

          {/* Service Cards */}
          <div className="flex flex-col gap-[15px] ">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="w-full h-[50px] shadow-md p-[20px] bg-[white] flex items-center gap-[10px]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.30,
                  ease: "easeOut",
                }}
              >
                <IoCheckmarkDoneCircle className="text-[23px] text-[#2b6bec]" />
                <h1 className="text-[16px] font-[500] text-[#123332] sm-max:text-[16px]">
                  {service}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herofifthpage;
