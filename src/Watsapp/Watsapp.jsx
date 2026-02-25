import React, { useState } from "react";
import {
  BsWhatsapp,
  BsInstagram,
  BsTelephone,
  BsChatDotsFill,
} from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Watsapp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      id: 1,
      icon: <BsWhatsapp className="w-6 h-6" />,
      color: "bg-[#25d366]",
      link: "https://api.whatsapp.com/send?phone=+971 56 644 5949&text=Hi%20there",
      label: "WhatsApp",
    },
    {
      id: 2,
      icon: <BsInstagram className="w-6 h-6" />,
      color: "bg-pink-500",
      link: "https://www.instagram.com/lanikonuae/",
      label: "Instagram",
    },
    {
      id: 3,
      icon: <BsTelephone className="w-6 h-6" />,
      color: "bg-blue-500",
      link: "tel:+971566445949",
      label: "Call Us",
    },
  ];

  return (
    <div className="fixed bottom-[40px] right-[40px] z-50 flex flex-col items-center gap-4">
      {/* Expanded Buttons */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 transform ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10"}`}
      >
        {actions.map((action) => (
          <a
            key={action.id}
            href={action.link}
            target="_blank"
            rel="noreferrer"
            className={`${action.color} w-[50px] h-[50px] rounded-full flex justify-center items-center text-white shadow-lg hover:scale-110 transition-transform`}
            title={action.label}
          >
            {action.icon}
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-[60px] h-[60px] bg-slate-800 rounded-full text-white flex justify-center items-center shadow-2xl focus:outline-none"
      >
        {/* Ping Animation (only visible when closed) */}
        {!isOpen && (
          <div className="absolute inset-0 w-full h-full bg-slate-800 rounded-full animate-ping opacity-40"></div>
        )}

        {/* Icon Switch */}
        {isOpen ? (
          <IoClose className="w-8 h-8 transition-all rotate-90" />
        ) : (
          <BsChatDotsFill className="w-7 h-7 transition-all" />
        )}
      </button>
    </div>
  );
};

export default Watsapp;
