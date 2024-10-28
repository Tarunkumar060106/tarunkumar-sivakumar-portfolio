import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btntext }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btntext}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Tarunkumar</span>👋
        <br />
        A Second Year Student at SRM
        </h1>
    ),
    2: (
        <InfoBox 
            text="Crafting a journey of growth and hands-on learning."
            link = "/projects"
            btntext = "Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="Building skills through real-world projects and innovative solutions."
            link = "/about"
            btntext = "Visit my Portfolio"
        />
    ), 
    4: (
        <InfoBox 
            text="Let's connect and discuss ideas or potential collaborations."
            link = "/contact"
            btntext = "Let's Talk"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo