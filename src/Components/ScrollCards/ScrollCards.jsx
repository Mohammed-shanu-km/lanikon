import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const slides = [
  { title: "Slide One", text: "Full Screen Experience", bg: "bg-red-500" },
  { title: "Slide Two", text: "Smooth Transitions", bg: "bg-blue-500" },
  { title: "Slide Three", text: "Sticky Positioning", bg: "bg-green-500" },
  { title: "Slide Four", text: "Almost there...", bg: "bg-purple-500" },
  { title: "Slide Five", text: "End of Slider", bg: "bg-yellow-500" },
];

export default function FullScreenSlider() {
  const targetRef = useRef(null);

  // We track the scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform: from 0% (start) to -80% (end for 5 slides)
  // Formula: -((Total Slides - 1) * 100)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(slides.length - 1) * 100}%`]);

  return (
    <main className="bg-neutral-900">
      {/* 1. Introductory Content */}
   

      {/* 2. The Scroll Track (Controls how long the user stays here) */}
      <section ref={targetRef} className="relative h-[400vh]">
        
        {/* 3. The Sticky Window (The "Full Screen" viewport) */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          
          {/* 4. The Moving Ribbon */}
          <motion.div style={{ x }} className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center text-white ${slide.bg}`}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <h1 className="text-7xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-2xl">{slide.text}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

     
    </main>
  );
}