import React from 'react'

const ResumeCard = ({ title, subTitle, result, desc }) => {
  return (
    <div className='lg:w-[40vw] w-[90vw] h-1/3 group flex'>
      <div className='w-10 h-[6px] ogOpacity mt-16 relative '>
        <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60 text-center'>
          <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-white duration-500  '>
          </span>
        </span>
      </div>
      <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-5 flex flex-col justify-center gap-2 shadow-md'>
        <div className='flex'>
          <div>
            <h1 className='text-3xl font-semibold'> {title} </h1>
            <h1 className='text-xl font-semibold'> {subTitle} </h1>
            <h1 className='text-xl font-semibold'> {desc} </h1>
          </div>
          <div>
            <p className='bg-slate-800 text-red-400 px-2 py-1 rounded-full shadow-2xl'>{result}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ResumeCard