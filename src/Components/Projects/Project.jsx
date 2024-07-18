import React from 'react'
import Title from '../Layout/Title.jsx'
import ProjectsCard from './ProjectsCard.jsx'
import img1 from '../../assets/images/1.avif'
import img2 from '../../assets/images/2.avif'
import img3 from '../../assets/images/3.avif'
import img4 from '../../assets/images/4.avif'
import img5 from '../../assets/images/5.avif'
import img6 from '../../assets/images/6.avif'

const Project = () => {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-b-black '>
            <div className='items-center justify-center text-center flex flex-col'>
                <Title title="visit my portfolio and keep your feedback" des="my projects" />
            </div>
            <div className='grid lg:grid-cols-3 items-center justify-center gap-14'>
                <ProjectsCard title = "E-Commerce Website" desc = "This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." img = {img1}  />
                <ProjectsCard title = "E-Commerce Website" desc = "This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." img = {img2} />
                <ProjectsCard title = "E-Commerce Website" desc = "This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." img = {img3} />
                <ProjectsCard title = "E-Commerce Website" desc = "This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." img = {img4} />
                <ProjectsCard title = "E-Commerce Website" desc = "This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." img = {img5} />
                <ProjectsCard title = "E-Commerce Website" desc = "This is Sadam. I'm happy to see your offer, which aligns closely with my skill set. mentioned." img = {img6} />
            </div>
        </section>
    )
}

export default Project