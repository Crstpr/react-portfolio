import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const navbar = () => {
  return <nav className='mb-10 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'></div>
    <div className='m-8 flex items-center justify-center gap-8 text-2xl'>
      <a href="https://www.linkedin.com/in/jameschristopherdharmadi" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
      </a>
      <a href="https://github.com/Crstpr" target="_blank" rel="noopener noreferrer">
      <FaGithub />
      </a>
      <a href="https://www.instagram.com/james.crstpr/" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
      </a>
    </div>
  </nav>
}

export default navbar