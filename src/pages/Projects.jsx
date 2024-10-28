import { Link } from 'react-router-dom';
import { projects } from '../constants';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text '>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        "I'm passionate about exploring technology through engaging hands-on projects.
        I thrive on the challenge of creating innovative solutions in web development, AI, and software engineering.
        Each project offers me a unique opportunity to enhance my skills and apply what I've learned in the classroom to real-world 
        problems. I’m always eager to learn, experiment, and grow, pushing the boundaries of what's possible while collaborating with 
        fellow tech enthusiasts."
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              {/* <div>
                <Link to={project.link} target='blank' rel="noopener noreferrer" className='font-semibold text-blue-600'>
                  Live Link
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Projects