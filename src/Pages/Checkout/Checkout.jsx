import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import checkoutImg from "../../assets/images/checkout/checkout.png";

const Checkout = () => {
   const { user } = useContext(AuthContext);
   const service = useLoaderData();
   const { _id, title, price } = service;
   window.scroll(0, 0);

   const handlePlaceOrder = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = `${form.fname.value} ${form.lname.value}`;
      const phone = form.phone.value;
      const email = form.email.value;
      const message = form.message.value;
      console.log(phone, email, message);

      /* order info save to db */
      const order = {
         service: _id,
         serviceName: title,
         price,
         customer: name,
         phone,
         email,
         message,
      };

      /* if(phone.length < 11){
        alert('phone number should be 11 character longer')
      } */

      fetch("http://localhost:5000/orders", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(order),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               alert("your order placed successfully");
               form.reset();
            }
            console.log(data);
         })
         .catch((e) => console.log(e));
   };
   return (
      <div>
         <div className="w-full h-[300px] mb-[130px] bg-cover bg-center bg-no-repeat relative">
            <img src={checkoutImg} alt="" className="w-full h-full" />
            <div
               className="w-full h-full z-10 rounded-[10px] absolute top-0 left-0 flex justify-center items-center"
               style={{
                  background: " linear-gradient(-180deg, #151515 0%, rgba(21, 21, 21, 0) 100%)",
               }}
            >
               <h1 className="text-5xl font-bold text-white">{title}</h1>
            </div>
         </div>
         <form
            onSubmit={handlePlaceOrder}
            className="bg-[#F3F3F3] rounded-[10px] p-[9%] w-full mb-[130px]"
         >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
               <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  className="input w-full py-[15px] px-[25px]"
               />
               <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  className="input w-full py-[15px] px-[25px]"
               />
               <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="input w-full py-[15px] px-[25px]"
                  required
               />
               <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  defaultValue={user?.email}
                  className="input w-full py-[15px] px-[25px]"
               />
            </div>
            <div className="my-6">
               <textarea
                  className="textarea w-full h-[250px] p-6"
                  name="message"
                  placeholder="Your Message"
               ></textarea>
            </div>
            <button
               className="bg-[#FF3811] border-[1.5px] rounded-[5px] border-[#FF3811] py-[13px] px-[21px] text-[18px] text-white hover:bg-transparent hover:text-[#FF3811] w-full"
               type="submit"
            >
               Order Confirm
            </button>
         </form>
      </div>
   );
};

export default Checkout;
