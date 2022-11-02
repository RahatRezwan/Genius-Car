import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CTA from "../CTA/CTA";
import Services from "../Services/Services";

const Home = () => {
   return (
      <div>
         <Banner />
         <About />
         <Services />
         <CTA />
      </div>
   );
};

export default Home;
