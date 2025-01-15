"use client";

import { useEffect, useState } from "react";
import { Bricolage_Grotesque, Raleway } from "next/font/google";
import React from "react";
import "./hero.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

import Button from "../Button";
import Card from "../Card";

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

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, // This is the key change - set to false to animate every time
      offset: 50,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);

  let one = [
    {
      title: "FINANCE ADVISOR",
      des: "It is a long Established Fact that a reader will be distracted by the readable",
    },
    {
      title: "SWP CALCULATOR",
      des: "It is a long Established Fact that a reader will be distracted by the readable",
    },
    {
      title: "SIP CALCULATOR",
      des: "It is a long Established Fact that a reader will be distracted by the readable",
    },
    {
      title: "FINANCE ANALYST",
      des: "It is a long Established Fact that a reader will be distracted by the readable",
    },
  ];

  return (
    <>
      <div
        className={`${bricolageGrotesque.className} flex gap-20 justify-between hero mt-10 `}
      >
        {/* Left Section - Content */}
        <div className="w-full text flex flex-col justify-between ">
          <p className="text-5xl p text-[#f3f3f1]  bottom-to-top1 delay1-3  leading-tight tracking-normal">
            Where <span className="  text-[#ffda46]">Peace and Happiness</span>
          </p>
          <p className="p text-5xl bottom-to-top1 delay1-3  text-[#f3f3f1] leading-tight tracking-normal">
            Meet Finance
          </p>
          <p
            className={`${Ralewayf.className} mt-7 bottom-to-top1 delay1-4  text-white text-sm leading-7 tracking-wider`}
          >
            Discover a world where managing your finances brings clarity and
            joy. Our tailored solutions simplify your journey to financial
            stability, allowing you to focus on what matters most.
          </p>

          <div
            className={`${Ralewayf.className}  w-full h-9 bottom-to-top1 delay1-6 flex justify-start buttons gap-7 mt-7 text-[#f3f3f1]`}
          >
            <Button
              className="custom-spotlight-card text-center btn5 px-8 py-2 pb-8 cursor-pointer  w-fit  h-auto "
              // spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <h2 className=" text1   text-center text-base ">Know More</h2>
            </Button>
            <Button
              className="custom-spotlight-card text-center btn5 px-8 py-2 pb-8 cursor-pointer buttons  w-fit  h-auto "
              // spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <h2 className="text-center text1 text-base  ">
                Contact <span className="text-[#ffda46]  ">Us</span>
              </h2>
            </Button>
          </div>
        </div>

        <div className="w-full relative  image min-h-[400px] flex justify-center items-center">
          <img
            src="herologo.png"
            alt="logo"
            className="pl-10 bottom-to-top1 delay1-2  images object-contain rounded-lg max-w-[520px]"
          />
          {/* Glowing Images with Animation */}
          <div className="glow m1  ToTobottomp1 delay1-6  absolute top-[-10%] right-[38%]">
            <img src="gold.png" alt="gold" />
          </div>
          <div className="glow m2 ToTobottomp1 delay1-3   absolute bottom-[23%] left-[12%]">
            <img src="gold.png" alt="gold" />
          </div>
          <div className="glow m3  ToTobottomp1 delay1-3   absolute bottom-[20%] right-[16%]">
            <img src="gold.png" alt="gold" />
          </div>
          <div className="glow m4 ToTobottomp1 delay1-2  absolute bottom-[1%] right-[50%]">
            <img src="star.png" alt="star" />
          </div>
          <div className="glow ToTobottomp1 delay1-5 m5  absolute top-[22%] left-[20%]">
            <img src="star.png" alt="star" />
          </div>
          <div id="star3" className="glow ToTobottomp1 delay1-4  m6 absolute top-[46%] right-[-5%]">
            <img src="star.png" alt="star" />
          </div>
          <div className="glow ToTobottomp1 delay1-5  m7  absolute top-[14%] right-[15%]">
            <img src="bluel.png" alt="blue light" />
          </div>
        </div>
      </div>

      <div
          
        className={`${bricolageGrotesque.className}  btn-3 mt-10 text-[#f3f3f1]`}
      >
       
        {one.map((item, i) => (
          <div   key={i}
          data-aos="fade-up">
 <Card
          
            className="custom-spotlight-card text-center w-full   h-auto "
            // spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            {/* <i className="fa fa-lock">77</i> */}
            <h2  className="text-center  text-[14px] mb-2">{item.title}</h2>
            <p className={`${Ralewayf.className} text-[13px]`}>{item.des}</p>
          </Card>
          </div>
         
        ))}
         
      </div>
    </>
  );
};
