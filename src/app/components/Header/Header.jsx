'use client'; // Marking the component as a client-side component

import React, { useState, useEffect, useRef } from 'react';
import './header.css'
import { Raleway } from 'next/font/google';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
const Ralewayf = Raleway({
  subsets: ['latin'],
})

export const Header = () => {
  // State to manage the active menu item
  const [activeItem, setActiveItem] = useState("Home");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const menuItemsRef = useRef([]);
  
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease-in-out', // Easing
        once: true, // Whether animation should happen only once
      });

    }, []);

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  // Calculate the position and width of the underline based on active item
  useEffect(() => {
    if (menuItemsRef.current) {
      const activeItemIndex = menuItemsRef.current.findIndex(item => item.innerText === activeItem);
      if (activeItemIndex !== -1) {
        const activeItemElement = menuItemsRef.current[activeItemIndex];
        const { offsetLeft, offsetWidth } = activeItemElement;
        setUnderlineStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [activeItem]);

  return (
    <div  data-aos="fade-down" className={`${Ralewayf.className}  w-full px-[50px] items-center py-5 flex justify-between`}>
      <div className='pl-2 pt-5'>
        <img  src="mainlogo.png" alt="Logo"  />
      </div>

      <div className="relative">
        <ul className="text-[#f3f3f1] flex gap-10 text-[18px]">
          <li
            ref={(el) => (menuItemsRef.current[0] = el)} // Attach ref for Home
            className={`cursor-pointer relative ${activeItem === "Home" ? "text-[#ffda46]" : ""} hover:text-[#ffda46]`}
            onClick={() => handleActiveItem("Home")}
          >
            Home
          </li>

          <li
            ref={(el) => (menuItemsRef.current[1] = el)} // Attach ref for About
            className={`cursor-pointer relative ${activeItem === "About" ? "text-[#ffda46]" : ""} hover:text-[#ffda46]`}
            onClick={() => handleActiveItem("About")}
          >
            About
          </li>

          <li
            ref={(el) => (menuItemsRef.current[2] = el)} // Attach ref for Services
            className={`cursor-pointer relative ${activeItem === "Services" ? "text-[#ffda46]" : ""} hover:text-[#ffda46]`}
            onClick={() => handleActiveItem("Services")}
          >
            Services
          </li>
        </ul>

        {/* Animated underline */}
        <div
          className="absolute top-8 h-[1px] bg-[#ffda46] transition-all duration-500"
          style={underlineStyle}
        />
      </div>
      <div className="text-[#f3f3f1]">
  <button className="text-[18px] outline-none transition-all duration-500 px-4 py-1 relative">
    Connect <span className="text-[#ffda46]">Us</span>
    <span className="underline-line absolute left-0 bottom-0 w-full h-0.5 bg-[#ffda46] transform scale-x-0 origin-left transition-all duration-500"></span>
  </button>
</div>




    </div>
  );
};
