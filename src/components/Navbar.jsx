import React, { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { web } from "../assets"; // Keep the 'web' asset

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex justify-between items-center py-5 fixed top-0 z-20 ${
          scrolled ? "backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2"
          >
            <img src={web} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-base lg:text-xl font-bold cursor-pointer flex">
              Mohammed Sanaved&nbsp;
              {/* <span className='sm:block hidden'> | JavaScript Mastery</span> */}
            </p>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className="text-secondary hover:text-white font-semibold tracking-wide text-lg"
              onClick={() => closeSidebar()}
            >
              {nav.title}
            </a>
          ))}
        </div>

        <button
          onClick={toggleSidebar}
          className="block md:hidden focus:outline-none text-secondary"
        >
          <CiMenuBurger className="w-6 h-6" />
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-[#000] text-[#fff] shadow-lg px-4 py-8 z-20 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={closeSidebar}
          className="focus:outline-none text-gray-700 mb-4 absolute right-[6%]"
        >
          <RxCross1 className="w-6 h-6 text-[#fff]" />
        </button>
        <nav className="space-y-4">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              onClick={closeSidebar}
              className="block text-xl text-gray-200 hover:text-gray-100"
            >
              {nav.title}
            </a>
          ))}
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-white opacity-50 z-10 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={closeSidebar}
      ></div>
    </>
  );
};

export default Navbar;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { web, menu, close } from "../assets"; // Removed 'hole' as it's unused

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "backdrop-blur" : "bg-transparent"
//       }`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={web} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-base lg:text-xl font-bold cursor-pointer flex">
//             Mohammed Sanaved&nbsp;
//             {/* <span className='sm:block hidden'> | JavaScript Mastery</span> */}
//           </p>
//         </Link>

//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain"
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[300px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
