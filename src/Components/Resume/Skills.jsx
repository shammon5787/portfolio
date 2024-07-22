import React from 'react'
import ResumeCard from './ResumeCard'
import { delay, motion } from "framer-motion"

const Skills = () => {
    return (

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }} className='flex  justify-between'>

            <div className='flex flex-col w-1/2'>
                <div className='font-titleFont gap-5'>
                    <p className='text-xl text-green-800 tracking-[4px]'>Features</p>
                    <h1 className='text-4xl font-semiboldbold'>Digital Skills</h1>
                </div>
                <div className='mt-5  '>
                    <p className='font-semibold mt-7'>React JS</p>
                     <span className='w-full h-2 bg-black inline-flex rounded-md '>
                        <motion.span
                        initial= {{x: "0%", opacity : 0}}
                        animate = {{x: 0, opacity: 1}}
                        duration = {{duration : 5, delay :5}}
                        className='w-full h-full bg-gradient-to-r from-slate-600 to-blue-600 rounded-md relative '> 
                            <span className='absolute right-0 bottom-3' >100%</span>
                        </motion.span>
                    </span> 
                    <p className='font-semibold mt-7'>React JS</p>
                     <span className='w-full h-2 bg-black inline-flex rounded-md '>
                        <motion.span
                        initial= {{x: '100%', opacity : 0}}
                        animate = {{x: 0, opacity: 1}}
                        duration = {{duration : 5, delay :0.5}}
                        className='h-2 w-[35vw] bg-gradient-to-r from-slate-600 to-blue-600 rounded-md relative '> 
                            <span className='absolute right-0 bottom-3' >100%</span>
                        </motion.span>
                    </span> 
                    <p className='font-semibold mt-7'>React JS</p>
                     <span className='w-full h-2 bg-black inline-flex rounded-md '>
                        <motion.span
                        initial= {{x: '100%', opacity : 0}}
                        animate = {{x: 0, opacity: 1}}
                        duration = {{duration : 5, delay :0.5}}
                        className='h-2 w-[35vw] bg-gradient-to-r from-slate-600 to-blue-600 rounded-md relative '> 
                            <span className='absolute right-0 bottom-3' >100%</span>
                        </motion.span>
                    </span> 
                    <p className='font-semibold mt-7'>React JS</p>
                     <span className='w-full h-2 bg-black inline-flex rounded-md '>
                        <motion.span
                        initial= {{x: '100%', opacity : 0}}
                        animate = {{x: 0, opacity: 1}}
                        duration = {{duration : 5, delay :0.5}}
                        className='h-2 w-[35vw] bg-gradient-to-r from-slate-600 to-blue-600 rounded-md relative '> 
                            <span className='absolute right-0 bottom-3' >100%</span>
                        </motion.span>
                    </span> 
                    <p className='font-semibold mt-7'>React JS</p>
                     <span className='w-full h-2 bg-black inline-flex rounded-md '>
                        <motion.span
                        initial= {{x: '100%', opacity : 0}}
                        animate = {{x: 0, opacity: 1}}
                        duration = {{duration : 5, delay :0.5}}
                        className='h-2 w-[35vw] bg-gradient-to-r from-slate-600 to-blue-600 rounded-md relative '> 
                            <span className='absolute right-0 bottom-3' >100%</span>
                        </motion.span>
                    </span> 

                    
                </div>
            </div>


            <div className='flex flex-col'>
                <div className='font-titleFont gap-5'>
                    <p className='text-xl text-green-800 tracking-[4px]'>Features</p>
                    <h1 className='text-4xl font-semiboldbold'>Tech Skills</h1>
                </div>
                <div className='mt-5  '>
                <p className='font-semibold mt-7'>React JS</p>
                     <span className='w-full h-2 bg-black inline-flex rounded-md '>
                        <motion.span
                        initial= {{x: '100%', opacity : 0}}
                        animate = {{x: 0, opacity: 1}}
                        duration = {{duration : 5, delay :0.5}}
                        className='h-2 w-[35vw] bg-gradient-to-r from-slate-600 to-blue-600 rounded-md relative '> 
                            <span className='absolute right-0 bottom-3' >100%</span>
                        </motion.span>
                    </span> 
                    <p className='font-semibold mt-7'>React JS</p>
                     <span className='w-full h-2 bg-black inline-flex rounded-md '>
                        <motion.span
                        initial= {{x: '100%', opacity : 0}}
                        animate = {{x: 0, opacity: 1}}
                        duration = {{duration : 5, delay :0.5}}
                        className='h-2 w-[35vw] bg-gradient-to-r from-slate-600 to-blue-600 rounded-md relative '> 
                            <span className='absolute right-0 bottom-3' >100%</span>
                        </motion.span>
                    </span> 
                    <p className='font-semibold mt-7'>React JS</p>
                     <span className='w-full h-2 bg-black inline-flex rounded-md '>
                        <motion.span
                        initial= {{x: '100%', opacity : 0}}
                        animate = {{x: 0, opacity: 1}}
                        duration = {{duration : 5, delay :0.5}}
                        className='h-2 w-[35vw] bg-gradient-to-r from-slate-600 to-blue-600 rounded-md relative '> 
                            <span className='absolute right-0 bottom-3' >100%</span>
                        </motion.span>
                    </span> 
                    <p className='font-semibold mt-7'>React JS</p>
                     <span className='w-full h-2 bg-black inline-flex rounded-md '>
                        <motion.span
                        initial= {{x: '100%', opacity : 0}}
                        animate = {{x: 0, opacity: 1}}
                        duration = {{duration : 5, delay :0.5}}
                        className='h-2 w-[35vw] bg-gradient-to-r from-slate-600 to-blue-600 rounded-md relative '> 
                            <span className='absolute right-0 bottom-3' >100%</span>
                        </motion.span>
                    </span> 
                    <p className='font-semibold mt-7'>React JS</p>
                     <span className='w-full h-2 bg-black inline-flex rounded-md '>
                        <motion.span
                        initial= {{x: '100%', opacity : 0}}
                        animate = {{x: 0, opacity: 1}}
                        duration = {{duration : 5, delay :0.5}}
                        className='h-2 w-[35vw] bg-gradient-to-r from-slate-600 to-blue-600 rounded-md relative '> 
                            <span className='absolute right-0 bottom-3' >100%</span>
                        </motion.span>
                    </span> 
                </div>
            </div>
        </motion.div>
    )
}

export default Skills