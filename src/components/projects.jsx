import eventnih from '../assets/eventnih.jpg'
import facerecognition from '../assets/facerecog.jpg'
import todo from '../assets/todo.jpg'
import porto from '../assets/porto.jpg'

const projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-5xl font-light'>Projects</h2>
      <div>
        <div className='mb-8 flex flex-wrap lg: justify-center'>
          <div className='w-full lg:w-1/4'>
          <img src={eventnih} width={250} height={250} alt="EventNih!" className='mb-6 rounded' />
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>Online Ticketing Platform - EventNih!</h6>
          <p className='mb-4 text-neutral-400'>A comprehensive platform designed to streamline the process of purchasing tickets for various events, seminars, and activities</p>
          <br />
          <span className='mr-3 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-400'>HTML</span>
          <span className='mr-3 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-400'>CSS</span>
          <span className='mr-3 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-400'>MySQL</span>
          <span className='mr-3 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-400'>JavaScript</span>
          </div>
        </div>
      </div>

      <div>
        <div className='mb-8 flex flex-wrap lg: justify-center'>
          <div className='w-full lg:w-1/4'>
          <img src={facerecognition} width={250} height={250} alt="Facial Recognition" className='mb-6 rounded' />
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>Facial Recognition Program</h6>
          <p className='mb-4 text-neutral-400'>Facial recognition technology to automate attendance tracking, thereby preventing unauthorized entry and ensuring accurate records.</p>
          <br />
          <span className='mr-3 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-400'>Python</span>
          </div>
        </div>
      </div>


      <div>
        <div className='mb-8 flex flex-wrap lg: justify-center'>
          <div className='w-full lg:w-1/4'>
          <img src={todo} width={250} height={250} alt="To Do List" className='mb-6 rounded' />
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>To Do List Application</h6>
          <p className='mb-4 text-neutral-400'>A straightforward tool for users to effectively manage and monitor their deadlines. It allows for the organization of tasks, helping users prioritize their responsibilities and enhance productivity.</p>
          <br />
          <span className='mr-3 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-400'>React</span>
          <span className='mr-3 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-400'>Tailwind CSS</span>
          </div>
        </div>
      </div>

      <div>
        <div className='mb-8 flex flex-wrap lg: justify-center'>
          <div className='w-full lg:w-1/4'>
          <img src={porto} width={250} height={250} alt="To Do List" className='mb-6 rounded' />
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>Portofolio Website</h6>
          <p className='mb-4 text-neutral-400'>A comprehensive overview of my professional capabilities and accomplishments. It highlights my skills and showcases a selection of projects that exemplify my expertise in programming.</p>
          <br />
          <span className='mr-3 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-400'>React</span>
          <span className='mr-3 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-400'>Tailwind CSS</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default projects
