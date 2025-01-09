"use client";

import { useEffect, useState } from 'react';
import { Bricolage_Grotesque, Raleway } from 'next/font/google';
import React from 'react';
import './hero.css';
import { FaAngleDoubleRight } from "react-icons/fa";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

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
    }, 1500); // 1 second delay

    return () => clearTimeout(timeout);
  }, [triggerAnimation]);

  return (
    <>
      <div className={`${bricolageGrotesque.className} flex gap-20 justify-between `}>
        {/* Left Section - Content */}
        <div className="w-full   flex flex-col justify-between  ">
          <p className="text-6xl text-[#f3f3f1] leading-tight tracking-normal" data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-delay="0" data-aos-duration="700">
            Where <span className="text-[#ffda46]">Peace and Happiness </span>
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="700" className="text-6xl text-[#f3f3f1] leading-tight tracking-normal">
            Meet Finance
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-duration="700" className={`${Ralewayf.className} mt-7 text-white text-base leading-7 tracking-wider`}>
            Discover a world where managing your finances brings clarity and joy. Our tailored solutions simplify your journey to financial stability, allowing you to focus on what matters most
          </p>
          <div  data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className={`${Ralewayf.className} w-full h-11  flex justify-start text-[15px] gap-7 mt-7 text-[#f3f3f1]`}>
            <div className="btn-1 active:scale-95">
              <p>Know More</p>
            </div>
            <div className="btn-2 active:scale-95 ">
              <p className="p-[7px] px-[17px] bg-[#ffda46]">
                <FaAngleDoubleRight />
              </p>
              <h4 className="text-[#f3f3f1]">Contact Us</h4>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className=" w-full relative   flex   ">
         

         
          <img

            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="700"
            src="herologo.png"
            alt="logo"
            className="pl-10 object-contain rounded-lg "
          />
          {/* Glowing images */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="700"
            className={`glow absolute top-[-1%] right-[42%] ${triggerAnimation ? 'animate-up-down delay-0' : ''}`}
          >
            <img src="gold.png" alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="700"
            className={`glow absolute bottom-[15%] left-[7%] ${triggerAnimation ? 'animate-up-down delay-1' : ''}`}
          >
            <img src="gold.png" alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="700"
            className={`glow absolute bottom-[25%] right-[16%] ${triggerAnimation ? 'animate-up-down delay-2' : ''}`}
          >
            <img src="gold.png" alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="700"
            className={`glow absolute bottom-[0%] right-[50%] ${triggerAnimation ? 'animate-up-down delay-3' : ''}`}
          >
            <img src="star.png" alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="700"
            className={`glow absolute top-[20%] left-[17%] ${triggerAnimation ? 'animate-up-down delay-1' : ''}`}
          >
            <img src="star.png" alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="700"
            className={`glow absolute top-[45%] right-[0%] ${triggerAnimation ? 'animate-up-down delay-1' : ''}`}
          >
            <img src="money.png" alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="700"
            className={`glow absolute top-[19%] right-[15%] ${triggerAnimation ? 'animate-up-down delay-3' : ''}`}
          >
            <img src="bluel.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 pt-4 pb-10 btn-3   text-[#f3f3f1]">
        <button >FINANCE ADVISOR</button>
        <button >SWP Calculator</button>
        <button >SIP Calculator</button>
        <button >FINANCE ANALYST</button>
      </div>
    </>
  );
};
