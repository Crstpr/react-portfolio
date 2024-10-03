import React from 'react'
import photo from '../assets/hero.jpg'

const hero = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start">
                <h1 className='pl-52 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-700 bg-clip-text text-transparent pb-12 text-6xl font-light tracking-tight lg:mt-16 lg:text-6xl'>James Christopher</h1>
                <span className='pl-52 text-4xl font-thin tracking-tight'>Computer Science Student</span>
                 <p className='pl-52 my-2  max-w-3xl py-6 font-light tracking-tight'>Hi, I'm James Christopher Dharmadi, a passionate Computer Science student at Binus University, dedicated to mastering software development, algorithms, and system design. I have a strong foundation in programming and a keen interest in emerging technologies, and I'm always eager to apply my skills to solve real-world challenges. Currently seeking opportunities to collaborate with tech professionals and organizations, I'm excited to grow through internships, projects, and hands-on experience. Let's connect and explore how I can contribute to the innovative work happening in the tech industry.</p>
              </div>
          </div>
          <div className='w-full lg:w-1/2 lg:p-1/8'>
          <div className='flex justify-center'>
            <img src={photo} width={400} height={400} alt="James Christopher" className='rounded-full mt-20'/>
          </div>
          </div>
        </div>
   </div>
  )
  }

export default hero
