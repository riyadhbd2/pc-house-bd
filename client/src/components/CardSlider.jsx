import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cards } from "../assets/assets";

const CardSlider = () => {
  return (
    <div className="relative w-full px-5 lg:px-20 my-10 ">
      {/* Custom Navigation Buttons */}
      <button
        className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 
        w-10 h-10 bg-black text-white rounded-full shadow-lg hover:bg-red-700 flex items-center justify-center"
      >
        <FaChevronLeft size={16} />
      </button>

      <button
        className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-20 
        w-10 h-10 bg-black text-white rounded-full shadow-lg hover:bg-red-700 flex items-center justify-center"
      >
        <FaChevronRight size={16} />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{
          nextEl: ".custom-next", 
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p>{card.price}</p>
                <button className="bg-gray-300 px-2 py-1 rounded-md">ADD TO CART</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
