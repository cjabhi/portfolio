import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Menuitem from '../components/Menuitem.jsx'
import Institute from '../components/Institute.jsx'
import Footer from '../components/Footer.jsx'

const About = () => {
  return (
    <div className='abouts'>
      <Navbar />
      <Menuitem section={"about"} heading={"About Me"} text={"I'm a 3-star CodeChef coder and MERN developer. Eager to expand my skill set and learn more. If you're in need of a web developer, feel free to reach out. Passionate about problem-solving and web development. Let's code and learn together!"} x={false} />
      <div className="education">
        <h1 style={{ "textAlign": "center" }}>ACADEMICS</h1>
        <Institute src={'knit.jpg'} description={"In the midst of my third year pursuing a B.Tech degree in Computer Science and Engineering from one of finest institute of UTTAR PRADESH Kamla Nehru Institute of Technology, Sultanpur, I am making the most of my academic journey. With a current CGPA of 8.4, I am proud to have maintained a consistent record of excellence in my studies. Beyond the classroom, I am deeply engrossed in the world of technology. I am an active participant in competitive programming, constantly honing my problem-solving skills and algorithmic thinking. Simultaneously, I am diving into the realm of MERN (MongoDB, Express.js, React, Node.js) development, fascinated by the potential of full-stack web applications. By combining my academic accomplishments with my passion for programming, I am confident in my ability to contribute meaningfully to the ever-evolving field of computer science."} name={"KAMLA NEHRU INSTITUTE OF TECHNOLOGY , SULTANPUR"} />
        <Institute im={"divine"} src={'dia.jpg'} description={
          "In the year 2020, I successfully completed my 12th grade education at Divine International Academy, an esteemed institution affiliated with the Central Board of Secondary Education (CBSE). I am proud to have achieved a remarkable percentage of 96.2% in my final examinations. This achievement reflects my dedication, hard work, and commitment to academic excellence. I am excited to embark on the next chapter of my educational journey, armed with the knowledge and skills I have gained during my time at Divine International Academy. With this solid foundation, I look forward to pursuing further academic and career opportunities with enthusiasm and determination." } name={"DIVINE INTERNATIONAL ACADEMY , SIRSAGANJ"} />
        <Institute src={'dia.jpg'} description={
          "In 2018, I accomplished a significant milestone by completing my 10th-grade education at Shiksha Sagar Senior Secondary School, an esteemed institution affiliated with the Central Board of Secondary Education (CBSE). With dedicated effort and hard work, I achieved a commendable percentage of 73% in my final examinations. "} name={"SHIKSHA SAGAR SENIOR SECONDRY SCHOOL , MAHALARPUR"} />
      </div>
    </div>
  )
}

export default About