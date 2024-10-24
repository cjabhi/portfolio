import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skillbox">
      <div style={{"width":"100%" , "textAlign":"center"}}>

      <h2 >My Skills</h2>
      </div>
      <img src="c.png" alt="c" title='C language' />
      <img src="c++.png" alt="c++" title='c++' />
      <img src="html.png" alt="c" title='HTML' />
      <img src="css.png" alt="c++" title='CSS' />
      <img src="javascript.png" alt="c" title='javascript' />
      <img src="react.png" alt="c++" title='React js' />
      <img src="node.jpg" alt="c" title='node js'  />
      <img src="express.jpg" alt="c++" title='express js' />
      <img src="mongodb.jpg" alt="c" title='mongodb' />
      <img src="chakra.jpg" alt="c++" title='chakra ui' />
      <img src="firebase.png" alt="c++" title='firebase' />
    </div>
  )
}

export default Skills