import aboutphoto from '../assets/aboutpic.jpg'
import cv from '../assets/JamesCV.pdf'

const about = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-5xl font-light'>About Me</h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img src={aboutphoto} width={300} height={300} alt="about pic" className='rounded-2xl' />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='pr-20 flex justify-center lg:justify-start'>
                    <p className='pr-20 font-light my-2 max-w-3xl py-6'>I'm a dedicated Computer Science student at Binus University, currently pursuing my Bachelor's degree. With a passion for programming, algorithms, and system design, I have built a solid foundation in core areas like data structures, software development, and problem-solving. I enjoy exploring how emerging technologies like artificial intelligence, machine learning, and blockchain can solve modern challenges.
                        <br />
                        <br />
                        Through both academic coursework and personal projects, I've honed my skills in several programming languages and frameworks, including Java, C, Python, and JavaScript (React). I take pride in creating efficient, scalable code and have a strong interest in full-stack development and cloud technologies. I'm also passionate about applying these skills to real-world projects, always looking for ways to improve processes or build something innovative.
                        <br />
                        <br />
                        Currently, I am actively seeking internships where I can contribute to meaningful work while learning from industry professionals. I thrive in environments that challenge me to continuously grow and innovate. I'm particularly interested in software development, system design, and working on cutting-edge technologies that shape the future of tech.
                    </p>
                </div>
                <div>
                <a href={cv} download>
                <button className='pb-10'>Download My CV</button>
                </a>
                </div>
                </div>

        </div>
      
    </div>
  )
}

export default about
