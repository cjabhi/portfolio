import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Menuitem from '../components/Menuitem'
import Cform from '../components/Cform.jsx'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Menuitem section={"contact"} heading = {"Contact Me"} text ={"This is a fully working contact form you can reach out to me by submitting the details here . Please feel free to suggest me something and if you want to hire me you are highly welcomed to use this contact form . "} x={false} />
      <Cform />
    </div>
  )
}

export default Contact