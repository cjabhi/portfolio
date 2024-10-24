import './Brief.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Brief = () => {
  return (
    <div className='myself' >
        <div className="mask">
            <img className='inmage' src="bg.jpg" alt="" />
        </div>
        <div className="content home">
          <div className="photo" style={{"width":"310px"}}>
            <img src="me.jpeg" alt="" width= "100%" style={{border :"3px solid white" , borderRadius :"13px" }} />
          </div>
          <div className="text">

            <p>HI , ITS Abhishek Sharma HERE</p>
            <h1>MERN Developer</h1>
            <div>
                <Link to={'/project'} className='btn' >Projects</Link>
                <Link to={'/contact'} className='btn btn-light' >Contact</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Brief