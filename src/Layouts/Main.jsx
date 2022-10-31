import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Pages";

const Main = () => {
   return (
      <div>
         <Header />
         <div className="max-w-[1200px] mx-auto">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Main;
