import React from 'react'
import Title from '../Layout/Title'
import ResumeCard from './ResumeCard'

const Resume = () => {
    return (
        <section id='resume' className='w-full py-20 border-b-[1px] border-b-black '>
            <div className='flex flex-col items-center justify-center text-center'>
                <Title title="7+ Years of Experience In Development" des="My Projects" />
            </div>
            <ul className='grid grid-cols-4 w-full'>
                <li className='resumeLi'>Education</li>
                <li className='resumeLi'>Education</li>
                <li className='resumeLi'>Education</li>
                <li className='resumeLi'>Education</li>
            </ul>
            <div className='my-12 font-titleFont gap-5'>
                <p className='text-xl text-green-800 tracking-[4px]'>2020 - 2024</p>
                <h1 className='text-4xl font-semiboldbold'>Education Quality</h1>
            </div>
            <div>
                <ResumeCard title = "As - Science & Information" subTitle = "SuperKing College (2020 - 2024)" result = "4.456" desc = "This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." />
                <ResumeCard title = "As - Science & Information" subTitle = "SuperKing College (2020 - 2024)" result = "4.456" desc = "This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." />
                <ResumeCard title = "As - Science & Information" subTitle = "SuperKing College (2020 - 2024)" result = "4.456" desc = "This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." />
            </div>
        </section>
    )
}

export default Resume