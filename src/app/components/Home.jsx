import React from 'react'
import './home.css'
import { Header } from './Header/Header'
import { Hero } from './Hero/Hero'
  


const Home = () => {

  return (
  <div className='w-full min-h-screen pb-5 bg-[#0b0b0b]'>
      <div className='main-div  bg-[#0b0b0b] w-full  h-auto  max-w-[1440px] m-auto '>
       <Header/>
         <Hero/>
    </div>
  </div>
   
  )
}

export default Home