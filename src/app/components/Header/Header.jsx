'use client'; // Marking the component as a client-side component

import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import { Raleway } from 'next/font/google';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { FaBarsStaggered } from 'react-icons/fa6';
import { RiCloseLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const Ralewayf = Raleway({
  subsets: ['latin'],
});

export const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [underlineLeft, setUnderlineLeft] = useState(0);
const [underlineWidth, setUnderlineWidth] = useState(0);

  const menuItemsRef = useRef([]);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration
  //    // Easing
  //     once: true, // Whether animation should happen only once
  //   });
  // }, []);


  const handleActiveItem = (item, index) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false)
    const element = menuItemsRef.current[index];
    if (element) {
      setUnderlineLeft(element.offsetLeft);
      setUnderlineWidth(element.offsetWidth);
    }
  };


useEffect(() => {
  // Set initial underline position (default: first item)
  const element = menuItemsRef.current[0]; // Default to 'Home'
  if (element) {
    setUnderlineLeft(element.offsetLeft);
    setUnderlineWidth(element.offsetWidth);
  }
}, []);

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { x: '100%' }, // Start off-screen (right)
    visible: { x: 0, transition: { duration: 0.5 } }, // Slide in
    exit: { x: '100%', transition: { duration: 0.5 } }, // Slide out
  };

  return (
    <>
      {/* Desktop Menu */}
      <div
     
      
      className="header bottom-to-top delay-1  w-full items-center flex justify-between pt-4"
    >
      {/* Logo */}
      
      {/* Navigation and Connect Us */}
      <div className="relative flex items-center justify-between w-full">
      <div loading="eager" className="pl-2 pt-5 ">
        <img loading="eager" className="w-16" src="mainlogo.png" alt="Logo" />
      </div>
        {/* Navigation Items */}
        <ul className="text-[#f3f3f1] flex gap-10 text-[14px]">
          {['Home', 'About', 'Services'].map((item, index) => (
            <li
              key={item}
              ref={(el) => (menuItemsRef.current[index] = el)}
              className={`cursor-pointer relative ${
                activeItem === item ? 'text-[#ffda46]' : ''
              } hover:text-[#ffda46]`}
              onClick={() => handleActiveItem(item, index)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Connect Us Button */}
        <button
          ref={(el) => (menuItemsRef.current[3] = el)} // Connect Us is the 4th item
          className={`text-[#f3f3f1] text-[14px] outline-none transition-all duration-500 px-4 py-1 relative ${
            activeItem === 'Connect Us' ? 'text-[#ffda46]' : ''
          } hover:text-[#ffda46]`}
          onClick={() => handleActiveItem('Connect Us', 3)}
        >
          Connect <span className="text-[#ffda46]">Us</span>
        </button>

        {/* Dynamic Underline */}
        <div
          className="absolute bottom-[-2px] fade-in-delay h-[2px] bg-[#ffda46] transition-all duration-500"
          style={{
            width: `${underlineWidth}px`,
            left: `${underlineLeft}px`,
          }}
        />
      </div>
    </div>


      {/* Mobile Menu */}
      <div

        className={`${Ralewayf.className} min-h-[70px]  delay-1 bottom-to-top  mobile w-full items-center flex justify-between `}
      >
        <div  className="pt-6  flex flex-col justify-center items-center">
          <img loading="lazy" className="w-6" src="favicon.ico" alt="Logo" />
          <p className="-tracking-tighter mt-1 text-[10px] text-[#EDE6A0]">
            FINZAVIO
          </p>
        </div>
        <p
          className="text-[30px] pt-2 text-[#ffda46] delay-1 bottom-to-to cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FaBarsStaggered />
        </p>
      </div>

      {/* Mobile Menu Overlay with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
          className={`${Ralewayf.className} fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-start z-50`}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          
          >
            
           
          
            <p
              className="absolute top-6 right-6 text-[#ffda46] text-[40px] cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <RiCloseLine />
            </p>
            <ul className="text-[#f3f3f1] mt-32 text-[18px] space-y-6 w-[80%]">
              {['Home', 'About', 'Services', 'Connect Us'].map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer py-2 px-4 rounded-full w-3/4 mx-auto text-center ${
                    activeItem === item
                      ? 'bg-[#ffda46] text-black'
                      : 'hover:text-[#ffda46]'
                  }`}
                  onClick={() => handleActiveItem(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
