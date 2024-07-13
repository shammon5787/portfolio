import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Features from './Components/Features/Features'

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className='max-w-screen-xl mx-auto px-16'>
      <Navbar />
      <Banner />
      <Features />
      </div>
    </div>
  )
}

export default App