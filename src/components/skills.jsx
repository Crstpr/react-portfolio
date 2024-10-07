import { RiReactjsLine } from 'react-icons/ri'
import { RiNextjsLine } from 'react-icons/ri'
import { RiNodejsLine } from 'react-icons/ri'
import { RiHtml5Line } from 'react-icons/ri'
import { RiCss3Line } from 'react-icons/ri'
import { RiJavaLine } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'
import { RiJavascriptLine } from 'react-icons/ri'
import { SiFigma } from 'react-icons/si'
import { RiGithubLine } from 'react-icons/ri'
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
    initial: {y: -7},
    animate: {
        y: [7,-7],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-5xl font-light'>Skills</h2>
      <div className='flex flex-wrap items-center justify-center gap-5'>
        <motion.div
        variants={iconVariants(2.5)} 
        initial="initial" 
        animate="animate" 
        className='rounded-xl border-2 border-neutral-700 p-4'>
            <RiReactjsLine className='text-4xl text-cyan-400'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(3)} 
        initial="initial" 
        animate="animate" 
        className='rounded-xl border-2 border-neutral-700 p-4'>
            <RiNextjsLine className='text-4xl'/>
        </motion.div>

        <motion.div         
        variants={iconVariants(5)} 
        initial="initial" 
        animate="animate" 
        className='rounded-xl border-2 border-neutral-700 p-4'>
            <RiNodejsLine className='text-4xl text-green-500'/>
        </motion.div>

        <motion.div         
        variants={iconVariants(2)} 
        initial="initial" 
        animate="animate" 
        className='rounded-xl border-2 border-neutral-700 p-4'>
            <RiHtml5Line className='text-4xl text-orange-500'/>
        </motion.div>

        <motion.div         
        variants={iconVariants(6)} 
        initial="initial" 
        animate="animate" 
        className='rounded-xl border-2 border-neutral-700 p-4'>
            <RiCss3Line className='text-4xl text-blue-500'/>
        </motion.div>

        <motion.div         
        variants={iconVariants(4)} 
        initial="initial" 
        animate="animate" 
        className='rounded-xl border-2 border-neutral-700 p-4'>
            <RiJavaLine className='text-4xl'/>
        </motion.div>

        <motion.div         
        variants={iconVariants(2.5)} 
        initial="initial" 
        animate="animate" 
        className='rounded-xl border-2 border-neutral-700 p-4'>
            <SiMysql className='text-4xl text-orange-400'/>
        </motion.div>

        <motion.div         
        variants={iconVariants(3)} 
        initial="initial" 
        animate="animate" 
        className='rounded-xl border-2 border-neutral-700 p-4'>
            <RiJavascriptLine className='text-4xl text-yellow-300'/>
        </motion.div>

        <motion.div         
        variants={iconVariants(5)} 
        initial="initial" 
        animate="animate" 
        className='rounded-xl border-2 border-neutral-700 p-4'>
            <SiFigma className='text-4xl text-white'/>
        </motion.div>

        <motion.div         
        variants={iconVariants(2.5)} 
        initial="initial" 
        animate="animate" 
        className='rounded-xl border-2 border-neutral-700 p-4'>
            <RiGithubLine className='text-4xl text-white'/>
        </motion.div>
      </div>
    </div>
  )
}

export default skills
