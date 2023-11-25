import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import handWave from "../assets/waving.png";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";
import cv from "../assets/Mohammed_Sanaved.pdf";
import { MdDownload } from "react-icons/md";
// import me from "../assets/d1.png";
import me from "../assets/imag01.png";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import CanvasLoader from "./Loader";
import { Suspense } from "react";
{
  /* <img
                src={
                  "https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                }
                alt="wave"
                className=" w-[70px]"
              /> */
}

const Hero = () => {
  return (
    // <section
    //   className={`relative xl:mt-12 flex xl:flex-row flex-col-reverse gap-10`}
    // >
    <section className={`relative w-full h-[100vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[50px] md:top-[60px] sm:top-[110px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5 md:hidden xs:hidden sm:hidden">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}
        <div className="flex sm:justify-between sm:flex-row xl:flex-row flex-col-reverse gap-10 items-center">
          <div>
            {/* <span className={`text-white`}> */}
            <span className={`${styles.heroHeadText} text-white`}>
              {/* <img src={handWave} alt="wave" className=" w-[60px]" /> */}
              <img src={handWave} alt="wave" className="w-[60px]" />
              <span className="text-[#56ccf2] text-shadow-lg">
                Front-End <br className="sm:block hidden" /> Developer
              </span>
            </span>
            <div className="text-3xl mt-3 flex gap-3">
              <Link
                to={"https://www.linkedin.com/in/mohammedsanaved/"}
                className="hover:scale-105 hover:translate-y-[-4px] transition-all duration-300 text-[#56ccf2] text-shadow-lg"
              >
                <SiLinkedin />
              </Link>
              <Link
                to={"https://github.com/mohammedsanaved"}
                className="hover:scale-105 hover:translate-y-[-4px] transition-all duration-300 text-[#56ccf2] text-shadow-lg"
              >
                <SiGithub />
              </Link>
              <span className=" px-1 py-[.5px] rounded-xl flex bg-[#56ccf2] shadow-current">
                <span className="flex font-semibold items-center text-base text-[#000] sm:text-xl">
                  Download CV
                  <a
                    href={cv}
                    download={"Mohammed-Sanaved-CV"}
                    // className="bg-[#915EFF] px-1 py-[.5px] rounded-full text-black"
                  >
                    <span>
                      <MdDownload className="h-10 sm:text-2xl text-2xl text-[#000] duration-300 transition-all hover:translate-y-2" />
                    </span>
                  </a>
                </span>
              </span>
            </div>

            <p className={`${styles.heroSubText} mt-2 text-[#915EFF]`}>
              Hi, I'm
              <span className="font-extrabold tracking-wider bg-subHero">
                <br className="md:block" />
                Mohammed Sanaved Ajaz
              </span>
              <br className="sm:block hidden" />
              <p>
                A passionate 🎯️ Front-End React Developer based in Maharashtra,
                <span className="font-bold">INDIA 🇮🇳️</span>
              </p>
            </p>
          </div>
          <Suspense fallback={<CanvasLoader />}>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className=""
            >
              <img src={me} alt="me" className=" bg-cover order-1 ani" />
            </motion.div>
          </Suspense>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-36 bottom-32 w-full flex justify-center items-center">
        <a href="#work">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default SectionWrapper(Hero, "/");
