// "use client";

// import { useEffect, useState } from 'react';
// import { Bricolage_Grotesque, Raleway } from 'next/font/google';
// import React from 'react';
// import './hero.css';
// import { FaAngleDoubleRight } from "react-icons/fa";
// import 'aos/dist/aos.css'; // Import AOS styles
// import AOS from 'aos';

// // Import the Bricolage Grotesque font
// const bricolageGrotesque = Bricolage_Grotesque({
//   subsets: ['latin'],
//   weight: '400',
// });

// const Ralewayf = Raleway({
//   subsets: ['latin'],
// });

// export const Hero = () => {
//   const [triggerAnimation, setTriggerAnimation] = useState(false);

//   // useEffect(() => {
//   //   AOS.init({
//   //     duration: 1000, // Animation duration
//   //     easing: 'ease-in-out', // Easing
//   //     once: true, // Whether animation should happen only once
//   //   });

//     // Set timeout for the CSS animation to start after 1 second (adjust this as needed)
   

//     // return () => clearTimeout(timeout);
//   // }, []);
//     useEffect(() => {
//       AOS.init({
//         once: true,
//         mirror: false,
//         easing: 'ease-in-out',
//       });

//       // const timeout = setTimeout(() => {
//       //   setTriggerAnimation(true);
//       // }, 1500); // 1 second delay

//       // AOS.refresh();
//       // return () => clearTimeout(timeout);
//   },[]);

//   return (
//     <>
//       <div className={`${bricolageGrotesque.className} flex gap-20 justify-between hero `}>
//         {/* Left Section - Content */}
//         <div className="w-full text   flex flex-col justify-between  ">
//           <p className="text-5xl p text-[#f3f3f1] leading-tight tracking-normal" data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-delay="0" data-aos-duration="700">
//             Where <span className="text-[#ffda46]">Peace and Happiness </span>
//           </p>
//           <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="700" className=" p text-5xl text-[#f3f3f1] leading-tight tracking-normal">
//             Meet Finance
//           </p>
//           <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-duration="700" className={`${Ralewayf.className} mt-7 s text-white text-sm leading-7 tracking-wider`}>
//             Discover a world where managing your finances brings clarity and joy. Our tailored solutions simplify your journey to financial stability, allowing you to focus on what matters most
//           </p>
//           <div   data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className={`${Ralewayf.className} w-full h-9  flex justify-start  buttons gap-7 mt-7 text-[#f3f3f1]`}>
//             <div className="btn-1  active:scale-95">
//               <p>Know More</p>
//             </div>
//             <div className="btn-2 active:scale-95 ">
//               <p className="p-[5px] px-[13px] bg-[#ffda46]">
//                 <FaAngleDoubleRight />
//               </p>
//               <h4 className="text-[#f3f3f1]">Contact Us</h4>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Image */}
//         <div className="  w-full relative image min-h-[400px] flex justify-center items-center ">
         

         
//           <img
             
//             data-aos="fade-up"
//             data-aos-delay="0"
//             data-aos-duration="700"
//             src="herologo.png"
//             alt="logo"
//             className="pl-10 images  object-contain rounded-lg max-w-[520px]  "
//           />
//           {/* Glowing images */}
//           <div
//             data-aos="fade-up"
//             data-aos-delay="800"
//             data-aos-duration="700"
//             className={`glow m1 absolute top-[-10%] right-[38%] ${triggerAnimation ? 'animate-up-down delay-0' : ''}`}
//           >
//             <img src="gold.png" alt="" />
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-delay="600"
//             data-aos-duration="700"
//             className={`glow m2 absolute bottom-[23%] left-[12%] ${triggerAnimation ? 'animate-up-down delay-3' : ''}`}
//           >
//             <img src="gold.png" alt="" />
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-delay="700"
//             data-aos-duration="700"
//             className={`glow m3 absolute bottom-[20%] right-[16%] ${triggerAnimation ? 'animate-up-down delay-2' : ''}`}
//           >
//             <img src="gold.png" alt="" />
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-delay="600"
//             data-aos-duration="700"
//             className={`glow m4 absolute bottom-[1%] right-[50%] ${triggerAnimation ? 'animate-up-down delay-3' : ''}`}
//           >
//             <img src="star.png" alt="" />
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-delay="700"
//             data-aos-duration="700"
//             className={`glow m5 absolute top-[22%] left-[20%] ${triggerAnimation ? 'animate-up-down delay-1' : ''}`}
//           >
//             <img src="star.png" alt="" />
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-delay="800"
//             data-aos-duration="700"
//             className={`glow m6 absolute top-[46%] right-[-5%] ${triggerAnimation ? 'animate-up-down delay-1' : ''}`}
//           >
//             <img src="star.png" alt="" />
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-delay="600"
//             data-aos-duration="700"
//             className={`glow m7 absolute top-[14%] right-[15%] ${triggerAnimation ? 'animate-up-down delay-3' : ''}`}
//           >
//             <img src="bluel.png" alt="" />
//           </div>
//         </div>
//       </div>

