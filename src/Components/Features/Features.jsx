import React from 'react'
import Title from '../Layout/Title'
import Card from './Card'
import { FaWebflow } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { SiReactos } from "react-icons/si";

const Features = () => {
    return (
        <section id='features' className='w-full h-full py-20  items-center border-black border-b-[1px]'>
            <Title title="Features" des="what i do ?" />
            <div className='grid lg:grid-cols-3 gap-4'>
                <Card icon={<FaMobile />} title="Business Strategy" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned. " />

                <Card icon={<AiOutlineAntDesign />} title="WebDevelopment" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned. " />

                <Card icon={<MdDeveloperMode />} title="SCO Optimization" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned. " />

                <Card icon={<IoMenu />} title="Mobile App Development" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned. " />

                <Card icon={<SiReactos />} title="UI Designer" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned. " />

                <Card icon={<FaWebflow />} title="Front End Developer" desc="This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned. " />
            </div>
        </section>
    )
}

export default Features