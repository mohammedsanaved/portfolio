import React, { useEffect } from "react";
import "./PreLoader.css";
import { preLoaderAnim } from "../animations";
// import handWave from "../assets/waving.png";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader bg-primary">
      <div className="texts-container">
        <span>
          {/* <img src={handWave} alt="wave" className="w-[60px]" /> */}
          <img
            src={
              "https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
            }
            alt="wave"
            className=" w-[120px]"
          />
        </span>
        <span> Developer, </span>
        <span> Freelancer, </span>
        <span> Learner </span>
      </div>
    </div>
  );
};

export default PreLoader;
