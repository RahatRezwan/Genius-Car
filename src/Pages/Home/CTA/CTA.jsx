import React from "react";
import time from "../../../assets/images/cta/timetable.svg";
import call from "../../../assets/images/cta/call.svg";
import location from "../../../assets/images/cta/location.svg";

const CTA = () => {
   return (
      <div className="w-full py-[95px] px-[73px] bg-[#151515] rounded-[10px] mb-[130px] flex flex-col lg:flex-row items-end justify-center gap-[60px]">
         <div className="text-white flex gap-[20px] items-center">
            <img src={time} alt="" />
            <div>
               <p className="text-[16px]">We are open monday-friday</p>
               <h3 className="text-[25px] font-bold">7:00 am - 9:00 pm</h3>
            </div>
         </div>
         <div className="text-white flex gap-[20px] items-center">
            <img src={call} alt="" />
            <div>
               <p className="text-[16px]">Have a question?</p>
               <h3 className="text-[25px] font-bold">+2546 251 2658</h3>
            </div>
         </div>
         <div className="text-white flex gap-[20px] items-center">
            <img src={location} alt="" />
            <div>
               <p className="text-[16px]">Need a repair? our address</p>
               <h3 className="text-[25px] font-bold">Liza Street, New York</h3>
            </div>
         </div>
      </div>
   );
};

export default CTA;
