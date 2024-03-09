import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  // Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import PreLoader from "./components/PreLoader";
const App = () => {
  return (
    <>
      <PreLoader />
      <BrowserRouter>
        <div className=" bg-primary">
          {/* <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        /> */}
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          {/* <Experience /> */}
          <div className="relative z-0">
            <Tech />
            <Works />
            <About />
            {/* <Feedbacks /> */}
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
