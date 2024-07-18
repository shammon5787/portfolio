import React from 'react'

const ProjectsCard = ({ title, desc, img }) => {
    return (
        <div className='w-full px-12 h-auto rounded-lg flex flex-col bg-gradient-to-r from-bodyColor to-[#0f1011]  hover:bg-gradient-to-b hover:from-gray-950 transition-all duration-500 '>
            <div className='w-full h-[80%] overflow-hidden p-3 '>
                <img className='w-[20vw] h-[15vh] rounded-lg  ' src={img} alt="" />
            </div>
            <h1>{title}</h1>
            <h1> {desc} </h1>
        </div>
    )
}

export default ProjectsCard