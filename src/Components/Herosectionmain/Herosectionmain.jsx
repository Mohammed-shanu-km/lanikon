import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Herosectionmain.css";

const Herosectionmain = () => {
  const images = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Changed to 2s to allow the "slow" animation to breathe
    return () => clearInterval(interval);
  }, [images.length]);

  // Animation variants for the text
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="heromain relative w-full h-[100vh] overflow-hidden flex items-center justify-left px-[100px] sm-max:px-[20px]">
      
      {/* BACKGROUND ANIMATION LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }} // Slow cross-fade
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[currentIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-left justify-center">
        {/* Heading */}
        <motion.h2
          className="text-[60px] text-left font-[500] text-[white] leading-[90px] mb-4 md-small:text-[42px] md-small:leading-[50px] sm-max:text-[32px] sm-max:font-[600] sm-max:leading-[42px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          Top-Rated IT
          <br />
          Services for Scalable
          <br />
          Business Growth.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-[white] max-w-[600px] mt-4 sm-max:mt-[-2px] sm-max:text-[15px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          We deliver reliable IT solutions designed to streamline operations,
          enhance security, and support your business as it grows.
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-[30px] items-center mt-[40px]">
          <motion.div
            variants={buttonLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <Link to="/about">
              <button className="h-[50px] w-[180px] rounded-[100px] bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300 text-white hover:opacity-90 sm-max:w-[140px] sm-max:text-[14px] sm-max:mt-[-10px]">
                Explore More
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Herosectionmain;