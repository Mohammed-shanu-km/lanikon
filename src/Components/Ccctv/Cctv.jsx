import React from "react";
import image from "../../assets/r.jpg"

const Cctv = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto bg-white rounded-2xl shadow-xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[42px] font-bold text-[#4c78b3] mb-6 sm-max:text-[28px]">
            CCTV INSTALLATION
          </h1>

          <ul className="space-y-4 text-gray-700 text-[16px] leading-relaxed list-disc pl-5">
            <li>Online Web, Mobile Camera access solution</li>
            <li>DVR, NVR Installation, configuration and Annual maintenance</li>
            <li>
              Bullet Camera, Dome Camera, ANPR Camera, Wireless Camera, PTZ Camera
            </li>
            <li>
              IP Camera, Turret Camera, Varifocal Camera
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="CCTV System"
            className="w-full max-w-[520px] object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* BRAND LOGOS */}
      <div className="max-w-[1400px] mx-auto mt-10 flex flex-wrap justify-center items-center gap-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Hikvision_logo.svg"
          alt="Hikvision"
          className="h-10 object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Dahua_Technology_logo.svg"
          alt="Dahua"
          className="h-10 object-contain"
        />
      </div>
    </section>
  );
};

export default Cctv;
