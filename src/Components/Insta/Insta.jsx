import React from "react";
import { BsInstagram } from "react-icons/bs";

const Insta = () => {
  return (
    <a
      href="https://www.instagram.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-28 w-16 h-16 bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 rounded-full z-50 flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300"
    >
      {/* Glow Animation */}
      <span className="absolute w-full h-full rounded-full opacity-50 animate-pulse bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400"></span>
      <BsInstagram className="text-white w-8 h-8 relative z-10" />
    </a>
  );
};

export default Insta;
