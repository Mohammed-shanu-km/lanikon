import React, { useEffect, useRef, useState } from "react";
import screen from "../../assets/sc.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import image from "../../assets/globel.svg";
import { useInView, motion } from "framer-motion"; // <-- import motion
import { Link } from "react-router-dom";
import image1 from "../../assets/salim.svg";

const CounterItem = ({ value, label, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const increment = Math.ceil(value / (duration / 16));

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, value]);

  return (
    <div className="flex flex-col items-center gap-[5px] sm-max:items-start">
      <h2
        className="text-[40px] font-bold
        bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300
        text-transparent bg-clip-text sm-max:text-[32px]"
      >
        {count}+
      </h2>
      <p className="text-[15px] text-[#0a2343] font-[500] text-center sm-max:text-left">
        {label}
      </p>
    </div>
  );
};

const Herosecond = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Button animation variant
  const buttonMotion = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="w-full pr-[150px] py-[80px] flex flex-row-reverse gap-[100px]
      md-max:py-[50px] md-max:px-[30px] md-max:gap-[50px]
      md-small:px-[20px] md-small:py-[40px] md-small:flex-col
      sm-max:px-[20px] sm-max:py-[50px] sm-max:flex-col-reverse sm-max:gap-[50px]"
    >
      {/* TEXT SECTION */}
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
        <div className="flex flex-col gap-[25px] sm-max:gap-[15px]">
          <h1 className="text-[20px] text-[#ff5603] leading-[40px] sm-max:text-[18px]">
            <div>
              <span
                className="text-[32px] sm-max:text-[24px] font-bold
                bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300
                text-transparent bg-clip-text"
              >
                Lanikon
              </span>
            </div>
            <span className="text-[40px] font-[600] text-[#0a2343] sm-max:text-[28px]">
              Who We Are
            </span>
          </h1>

          <p className="text-[16px] text-[gray] mt-[-20px] leading-[30px] sm-max:text-[15px]">
            Lanikon is a forward-thinking IT solutions company specializing in
            POS systems, web design, and smart security solutions. We help
            businesses modernize their operations with reliable, user-friendly,
            and scalable technology. Our solutions are designed for retail
            stores, restaurants, offices, and growing enterprises, enabling them
            to manage sales, improve security, and strengthen their digital
            presence with ease. From powerful POS machines to custom-built
            websites and advanced security systems, Lanikon delivers technology
            that works for your business—today and tomorrow. At Lanikon, we
            combine innovation with affordability to provide smart IT solutions
            that drive efficiency, growth, and long-term success.
          </p>

          {/* DIVIDER */}
          <div className="h-[1px] w-full bg-[#8080807d]"></div>

          {/* COUNTERS */}
          <div
            className="w-full flex justify-between items-center py-[20px]
          sm-max:flex-col sm-max:items-start sm-max:gap-[25px]"
          >
            <CounterItem
              value={20}
              label="Projects Delivered"
              inView={isInView}
            />
            <CounterItem
              value={17}
              label="Customer Satisfaction"
              inView={isInView}
            />
            <CounterItem value={2} label="Countries Served" inView={isInView} />
          </div>

          {/* BUTTON */}
          <div className="w-full flex gap-[20px] items-center sm-max:flex-col sm-max:items-start sm-max:gap-[30px]">
            <motion.div
              variants={buttonMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <Link to="/about">
                <button
                  className="h-[50px] w-[220px] rounded-[100px]
                bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300
                text-white hover:opacity-90 sm-max:w-[180px] sm-max:text-[14px]"
                >
                  Know more about us
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
        <img
          className="h-[80vh] object-cover md-max:h-[45vh]
          md-small:h-[40vh] md-small:w-[100%] sm-max:h-[40vh]"
          src={image}
          alt="Global Reach"
        />
      </div>
    </div>
  );
};

export default Herosecond;
