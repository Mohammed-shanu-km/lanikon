import React from "react";
import wash from "../../assets/pos.jpg";
import wash2 from "../../assets/soft.jpg";
import wash3 from "../../assets/des.jpg";
import wash4 from "../../assets/park.jpg";
import wash5 from "../../assets/lap.jpg";
import wash6 from "../../assets/cctc.jpg";
import wash7 from "../../assets/lapser.jpg";
import wash8 from "../../assets/smart.jpg";
import wash9 from "../../assets/gps.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocalCarWash } from "react-icons/md";
import { TbCarSuv } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
import { motion } from "framer-motion";

const Herothirdpage = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // List of cards with images and titles
  const cards = [
    {
      img: wash,
      title: "Pos system and software",
      desc: "Our POS systems and software provide fast, accurate, and secure transaction management, helping businesses streamline sales and inventory with ease.",
    },
    {
      img: wash2,
      title: "Customized software",
      desc: "We develop customized software tailored to your business needs, helping you automate processes, improve efficiency, and achieve better control over your operations.",
    },
    {
      img: wash3,
      title: "Web design",
      desc: "Our web design services combine creativity and technology to build visually stunning and high-performing websites. We focus on user experience, mobile responsiveness, and clean layouts ",
    },
    {
      img: wash4,
      title: "Car parking systems",
      desc: " We provide smart Car Parking System services that automate vehicle entry and exit, improve space management, and ensure secure and efficient parking operations.",
    },
    {
      img: wash5,
      title: "Computer and laptop",
      desc: "We provide reliable computer and laptop services including sales, setup, repair, and maintenance to ensure smooth and efficient performance.",
    },
    {
      img: wash6,
      title: "Cctv camera system",
      desc: "We provide professional CCTV camera system services for surveillance, monitoring, and security of homes, offices, and commercial spaces.  ",
    },
    {
      img: wash7,
      title: "Laptop and system services",
      desc: "We provide professional laptop and system services including installation, repair, and maintenance to ensure reliable and smooth performance  ",
    },
    {
      img: wash8,
      title: "Remote gate system",
      desc: "We provide remote gate system services for automated gate control, secure access, and smooth entry and exit management ",
    },
     {
  img: wash9,
  title: "GPS Vehicle Tracking System",
  desc: "We provide GPS vehicle tracking system services for real-time location monitoring, route tracking, and improved vehicle security.",
},

  ];

  return (
    <div className="herothird w-full px-[100px] py-[40px] md-max:px-[30px] md-small:px-[20px] sm-max:px-[20px] sm-max:py-[20px]">
      <div className="flex items-center justify-center flex-col gap-[15px]">
        <h1 className="text-center sm-max:text-[18px]">
          <span
            className="text-[20px] font-bold
      bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300
      text-transparent bg-clip-text sm-max:text-[18px]"
          >
            Tailored Solutions
          </span>
          <br />
          <span
            className="text-[40px] font-[600]
      text-[#0a2343] sm-max:text-[28px] sm-max:leading-[30px] "
          >
            Smart Solutions for Modern Spaces
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-[40px] mt-[100px] md-small:grid-cols-2 md-small:gap-[20px] sm-max:grid-cols-1 sm-max:mt-[70px] sm-max:gap-[40px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="h-[auto] bg-[] p-[20px] flex flex-col gap-[20px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            <div>
              <div className="relative group">
                <img
                  className="mt-[-50px] rounded-[20px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={card.img}
                  alt={card.title}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[10px] mt-[10px]">
              <h1 className="text-left text-[24px] font-[500] sm-max:text-[22px]">
                {card.title}
              </h1>
              <p className="text-[15px] text-[gray] leading-[30px] text-left sm-max:text-[15px]">
                {card.desc}
              </p>
             
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Herothirdpage;
