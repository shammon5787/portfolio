import React, { useState } from 'react'
import Title from '../Layout/Title'
import Education from './Education'
import Skills from './Skills'
import Achievements from './Achievements'
import Experience from './Experience'

const Resume = () => {
    const [educationData, seteducationData] = useState(false)
    const [skillsData, setskillsData] = useState(false)
    const [experienceData, setexperienceData] = useState(false)
    const [achievementsData, setachievementsData] = useState(false)
    return (
        <section id='resume' className='w-full h-auto mt-10 border-b-[1px] border-b-black pb-20 '>
            <div className='flex flex-col items-center justify-center text-center'>
                <Title title="7+ Years of Experience In Development" des="My Projects" />
            </div>
            <div>
                <ul className='grid lg:grid-cols-4 mt-5 w-full '>
                    <li onClick={() => seteducationData(true) & setskillsData(false) & setexperienceData(false) & setachievementsData(false)} className = {`${educationData ? "border border-yellow-400" : ""} resumeLi`} >Education</li>
                    <li onClick={() => seteducationData(false) & setskillsData(true) & setexperienceData(false) & setachievementsData(false)} className = {`${skillsData ? "border border-yellow-400" : ""} resumeLi`}>Professional Skills</li>
                    <li onClick={()=>seteducationData(false) & setskillsData(false) & setexperienceData(true) & setachievementsData(false)} className = {`${experienceData ? "border border-yellow-400" : ""} resumeLi`}>Experience</li>
                    <li onClick={()=>seteducationData(false) & setskillsData(false) & setexperienceData(false) & setachievementsData(true)} className = {`${achievementsData ? "border border-yellow-400" : ""} resumeLi`}>Acievements</li>
                </ul>
            </div>
            {
                educationData && <Education />
            }
           {  skillsData && <Skills />}
            {experienceData && <Experience/>}
            {achievementsData && <Achievements/>}
        </section>
    )
}

export default Resume