import React from 'react'
import { FaGithub } from "react-icons/fa";
const ProjectsCard = ({ title, desc, img }) => {
    return (
        <div className='w-full px-12 h-auto rounded-lg flex flex-col bg-gradient-to-b from-bodyColor to-[#0f1011]  hover:bg-gradient-to-b hover:from-gray-950 transition-all duration-500 '>
            <div className='overflow-y-hidden'>
                <div className='translate-y-10 hover:translate-y-0 transition-all duration-500'>
                    <div className='w-full h-[80%] overflow-hidden p-3 '>
                        <img className='w-[20vw] h-[15vh] rounded-lg object-cover  ' src={img} alt="" />
                    </div>
                    <div>
                        <span className='flex items-center justify-between'>
                            <h1 className='text-red-900 font-bold text-xl'>{title}</h1>
                            <FaGithub className='text-slate-400 font-bold text-xl cursor-pointer' />
                        </span>
                        <h1> {desc} </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard