import React from 'react'
import img from '../../assets/images/pro.png'

const RightBanner = () => {
    return (
        <div className='w-1/2 items-center justify-center flex'>
            <img className='w-[25vw] absolute z-10 rounded-2xl shadow-md mt-20 ' src={img} alt="" />
            <div className='absolute bottom-0 w-[400px] h-[500px] bg-gradient-to-r from-[#1e2023] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-3xl '>
            </div>
        </div>
    )
}

export default RightBanner