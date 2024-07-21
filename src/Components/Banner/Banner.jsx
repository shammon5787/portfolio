import React from 'react'
import img from '../../assets/images/pro.png'

import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {



    return (
        <section id='home' className='w-full  h-[100vh]  items-center border-black border-b-[1px]'>
            <div className='flex items-center justify-between py-10'>
                <div className='w-1/2 flex flex-col gap-16'>
                    <LeftBanner />
                </div>
                <RightBanner />
            </div>
        </section>
    )
}

export default Banner