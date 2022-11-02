import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/services")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);

   return (
      <div>
         <div className="text-center">
            <p className="text-[20px] text-[#FF3811] font-bold mb-[20px]">Services</p>
            <h2 className="my-[20px] text-5xl font-bold">Our Service Area</h2>
            <p className="mb-[50px]">
               the majority have suffered alteration in some form, by injected humour, or randomised
               <br /> words which don't look even slightly believable.{" "}
            </p>
         </div>
         {/* Services Card */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:mb-[50px]">
            {services.map((service) => (
               <div
                  key={service._id}
                  className="p-[25px] border-[1px] border[#E8E8E8] rounded-[10px]"
               >
                  <img
                     src={service.img}
                     alt="services"
                     className="rounded-[9px] mb-[20px] max-h-[208px] w-full"
                  />
                  <h1 className="text-[24px] font-bold text-[#444444] mb-5">{service.title}</h1>
                  <div className="flex justify-between text-[#FF3811] text-[20px] font-semibold">
                     <p className="m-0 p-0">Price: ${service.price} </p>
                     <Link to={`/checkout/${service._id}`}>
                        <button>
                           <FaArrowRight />
                        </button>
                     </Link>
                  </div>
               </div>
            ))}
         </div>
         <div className="text-center mb-[130px]">
            <button className="bg-transparent border-[1.5px] rounded-[5px] border-[#FF3811] py-[13px] px-[21px] text-[18px] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
               More Service
            </button>
         </div>
      </div>
   );
};

export default Services;