//       <div className="pb-10 btn-3  text-[#f3f3f1]">
//   <div className="items animate-fade-up-right delay-500">
//     <button>FINANCE ADVISOR</button>
//   </div>
//   <div className="items animate-fade-up-right delay-400">
//     <button>SWP Calculator</button>
//   </div>
//   <div className="items animate-fade-up-right delay-300">
//     <button>SIP Calculator</button>
//   </div>
//   <div className="items animate-fade-up-right delay-200">
//     <button>FINANCE ANALYST</button>
//   </div>
// </div>

//     </>
//   );
// };
"use client";

import { useEffect, useState } from 'react';
import { Bricolage_Grotesque, Raleway } from 'next/font/google';
import React from 'react';
import './hero.css';
import { FaAngleDoubleRight } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '400',
});

const Ralewayf = Raleway({
  subsets: ['latin'],
});

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize AOS only after component is mounted
    AOS.init({
      once: true,
      mirror: false,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smoother easing function
      duration: 800, // Slightly faster duration
      disable: 'mobile', // Disable on mobile for better performance
      throttleDelay: 99, // Reduce throttle delay
      debounceDelay: 50, // Reduce debounce delay
      offset: 120, // Adjust offset to trigger animations earlier
    });

    // Mark component as loaded
    setIsLoaded(true);

    // Refresh AOS when window is resized
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only render animations after component is loaded
  const getAnimationProps = (delay) => isLoaded ? {
    'data-aos': 'fade-up',
    'data-aos-delay': delay,
    'data-aos-duration': '800',
    'data-aos-anchor-placement': 'top-bottom'
  } : {};

  return (
    <>
      <div className={`${bricolageGrotesque.className} flex gap-20 justify-between hero`}>
        <div className="w-full text flex flex-col justify-between">
          <p className="text-5xl p text-[#f3f3f1] leading-tight tracking-normal" {...getAnimationProps(0)}>
            Where <span className="text-[#ffda46]">Peace and Happiness </span>
          </p>
          <p {...getAnimationProps(100)} className="p text-5xl text-[#f3f3f1] leading-tight tracking-normal">
            Meet Finance
          </p>
          <p {...getAnimationProps(200)} className={`${Ralewayf.className} mt-7 s text-white text-sm leading-7 tracking-wider`}>
            Discover a world where managing your finances brings clarity and joy. Our tailored solutions simplify your journey to financial stability, allowing you to focus on what matters most
          </p>
          <div {...getAnimationProps(300)} className={`${Ralewayf.className} w-full h-9 flex justify-start buttons gap-7 mt-7 text-[#f3f3f1]`}>
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

        <div className="w-full relative image min-h-[400px] flex justify-center items-center">
          <img
            {...getAnimationProps(0)}
            src="herologo.png"
            alt="logo"
            className="pl-10 images object-contain rounded-lg max-w-[520px] will-change-transform"
          />
          
          {isLoaded && (
            <>
              <div {...getAnimationProps(400)} className="glow m1 absolute top-[-10%] right-[38%] will-change-transform">
                <img src="gold.png" alt="" loading="lazy" />
              </div>
              <div {...getAnimationProps(300)} className="glow m2 absolute bottom-[23%] left-[12%] will-change-transform">
                <img src="gold.png" alt="" loading="lazy" />
              </div>
              <div {...getAnimationProps(350)} className="glow m3 absolute bottom-[20%] right-[16%] will-change-transform">
                <img src="gold.png" alt="" loading="lazy" />
              </div>
              <div {...getAnimationProps(300)} className="glow m4 absolute bottom-[1%] right-[50%] will-change-transform">
                <img src="star.png" alt="" loading="lazy" />
              </div>
              <div {...getAnimationProps(350)} className="glow m5 absolute top-[22%] left-[20%] will-change-transform">
                <img src="star.png" alt="" loading="lazy" />
              </div>
              <div {...getAnimationProps(400)} className="glow m6 absolute top-[46%] right-[-5%] will-change-transform">
                <img src="star.png" alt="" loading="lazy" />
              </div>
              <div {...getAnimationProps(300)} className="glow m7 absolute top-[14%] right-[15%] will-change-transform">
                <img src="bluel.png" alt="" loading="lazy" />
              </div>
            </>
          )}
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