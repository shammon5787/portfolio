import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Banner = () => {

    const [text] = useTypewriter({
        words: ["Professional Coder " , "Full Stack Developer", "UI Designer"],
        loop:true,
        typeSpeed: 20,
        deleteSpeed: 15,
        delaySpeed: 1000,
    })

    return (
        <section id='home' className='w-full h-[80vh] pt-10 pb-20 items-center border-black border-b-[1px]'>
            <div>

            </div>
            <div className='w-1/2'>
                <div className='flex flex-col gap-3'>
                    <h1 className='uppercase text-3xl font-normal'>welcome to my portfolio</h1>
                    <h1 className='text-5xl font-bold'>Hi, I'm {" "}
                        <span className='text-red-700 capitalize'>Sadam Hussain</span>
                    </h1>
                    <h1 className='text-4xl text-lightText font-bold mt-3'>a <span>{text}.</span>
                    <Cursor cursorBlinking = "false" cursorStyle ="|" cursorColor='#ff014f' />
                    </h1>
                    <p className='font-bodyFont'>Dawn is a Pakistani English-language newspaper that was launched in British India in 1941. It is the largest English newspaper in Pakistan, and is widely considered the country's newspaper of record. Wikipedia</p>
                </div>
            </div>
            <div className='w-1/2'>

            </div>
        </section>
    )
}

export default Banner