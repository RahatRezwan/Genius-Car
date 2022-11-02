import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg";
import facebook from "../../../assets/images/social/facebook.svg";
import google from "../../../assets/images/social/google.svg";
import linkedin from "../../../assets/images/social/linkedin.svg";

const Register = () => {
   return (
      <div className="hero min-h-screen mb-[100px]">
         <div className="hero-content flex-col lg:flex-row w-full justify-between items-center">
            <div className="text-center w-1/2 lg:text-left">
               <img src={loginImg} alt="" />
            </div>
            <div className=" w-[80vw] md:w-[70vw] lg:w-1/2 p-[30px] md:p-[75px] border border-[#D0D0D0] rounded-[10px]">
               <h1 className="text-[40px] text-[#444444] font-semibold text-center mb-[50px]">
                  Register
               </h1>
               <form className="w-full">
                  <div className="form-control">
                     <label className="label text-[18px] text-[#444444] font-semibold">
                        <span className="label-text">Name</span>
                     </label>
                     <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="input input-bordered"
                     />
                  </div>
                  <div className="form-control">
                     <label className="label text-[18px] text-[#444444] font-semibold">
                        <span className="label-text">Email</span>
                     </label>
                     <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered"
                     />
                  </div>
                  <div className="form-control">
                     <label className="label text-[18px] text-[#444444] font-semibold">
                        <span className="label-text">Password</span>
                     </label>
                     <input
                        type="password"
                        name="passoword"
                        placeholder="Password"
                        className="input input-bordered"
                     />
                     <label className="label text-[18px] text-[#444444] font-semibold">
                        <Link href="#" className="label-text-alt link link-hover">
                           Forgot password?
                        </Link>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                     <button
                        className="bg-[#FF3811] border-[1.5px] rounded-[5px] border-[#FF3811] py-[13px] px-[21px] text-[18px] text-white hover:bg-transparent hover:text-[#FF3811]"
                        type="submit"
                     >
                        Register
                     </button>
                  </div>
               </form>

               <p className="text-center mt-[30px]">Or Sign In With</p>

               <div className="flex justify-center items-center gap-[28px] mt-[30px]">
                  <button className="rounded-[100%] bg-[#eeeeee] hover:bg-[#FF3811] flex justify-center items-center p-3 text-white">
                     <div className="button-prev">
                        <img src={google} alt="" className="w-5 h-5" />
                     </div>
                  </button>
                  <button className="rounded-[100%] bg-[#eeeeee] hover:bg-[#FF3811] flex justify-center items-center p-3 text-white">
                     <div className="button-prev">
                        <img src={facebook} alt="" className="w-5 h-5" />
                     </div>
                  </button>
                  <button className="rounded-[100%] bg-[#eeeeee] hover:bg-[#FF3811] flex justify-center items-center p-3 text-white">
                     <div className="button-prev">
                        <img src={linkedin} alt="" className="w-5 h-5" />
                     </div>
                  </button>
               </div>

               <p className="font-semibold text-center mt-[50px]">
                  Already have an account?{" "}
                  <Link to="/login">
                     <span className="text-[#ff3811]">Login</span>
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Register;
