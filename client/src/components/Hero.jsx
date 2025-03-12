import { useEffect, useState } from "react";
import { images } from "../assets/assets";
import { assets } from "../assets/assets.js";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, [current]); // Re-run effect when "current" changes
  return (
    <div className="px-4 md:px-10 lg:px-40 mt-2">
      {/* Photo Slider */}
      <div className="flex items-center justify-center flex-col lg:flex-row gap-y-6 lg:gap-x-10">
        {/* Main Slider Section */}
        <div className="relative w-full lg:w-3/4">
          <img
            src={images[current]}
            alt="Slide"
            className="w-full h-auto md:h-96 lg:h-full object-cover rounded-lg cursor-pointer"
          />

          {/* Left & Right Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white rounded-full transition"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2  text-white rounded-full transition"
          >
            ▶
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === current ? "bg-white scale-125" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Hero Images Section */}
        <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-x-4 lg:gap-y-8">
          <img
            className="w-full lg:w-full h-32 md:h-40 lg:h-auto rounded-lg cursor-pointer object-cover flex-1"
            src={assets.hero1}
            alt="Hero 1"
          />
          <img
            className="w-full lg:w-full h-32 md:h-40 lg:h-auto rounded-lg cursor-pointer object-cover flex-1"
            src={assets.hero2}
            alt="Hero 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
