import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' >
        <div className="location">
            <FaHome  display={'inline'} size={20} />
            <span>Normai , mainpuri , UP (283142) </span>
        </div>
        <div className="mobile">
            <FaPhone  display={'inline'} size={20} />
            <span> +91 8077429881 </span>
        </div>
        <div className="email">
            <FaMailBulk  display={'inline'} size={20} />
            <span> raunakabhishek234@gmail.com </span>
        </div>
        <div className="social">

<Link to={''} target='_blank'>
        <FaTwitter   />
</Link>
<Link to={'https://www.linkedin.com/in/abhishek-sharma-374b60228/'} target='_blank'>
        <FaLinkedin  />
</Link>
<Link to={''} target='_blank'>
        <FaFacebook />
</Link>
<Link to={''} target='_blank'>
        <FaInstagram />
</Link>
<Link to={'https://github.com/cjabhi'} target='_blank'>
        <FaGithub />
</Link>
        </div>
    </div>
  )
}

export default Footer