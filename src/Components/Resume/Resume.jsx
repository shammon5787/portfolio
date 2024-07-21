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
        <section id='resume' className='w-full py-20 border-b-[1px] border-b-black '>
            <div className='flex flex-col items-center justify-center text-center'>
                <Title title="7+ Years of Experience In Development" des="My Projects" />
            </div>
            <div>
                <ul className='grid grid-cols-4 w-full'>
                    <li onClick={() => seteducationData(true)} className='resumeLi'>Education</li>
                    <li onClick={() => seteducationData(false) & setskillsData(true)} className='resumeLi'>Professional Skills</li>
                    <li className='resumeLi'>Experience</li>
                    <li className='resumeLi'>Acievements</li>
                </ul>
            </div>
            {
                educationData && <Education />
            }
           {  skillsData && <Skills />}
            {/* <Achievements /> */}
            {/* <Experience /> */}
        </section>
    )
}

export default Resume