/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { BallCanvas, ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
// import TechImage from "./TechImage";

const Tech = () => {
  return (
    <div className="mt-[60px] sm:mt-[10px] flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-[75px] h-[75px]" key={technology.id}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-full shadow-lg"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className={`bg-white duration-300 transition-colors rounded-full p-1 shadow-card tech`}
            />
            {/* <TechImage  /> */}
          </Tilt>
          {/* <BallCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
