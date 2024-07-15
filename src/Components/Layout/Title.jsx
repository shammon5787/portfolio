import React from 'react'

const Title = ({title, des}) => {
    return (
        <div className=''>
            <h3 className='text-xl uppercase text-green-600 tracking-wide font-semibold'>{title}</h3>
            <h1 className='text-4xl font-bold text-gray-300 capitalize'>{des}</h1>
        </div>
    )
}

export default Title