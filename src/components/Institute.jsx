import React from 'react'
import './Institute.css'
import { Card, CardHeader, CardBody, CardFooter , Image , Stack , Heading , Text , Button } from '@chakra-ui/react'

const Institute = (Props) => {
  return (
    <div className="inbox">
      <div className="image">
        <img src={Props.src} alt="institute" className={Props.im} />
      </div>
      <div className="description">
        <h2>{Props.name}</h2>
        {Props.description}
      </div>
    </div>
  )
}

export default Institute