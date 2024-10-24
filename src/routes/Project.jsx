import React from 'react'
import Menuitem from '../components/Menuitem'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Menuitem section={"project"} heading = {"Projects"} text ={"These are some recent projects by me"} x={true} />
    </div>
  )
}

export default Project