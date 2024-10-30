import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, awards } from '../constants'
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text '>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Tarunkumar</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I'm a second-year student at SRM, passionate about exploring technology through hands-on projects. 
        I enjoy building solutions in web development, AI, and software engineering, 
        constantly learning and growing along the way.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          My Skills
        </h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
          <h3 className='subhead-text'>Awards</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              I've earned recognition for my projects and academic performance while collaborating with talented peers and mentors.
            </p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {awards.map((award) => (
                <VerticalTimelineElement
                  key={award.company_name}
                  date={award.date}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img src={award.icon} alt={award.company_name} className='w-[60%] h-[60%] object-contain' />
                    </div>
                  }
                  iconStyle={{ background: award.iconBg || '#a2d2ff' }} // Fallback in case iconBg is undefined
                  contentStyle={{
                    borderBottom: '8px solid',
                    borderBottomColor: award.iconBg || '#a2d2ff', // Ensure consistency with a fallback
                    boxShadow: 'none',
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins'>
                      {award.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                      {award.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {award.points.map((point, index) => (
                      <li key={`award-point-${index}`} className='text-black-500/50 font-normal pl-1 text-small'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA />
      <br />
      <br />
      <Footer />
    </section>
  )
}

export default About