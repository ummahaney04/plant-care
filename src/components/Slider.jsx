import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Import your images
import slide1 from "../assets/slider-14.jpg";
import slide5 from "../assets/slider-1.png";
import slide6 from "../assets/slider-5.jpg";
import slide8 from "../assets/slider-7.jpg";
import slide9 from "../assets/slider-8.jpg";
import slide10 from "../assets/slider-9.jpg";
import slide12 from "../assets/slider-11.jpg";
import slide15 from "../assets/slider-3.jpg";



const Slider = () => {
    const slides = [slide5, slide6, slide8, slide9, slide10,  slide12,  slide15, slide1];
    return (
          <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true} 
        className="mySwiper w-full h-[60vh] md:h-[70vh] lg:h-[90vh] "
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="img-swiper w-full h-full object-fill"
            />
 <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end text-center px-4 leading-tight">
      <h1 className="text-lime-500 text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg ">
        Bring Nature Into Your Space
      </h1>
       <p className="text-gray-400 text-sm md:text-lg max-w-[600px] mb-5 drop-shadow">
        Add freshness and  <br />calm to your surroundings with beautiful and healthy plants.
      </p>

     <a href="http://localhost:5173/all">
      <button className="border  border-white text-[22px] text-white px-6 py-2 mb-10  rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max">Explore Plants🌿</button>
     </a>
    </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;