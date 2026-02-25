import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"; // For smooth fade effect
import "swiper/css/autoplay"; // For autoplay functionality
import sliderone from "../../assets/image1.jpg";
import slidertwo from "../../assets/athul.jpg";
import sliderthree from "../../assets/motta.jpg";
import sliderfour from "../../assets/salim.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

// Import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Heroslider() {
  return (
    <>
      <Swiper
        spaceBetween={30} // Space between slides
        autoplay={{
          delay: 3000, // Time between slides in ms (3 seconds)
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        }}
        effect="fade" // Smooth fade effect for transitions
        speed={1000} // Duration of the transition (1 second)
        modules={[Autoplay, EffectFade]} // Include Autoplay and EffectFade modules
        className="mySwiper" // Custom class for styling
      >
        <SwiperSlide>
          <div className="relative h-[85vh] w-full ">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={slidertwo}
              alt="Slider Image 1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 flex  items-center">
              <Section>
                <div className="text-white text-left  px-[100px] flex flex-col gap-[20px] sm-max:px-[20px]">
                  <h2 className="text-[42px] font-[700] text-[white] leading-[50px]  mb-4 animate__animated animate__fadeIn animate__delay-1s  sm-max:text-[32px] sm-max:leading-[42px]">
                    Save Water And <br className="sm-max:hidden" /> Save Earth
                  </h2>
                  <div>
                    <button className="px-6 py-3  bg-[#e7492c] text-white  animate__animated animate__fadeIn animate__delay-2s flex items-center gap-[5px]">
                      Read More{" "}
                      <IoArrowForwardCircleOutline className="text-[20px] text-[white]" />
                    </button>
                  </div>
                </div>
              </Section>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[85vh] w-full ">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={sliderone}
              alt="Slider Image 2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 flex  items-center">
              <div className="text-white text-left  px-[100px] flex flex-col gap-[20px] sm-max:px-[20px]">
                <h2 className="text-[42px] font-[700] text-[white] leading-[50px]  mb-4 animate__animated animate__fadeIn animate__delay-1s  sm-max:text-[32px] sm-max:leading-[42px]">
                  The Revolutionary Mobile <br className="sm-max:hidden" /> Carwash Concept
                </h2>
                <div>
                  <button className="px-6 py-3  bg-[#e7492c] text-white  animate__animated animate__fadeIn animate__delay-2s flex items-center gap-[5px]">
                    Read More{" "}
                    <IoArrowForwardCircleOutline className="text-[20px] text-[white]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[85vh] w-ful px-[100px]">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={slidertwo}
              alt="Slider Image 3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 flex  items-center ">
              <div className="text-white text-left  px-[100px] flex flex-col gap-[20px] sm-max:px-[20px]">
                <h2 className="text-[42px] font-[700] text-[white] leading-[50px]  mb-4 animate__animated animate__fadeIn animate__delay-1s sm-max:text-[32px] sm-max:leading-[42px]">
                  Eco-Friendly <br className="sm-max:hidden" /> Carwash
                </h2>
                <div>
                  <button className="px-6 py-3  bg-[#e7492c] text-white  animate__animated animate__fadeIn animate__delay-2s flex items-center gap-[5px]">
                    Read More{" "}
                    <IoArrowForwardCircleOutline className="text-[20px] text-[white]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[85vh] w-full px-[100px]">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={sliderthree}
              alt="Slider Image 4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 flex  items-center ">
              <div className="text-white text-left  px-[100px] flex flex-col gap-[20px] sm-max:px-[20px]">
                <h2 className="text-[42px] font-[700] text-[white] leading-[50px]  mb-4 animate__animated animate__fadeIn animate__delay-1s sm-max:text-[32px] sm-max:leading-[42px]">
                  The Revolutionary Mobile <br className="sm-max:hidden" /> Carwash Concept
                </h2>
                <div>
                  <button className="px-6 py-3  bg-[#e7492c] text-white  animate__animated animate__fadeIn animate__delay-2s flex items-center gap-[5px]">
                    Read More{" "}
                    <IoArrowForwardCircleOutline className="text-[20px] text-[white]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
