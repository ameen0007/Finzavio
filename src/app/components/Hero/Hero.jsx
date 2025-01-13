"use client";

import { useState } from "react";
import { Bricolage_Grotesque, Raleway } from "next/font/google";
import React from "react";
import "./hero.css";
import { FaAngleDoubleRight } from "react-icons/fa";

// Import the Bricolage Grotesque font
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "400",
});

const Ralewayf = Raleway({
  subsets: ["latin"],
});

export const Hero = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  return (
    <>
      <div className={`${bricolageGrotesque.className} flex gap-20 justify-between hero `}>
        {/* Left Section - Content */}
        <div className="w-full text flex flex-col justify-between glow1 ">
          <p className="text-5xl p text-[#f3f3f1]  leading-tight tracking-normal">
            Where <span className= "  text-[#ffda46]">Peace and Happiness</span>
          </p>
          <p className="p text-5xl  text-[#f3f3f1] leading-tight tracking-normal">
            Meet Finance
          </p>
          <p className={`${Ralewayf.className} mt-7 s  text-white text-sm leading-7 tracking-wider`}>
            Discover a world where managing your finances brings clarity and joy. Our tailored
            solutions simplify your journey to financial stability, allowing you to focus on what
            matters most.
          </p>
          <div className={`${Ralewayf.className} w-full h-9  flex justify-start buttons gap-7 mt-7 text-[#f3f3f1]`}>
            <div className="btn-1 active:scale-95">
              <p>Know More</p>
            </div>
            <div className="btn-2 active:scale-95">
              <p className="p-[5px] px-[13px] bg-[#ffda46]">
                <FaAngleDoubleRight />
              </p>
              <h4 className="text-[#f3f3f1]">Contact Us</h4>
            </div>
          </div>
        </div>


    


        {/* Right Section - Image */}
        <div className="w-full relative image min-h-[400px] flex justify-center items-center">
        <img
          src="herologo.png"
          alt="logo"
          className="pl-10 glow1 images top-to-bottom object-contain delay-0 rounded-lg max-w-[520px]"
        />
        {/* Glowing Images with Animation */}
        <div className="glow m1 top-to-bottom delay-3 absolute top-[-10%] right-[38%]">
          <img src="gold.png" alt="gold" />
        </div>
        <div className="glow m2 top-to-bottom delay-4 absolute bottom-[23%] left-[12%]">
          <img src="gold.png" alt="gold" />
        </div>
        <div className="glow m3 top-to-bottom delay-5 absolute bottom-[20%] right-[16%]">
          <img src="gold.png" alt="gold" />
        </div>
        <div className="glow m4 top-to-bottom delay-3 absolute bottom-[1%] right-[50%]">
          <img src="star.png" alt="star" />
        </div>
        <div className="glow m5 top-to-bottom delay-5 absolute top-[22%] left-[20%]">
          <img src="star.png" alt="star" />
        </div>
        <div className="glow m6 top-to-bottom delay-6 absolute top-[46%] right-[-5%]">
          <img src="star.png" alt="star" />
        </div>
        <div className="glow m7 top-to-bottom delay-7 absolute top-[14%] right-[15%]">
          <img src="bluel.png" alt="blue light" />
        </div>
  
          
        
   




      </div>

      
    </div>
      <div className="pb-10 btn-3 text-[#f3f3f1]">
        <div className="items animate-fade-up-right delay-500">
          <button>FINANCE ADVISOR</button>
        </div>
        <div className="items animate-fade-up-right delay-400">
          <button>SWP Calculator</button>
        </div>
        <div className="items animate-fade-up-right delay-300">
          <button>SIP Calculator</button>
        </div>
        <div className="items animate-fade-up-right delay-200">
          <button>FINANCE ANALYST</button>
        </div>
      </div>
    </>
  );
};
