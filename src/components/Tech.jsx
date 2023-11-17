/* eslint-disable no-unused-vars */
import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="mt-[150px] sm:mt-[10px] flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* <img
            src={technology.icon}
            alt={technology.name}
            className={`bg-inherit hover:bg-zinc-100 duration-300 transition-colors rounded-full p-2`}
          /> */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
