import React from 'react'
import img from '../../assets/images/pro.png'

import LeftBanner from './LeftBanner';

const Banner = () => {



    return (
        <section id='home' className='w-full pt-10 h-[100vh]  pb-20 items-center border-black border-b-[1px]'>
            <div className='flex items-center justify-between'>
                <div className='w-1/2 flex flex-col gap-16'>
                    <LeftBanner />
                </div>
                <div className='w-1/2 items-center justify-center flex'>
                    <img className='w-[30vw] rounded-2xl shadow-md ' src={img} alt="" />
                </div></div>
        </section>
    )
}

export default Banner