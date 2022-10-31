import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
   return (
      <div className="">
         <div className="flex flex-col-reverse gap-[60px] lg:flex-row lg:items-center mb-[130px]">
            <div className="w-1/2 h-[557px] relative">
               <div
                  className="rounded-[10px] w-[473px] h-[460px] bg-cover bg-left"
                  style={{ backgroundImage: `url(${person})` }}
               />
               <div
                  className="w-[327px] h-[332px] border-[10px] border-white bg-cover bg-center absolute right-[-15px] bottom-0"
                  style={{ backgroundImage: `url(${parts})` }}
               />
            </div>
            <div className="w-1/2">
               <p className="text-[20px] text-[#FF3811] font-bold mb-[20px]">About Us</p>
               <h1 className="text-5xl font-bold mb-[30px]">
                  We are qualified <br />
                  & of experience <br />
                  in this field
               </h1>
               <p className="mb-[20px]">
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, by injected humour, or randomised words
                  which don't look even slightly believable.
               </p>
               <p className="mb-[20px]">
                  the majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
               </p>
               <button className="bg-[#FF3811] border-[1.5px] rounded-[5px] border-[#FF3811] py-[13px] px-[21px] text-[18px] text-white hover:bg-transparent hover:border-white">
                  Get More Info
               </button>
            </div>
         </div>
      </div>
   );
};

export default About;
