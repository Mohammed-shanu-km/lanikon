import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaPalette, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import nousuImg from "../../assets/nousu.jpeg";
import coustum from "../../assets/cs.jpeg";
import webdesign from "../../assets/wd.jpeg";
import gps from "../../assets/gps.jpeg";
import computer from "../../assets/lp.jpeg";
import cctv from "../../assets/cc.jpeg";
import sales from "../../assets/sales.jpeg";
import gate from "../../assets/auto.jpeg";
import bio from "../../assets/bio.jpeg";


const services = [
  {
    id: "01",

    title: "POS System & Software",
    desc: "Complete Point of Sale hardware and software solutions designed for retail and hospitality, featuring real-time inventory and sales analytics..",
    img:nousuImg,
  },
  {
    id: "02",

    title: "Customized Software",
    desc: "Bespoke software development tailored to your unique business logic, ensuring maximum efficiency, scalability, and performance.",
    img: coustum ,
  },
  {
    id: "03",

    title: "Web Design & Development",
    desc: "High-performance, responsive websites built with modern frameworks to enhance your brand's digital presence and user engagement..",
    img:webdesign,
  },
  {
    id: "04",

    title: "GPS Systems",
   desc: "GPS System solutions for real-time vehicle tracking, route monitoring, and location-based management.",
    img: gps,
  },
  {
    id: "05",

    title: "Computer & Laptop Sales",
    desc: "A wide range of high-end business laptops and desktop computers from leading brands, configured to meet your specific workload requirements..",
    img:sales,
  },
  {
    id: "06",

    title: "CCTV Camera Systems",
    desc: "Advanced surveillance solutions with high-definition recording and remote mobile viewing to protect your business 24/7..",
    img:cctv,
  },
  {
    id: "07",

    title: "Laptop & System Services",
    desc: "Expert maintenance and repair services for all IT hardware, ensuring minimal downtime and peak system performance for your team..",
    img: computer,
  },
  {
    id: "08",

    title: "Remote Gate Systems",
    desc: "Secure and convenient automated gate entry systems with remote access control for residential and industrial properties.",
    img:gate,
  },
  {
    id: "09",

    title: "Biometric & Attendance",
    desc: "Streamline HR operations with high-precision biometric scanners and intercom systems for secure time-tracking and access control..",
    img: bio,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20 px-6 sm-max:py-[40px]">
      {/* Heading */}
      <div className="flex items-center justify-center flex-col gap-[15px]">
        <h1 className="text-center sm-max:text-[18px]">
          <span
            className="
    text-[20px] font-bold
    text-transparent bg-clip-text
    bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300
    sm-max:text-[18px]
  "
          >
            Tailored Solutions
          </span>

          <br />
          <span
            className="
              text-[40px] font-[600]
              text-[#0a2343]
              sm-max:text-[28px] sm-max:leading-[30px] 
            "
          >
            Smart Solutions for Modern Spaces
          </span>
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-[1400px] mt-[50px] mx-auto grid grid-cols-3 sm-max:grid-cols-1  lg:grid-cols-3 gap-8">
        {services.map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              border border-gray-200
              rounded-2xl
              p-8
              shadow-lg shadow-gray-200/50
              hover:-translate-y-2
              hover:shadow-xl
              transition-all duration-300
            "
          >
            {/* Top */}
            <div className="flex justify-between items-center">
              <div className="text-indigo-600 text-3xl">{item.icon}</div>
              <span className="text-5xl font-bold text-gray-200">
                {item.id}
              </span>
            </div>
            <div className="mt-6 relative rounded-xl overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[230px] object-cover"
              />

              <button
                className="
                  absolute bottom-4 right-4
                  w-11 h-11
                  rounded-full
                  bg-gradient-to-r from-indigo-600 to-blue-500
                  flex items-center justify-center
                  text-white text-xl
                  hover:scale-110
                  transition
                "
              >
                <FiArrowRight />
              </button>
            </div>

            {/* Content */}
            <h3 className="text-[24px] font-[500] mt-6 mb-4 text-[#0a2343]">
              {item.title}
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {item.desc}
            </p>

            {/* Image */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
