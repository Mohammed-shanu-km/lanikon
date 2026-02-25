import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 20,
    suffix: "+",
    title: "Projects Delivered",
    desc: "Smart, secure, and connected solutions across sectors",
  },
  {
    value: 1,
    suffix: "+",
    title: "Years of Expertise",
    desc: "Combining technical know-how with industry insight",
  },
  {
    value: 25,
    suffix: "+",
    title: "Industries Served",
    desc: "Custom ELV, ICT & automation solutions for diverse domains",
  },
  {
    value: 99,
    suffix: "%",
    title: "Client Satisfaction",
    desc: "Long-term partnerships built on trust and quality service",
  },
];

const Aboutnewtwo = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Intersection Observer to start count
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  // Counter logic
  useEffect(() => {
    if (!startCount) return;

    stats.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 1500;
      const increment = end / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 20);
    });
  }, [startCount]);

  // Framer Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div ref={sectionRef} className="px-[100px] py-[60px] bg-white sm-max:px-[20px] sm-max:py-[40px]">
      <div
        className="grid grid-cols-4 gap-[25px] 
        sm-max:grid-cols-1 sm:grid-cols-1"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#f6f6f6] p-[40px] rounded-[30px] transition-all duration-300 hover:shadow-xl"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-[50px] font-[500] text-[#0a2361]">
              {counts[index]}
              {item.suffix}
            </h2>

            <h4 className="mt-[20px] text-[20px] font-[600] text-[#0a2361]">
              {item.title}
            </h4>

            <p className="mt-[10px] text-[15px] leading-[26px] text-gray-500">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Aboutnewtwo;
