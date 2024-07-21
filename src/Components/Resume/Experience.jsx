import React from 'react'
import ResumeCard from './ResumeCard'

const Experience = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between'>
               
                <div className='flex flex-col'>
                    <div className='my-12 font-titleFont gap-5'>
                        <p className='text-xl text-green-800 tracking-[4px]'>2020 - 2024</p>
                        <h1 className='text-4xl font-semiboldbold'>Education Quality</h1>
                    </div>
                    <div className='mt-14 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 w-1/2 h-[1000px] '>
                        <ResumeCard title="As - Science & Information" subTitle="SuperKing College (2020 - 2024)" result="4.456" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." />
                        <ResumeCard title="As - Science & Information" subTitle="SuperKing College (2020 - 2024)" result="4.456" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." />
                        <ResumeCard title="As - Science & Information" subTitle="SuperKing College (2020 - 2024)" result="4.456" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='my-12 font-titleFont gap-5'>
                        <p className='text-xl text-green-800 tracking-[4px]'>2020 - 2024</p>
                        <h1 className='text-4xl font-semiboldbold'>Job Experience</h1>
                    </div>
                    <div className='mt-14 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 w-1/2 h-[1000px] '>
                        <ResumeCard title="As - Science & Information" subTitle="SuperKing College (2020 - 2024)" result="4.456" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." />
                        <ResumeCard title="As - Science & Information" subTitle="SuperKing College (2020 - 2024)" result="4.456" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." />
                        <ResumeCard title="As - Science & Information" subTitle="SuperKing College (2020 - 2024)" result="4.456" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." />
                    </div>
                </div>
            </div>
  )
}

export default Experience