import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Card = ({ title, desc, icon }) => {
    return (
        <div className='h-auto  bg-slate-700  px-8 py-5 rounded-lg shadow-shadowOne items-center flex bg-gradient-to-r from-bodyColor to-[#020303] hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] cursor-pointer transition-colors duration-200  '>
            <div className='h-70 overflow-y-hidden hover:scale-10'>
                <div className='flex flex-col gap-5 translate-y-10 hover:translate-y-0 transition-all duration-500'>
                    <div>
                        <h1 className='text-yellow-700 text-4xl'> {icon} </h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-lightText text-3xl font-semibold'>{title} </h1>
                        <h1 className='text-2xl'> {desc} </h1>

                        <span>
                            <FaArrowRight className='text-yellow-700 text-2xl ' />
                        </span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card