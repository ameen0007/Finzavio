// import React from 'react'
// import './home.css'
// import { Header } from './Header/Header'
// import { Hero } from './Hero/Hero'
// import { About } from './About/About'
// import GridBackground from './GridBackground'

import { About } from "./About/About";
import GridBackground from "./GridBackground";
import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import './home.css'


// const Home = () => {

//   return (
//   <div className='w-full bg-[#0b0b0b] '>


//      {/* <GridBackground/> */}
//      <GridBackground 
//   speed={0.3} 
//   squareSize={50}
//   direction='down' // up, down, left, right, diagonal
//   borderColor='#363434'
//   hoverFillColor='#222'
// />

//       {/* <div className=' overflow-hidden max-w-[1280px] m-auto'> */}
//        {/* <Header/>
//          <Hero/> */}
         
       
//     {/* </div> */}
//       {/* <About/> */}
   
   
//   </div>
   
//   )
// }

// export default Home
const Home = () => {
  return (
    <div className='w-full bg-[#0b0b0b]'>
     
      <div className="absolute inset-0 z-0 ">
        <GridBackground
          speed={0.2}
          squareSize={80}
          direction='down'
          borderColor='#292929'
          hoverFillColor='#222'
        />
      </div>
      
      {/* Content Layer */}
      <div className=" overflow-hidden max-w-[1280px]  m-auto  relative z-10  ">
        <div className='main-div'>
          <Header/>
          <Hero/>
        </div>
        <About />
      </div>
    </div>
  );
};

export default Home;