import React from 'react'
import './home.css'
import { Header } from './Header/Header'
import { Hero } from './Hero/Hero'
import { About } from './About/About'
  


const Home = () => {

  return (
  <div className='w-full bg-[#0b0b0b] '>


      <div className='main-div overflow-hidden max-w-[1280px] m-auto'>
       <Header/>
         <Hero/>
       
    </div>
      <About/>
   
   
  </div>
   
  )
}

export default Home