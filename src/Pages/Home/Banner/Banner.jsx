import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Navigation, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const Banner = () => {
   const [banners, setBanners] = useState([]);

   useEffect(() => {
      fetch("banners.json")
         .then((res) => res.json())
         .then((data) => setBanners(data));
   }, []);

   return (
      <div className="mt-[50px] mb-[100px]">
         <Swiper
            modules={[Navigation, EffectFade, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            effect={"fade"}
            loop={true}
            navigation={{
               nextEl: ".button-next",
               prevEl: ".button-prev",
            }}
            className="rounded-[10px] relative"
         >
            {banners.map((banner) => (
               <SwiperSlide key={banner.id}>
                  <div
                     className="h-[600px] text-white relative bg-cover bg-no-repeat bg-center flex items-center justify-start"
                     style={{
                        backgroundImage: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0) 100%), url(${banner.img})`,
                     }}
                  >
                     <div className=" w-[50%] p-[100px] pr-0">
                        <h1 className="text-5xl font-bold mb-4 w-[70%] leading-[55px] ">
                           {banner.title}
                        </h1>
                        <p className="mb-4 text-[18px]">{banner.description}</p>
                        <div className="flex items-center gap-3">
                           <button className="bg-[#FF3811] border-[1.5px] rounded-[5px] border-[#FF3811] py-[13px] px-[21px] text-[18px] font-medium hover:bg-transparent hover:border-white">
                              Discover More
                           </button>
                           <button className="bg-transparent border-[1.5px] rounded-[5px] border-white py-[13px] px-[21px] text-[18px] text-[white] font-medium hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white">
                              Latest Project
                           </button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}

            <div className="absolute bottom-[5%] right-[50px] z-10 flex gap-[20px]">
               <button className="rounded-[100%] bg-[#a6a2a2a2] hover:bg-[#FF3811] flex justify-center items-center p-[18px] text-white">
                  <div className="button-prev">
                     <FaArrowLeft />
                  </div>
               </button>
               <button className="rounded-[100%] hover:bg-[#a6a2a2a2] bg-[#FF3811] flex justify-center items-center p-[18px] text-white">
                  <div className="button-next">
                     <FaArrowRight />
                  </div>
               </button>
            </div>
         </Swiper>
      </div>
   );
};

export default Banner;
