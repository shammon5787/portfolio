import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Features from './Components/Features/Features'
import Project from './Components/Projects/Project'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <section className="w-full h-full bg-bodyColor text-lightText">
      <div className='max-w-screen-xl mx-auto px-16'>
        <Navbar />
        <Banner />
        <Features />
        <Project />
        <Resume />
        <Contact />
      </div>
    </section>
  )
}

export default App