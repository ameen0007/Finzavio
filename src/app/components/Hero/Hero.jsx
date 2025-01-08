"use client";

import { useEffect, useState } from 'react';
import { Bricolage_Grotesque, Raleway } from 'next/font/google';
import React from 'react';
import './hero.css';
import { FaAngleDoubleRight } from "react-icons/fa";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { motion } from 'framer-motion';

// Import the Bricolage Grotesque font
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '400',
});

const Ralewayf = Raleway({
  subsets: ['latin'],
});

export const Hero = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing
      once: true, // Whether animation should happen only once
    });

    // Set timeout for the CSS animation to start after 1 second (adjust this as needed)
    const timeout = setTimeout(() => {
      setTriggerAnimation(true);
    }, 3000); // 1 second delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={`${bricolageGrotesque.className} flex gap-10 justify-between px-[60px] py-20`}>
        {/* Left Section - Content */}
        <div className="w-full pt-8 pb-10 flex flex-col justify-between h-[500px]">
          <p className="text-6xl text-[#f3f3f1] leading-tight tracking-normal" data-aos="fade-up" data-aos-delay="0" data-aos-duration="700">
            Where <span className="text-[#ffda46]">Peace and Happiness </span>
          </p>
          <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="700" className="text-6xl text-[#f3f3f1] leading-tight tracking-normal">
            Meet Finance
          </p>
          <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="700" className={`${Ralewayf.className} mt-7 text-white text-base leading-7 tracking-wider`}>
            Discover a world where managing your finances brings clarity and joy. Our tailored solutions simplify your journey to financial stability, allowing you to focus on what matters most
          </p>
          <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className={`${Ralewayf.className} w-full h-11 mt-7 flex justify-start text-[15px] gap-7 text-[#f3f3f1]`}>
            <div className="btn-1 active:scale-95">
              <p>Know More</p>
            </div>
            <div className="btn-2 active:scale-95">
              <p className="p-[7px] px-[17px] bg-[#ffda46]">
                <FaAngleDoubleRight />
              </p>
              <h4 className="text-[#f3f3f1]">Contact Us</h4>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="pt-12 w-full relative">
          <img
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="700"
            src="herologo.png"
            alt="logo"
            className="pl-10 w-[600px] h-auto object-cover rounded-lg"
          />

          {/* Glowing Images */}
          <motion.div className="glow absolute top-0 right-[340px]">
            <motion.img
              src="gold.png"
              alt="gold"
              initial={{ opacity: 0, y: 100 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }}   // Move to the top
              transition={{ duration: 1, ease: 'easeInOut' }}
              whileInView={{ y: [0, 3, 0], transition: { duration: 1.5, repeat: Infinity } }} // Infinite up and down movement
              viewport={{ once: false }} // Ensure animation triggers every time the element enters the viewport
            />
          </motion.div>
          <motion.div className="glow absolute bottom-[90px] left-[60px]">
            <motion.img
              src="gold.png"
              alt="gold"
              initial={{ opacity: 0, y: 100 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }}   // Move to the top
              transition={{ duration: 1, ease: 'easeInOut' }}
              whileInView={{ y: [0, 3, 0], transition: { duration: 1.5, repeat: Infinity } }} // Infinite up and down movement
              viewport={{ once: false }} // Ensure animation triggers every time the element enters the viewport
            />
          </motion.div>
          <motion.div className="glow absolute bottom-[130px] right-[100px]">
            <motion.img
              src="gold.png"
              alt="gold"
              initial={{ opacity: 0, y: 100 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }}   // Move to the top
              transition={{ duration: 1, ease: 'easeInOut' }}
              whileInView={{ y: [0, 3, 0], transition: { duration: 1.5, repeat: Infinity } }} // Infinite up and down movement
              viewport={{ once: false }} // Ensure animation triggers every time the element enters the viewport
            />
          </motion.div>
          <motion.div className="glow absolute bottom-[20px] right-[290px]">
            <motion.img
              src="star.png"
              alt="star"
              initial={{ opacity: 0, y: 100 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }}   // Move to the top
              transition={{ duration: 1, ease: 'easeInOut' }}
              whileInView={{ y: [0, 3, 0], transition: { duration: 1.5, repeat: Infinity } }} // Infinite up and down movement
              viewport={{ once: false }} // Ensure animation triggers every time the element enters the viewport
            />
          </motion.div>
          <motion.div className="glow absolute top-[100px] left-[100px]">
            <motion.img
              src="star.png"
              alt="star"
              initial={{ opacity: 0, y: 100 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }}   // Move to the top
              transition={{ duration: 1, ease: 'easeInOut' }}
              whileInView={{ y: [0, 3, 0], transition: { duration: 1.5, repeat: Infinity } }} // Infinite up and down movement
              viewport={{ once: false }} // Ensure animation triggers every time the element enters the viewport
            />
          </motion.div>
          <motion.div className="glow absolute top-[190px] right-[0px]">
            <motion.img
              src="money.png"
              alt="money"
              initial={{ opacity: 0, y: 100 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }}   // Move to the top
              transition={{ duration: 1, ease: 'easeInOut' }}
              whileInView={{ y: [0, 3, 0], transition: { duration: 1.5, repeat: Infinity } }} // Infinite up and down movement
              viewport={{ once: false }} // Ensure animation triggers every time the element enters the viewport
            />
          </motion.div>
          <motion.div className="glow absolute top-[80px] right-[100px]">
            <motion.img
              src="bluel.png"
              alt="bluel"
              initial={{ opacity: 0, y: 100 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }}   // Move to the top
              transition={{ duration: 1, ease: 'easeInOut' }}
              whileInView={{ y: [0, 3, 0], transition: { duration: 1.5, repeat: Infinity } }} // Infinite up and down movement
              viewport={{ once: false }} // Ensure animation triggers every time the element enters the viewport
            />
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-44 mt-8 text-[#f3f3f1]">
        <button className="btn-3">FINANCE ADVISOR</button>
        <button className="btn-3">SWP Calculator</button>
        <button className="btn-3">SIP Calculator</button>
        <button className="btn-3">FINANCE ANALYST</button>
      </div>
    </>
  );
};
