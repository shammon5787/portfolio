import React from 'react'

const ResumeCard = ({title, subTitle, result, desc}) => {
  return (
    <div>
        <h1> {title} </h1>
        <h1> {subTitle} </h1>
        <h1> {result} </h1>
        <h1> {desc} </h1>
    </div>
  )
}

export default ResumeCard