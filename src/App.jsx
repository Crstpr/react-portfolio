import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contacts from './components/contactinfo'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-400 antialiased selection:bg-slate-300 selection:text-cyan-900 '>
      <div className='fixed top-0 -z-10 h-full w-full'></div>
      <div className="fixed top-0 z-[-2] min-h-screen min-w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%80%_at_50%-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className='container mx-auto px-8'></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      
</div>
)
}

export default App

