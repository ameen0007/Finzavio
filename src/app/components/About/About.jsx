"use client";

import { Bricolage_Grotesque, Raleway } from 'next/font/google';
import React, { useEffect } from 'react'
import './about.css'
import Aos from "aos";
import 'aos/dist/aos.css';


const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: "400",
  });

  const Ralewayf = Raleway({
    subsets: ["latin"],
  });

export const About = () => {

     useEffect(() => {
        Aos.init({
          duration: 1000,
        once: false,  // This is the key change - set to false to animate every time
        offset: 50,
        easing: 'ease-in-out',
        mirror: true
         
        });
      }, []);





  return (
    <div className="min-h-screen h-auto p-5 mt-10 overflow-hidden max-w-[1280px] m-auto  text-[#f3f3f1] ">
    {/* First Main Div */}
    <div className={`flex flex-col justify-center items-center  ${bricolageGrotesque.className} `} >

        <button data-aos="fade-up" className="action-button"> Service On The Go </button>

      <div className={` ${bricolageGrotesque.className} mt-10 `} >
      <h1 data-aos="fade-up" className='text-center text-[30px] font-[600] '>Who We Are</h1>
      <p data-aos="fade-up" className={`${Ralewayf.className} mt-5 text-center lg:text-[18px]`}>At Finzavio, we deliver expert financial analysis, personalized advisory services, and cutting-edge stock market strategies to help you grow and secure your wealth. Our client-focused approach, proven results, and commitment to transparency set us apart. With us, you gain insights, confidence, and success in every financial decision. Your growth is our mission.</p>
    </div>
     
    </div>

    {/* Second Main Div */}
   

    {/* Third Main Div */}
    <div className="w-full text-center mt-10  flex flex-col gap-5 lg:flex-row justify-center items-center">
      {/* First Inner Div */}
  
        <div data-aos="zoom-in"  className="w-[60%] m-auto md:w-full flex justify-center items-center lg:w-[50%] h-[350px]">
          <img src="mission.png" alt="Placeholder" />
        </div>


      {/* Second Inner Div */}
      <div  className="inner-div-2 lg:w-[70%]">
        <h1 data-aos="fade-up" className={`text-[35px] font-[600] lg:mb-10 lg:text-[45px]  ${bricolageGrotesque.className} `} > Our Mission</h1>
        <p data-aos="fade-up"  className={` lg:text-[18px] ${Ralewayf.className} `}>At Finzavio, we deliver expert financial analysis, personalized advisory services, and cutting-edge stock market strategies to help you grow and secure your wealth. Our client-focused approach, proven results, and commitment to transparency set us apart. With us, you gain insights, confidence, and success in every financial decision. Your growth is our mission.</p>
      </div>
    </div>

    <div className="w-full text-center mt-10  flex flex-col gap-5 lg:flex-row justify-center items-center">
      {/* First Inner Div */}
  
        <div data-aos="zoom-in" className="w-[70%] m-auto md:w-full flex justify-center items-center lg:w-[50%] h-[350px]">
          <img src="vision.png" alt="Placeholder" />
        </div>


      {/* Second Inner Div */}
      <div  className="inner-div-2 text-center lg:w-[70%]">
      <h1 data-aos="fade-up" className={`text-[35px] font-[600]  lg:mb-10 lg:text-[45px]  ${bricolageGrotesque.className} `} > Our Vision</h1>
      <p data-aos="fade-up"  className={`${Ralewayf.className} lg:text-[18px] `}>At Finzavio, we deliver expert financial analysis, personalized advisory services, and cutting-edge stock market strategies to help you grow and secure your wealth. Our client-focused approach, proven results, and commitment to transparency set us apart. With us, you gain insights, confidence, and success in every financial decision. Your growth is our mission.</p>
      </div>
    </div>

  </div>
  )
}
