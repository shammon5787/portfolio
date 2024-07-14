import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebook, FaTwitter, FaLinkedin, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder ", "Full Stack Developer", "UI Designer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 15,
        delaySpeed: 1000,
    })
    return (
        <>
            <div className='flex flex-col gap-3'>
                <h1 className='uppercase text-3xl font-normal'>welcome to my portfolio</h1>
                <h1 className='text-5xl font-bold'>Hi, I'm {" "}
                    <span className='text-red-700 capitalize'>Sadam Hussain</span>
                </h1>
                <h1 className='text-4xl text-lightText font-bold mt-1'>a <span>{text}.</span>
                    <Cursor cursorBlinking="false" cursorStyle="|" cursorColor='#ff014f' />
                </h1>
                <p className='font-bodyFont'>Dawn is a Pakistani English-language newspaper that was launched in British India in 1941. It is the largest English newspaper in Pakistan, and is widely considered the country's newspaper of record. Wikipedia</p>
            </div>
            <div className='flex gap-20'>
                <div>
                    <h1 className='text-lightText text-xl'>Fine Me In</h1>
                    <div className='flex gap-4 items-center '>
                        <span className='bannerIcon'>
                            <FaFacebook />
                        </span>
                        <span className='bannerIcon'>
                            <FaTwitter />
                        </span>
                        <span className='bannerIcon'>
                            <FaLinkedin />
                        </span>
                    </div>
                </div>
                <div>
                    <h1 className='text-lightText text-xl'>Fine Me In</h1>
                    <div className='flex gap-4 items-center '>
                        <span className='bannerIcon'>
                            <IoLogoJavascript />
                        </span>
                        <span className='bannerIcon'>
                            <SiTailwindcss />
                        </span>
                        <span className='bannerIcon'>
                            <FaReact />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftBanner