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
  // StarsCanvas,
} from "./components";
// import { useEffect, useState } from "react";
// import AnimatedCursor from "react-animated-cursor";
// import { SectionWrapper } from "./hoc";
// import { motion } from "framer-motion";
// import TextAnimation from "./components/TextAnimation";
const App = () => {
  // const pur = "#915EFF";
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // const [cursorVariant, setCursorVariant] = useState("default");
  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };
  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //   },
  //   text: {
  //     height: 120,
  //     width: 120,
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     backgroundColor: pur,
  //   },
  // };
  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");
  return (
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
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
