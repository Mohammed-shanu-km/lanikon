import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = () => {
  return (
    <div>
        <a
              href="https://api.whatsapp.com/send?phone=+971506419748&text=Hi%20there"
              className="fixed w-[60px] h-[60px] bottom-[80px] right-[40px] bg-[#25d366] rounded-[50px] z-40 text-white flex justify-center items-center"
              target='blank'
            >
              <div className="fixed w-[60px] h-[60px] bottom-[80px] right-[40px] z-40">
                <div className="animate-ping w-full h-full bg-[#25d366] opacity-75 rounded-full absolute"></div>
              </div>
              <BsWhatsapp className="w-8 h-8" />
            </a>
    </div>
  )
}

export default Whatsapp