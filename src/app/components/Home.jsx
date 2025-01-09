import React from 'react'
import './home.css'
import { Header } from './Header/Header'
import { Hero } from './Hero/Hero'
  


const Home = () => {

  return (
  <div className='w-full bg-[#0b0b0b]'>
      <div className='main-div w-full bg-[#0b0b0b] h-screen max-w-[1440px] m-auto '>
       <Header/>
         <Hero/>
    </div>
  </div>
   
  )
}

export default Home