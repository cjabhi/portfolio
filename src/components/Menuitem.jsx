import React from 'react'
import { Link } from 'react-router-dom'
import './Menuitem.css';
import Footer from './Footer';

const Menuitem = (Props) => {
    return (
        <>
            <div className='myself' >
                <div className={Props.section+"section" + " mask"}  >
                    <img className='inmage' src="bg.jpg" alt="background" />
                </div>
                <div className={Props.section+"content" + " content"} id='special' >
                    <h1>{Props.heading}</h1>
                    <p>{Props.text}</p>
                </div>
                {
                    Props.x ?

                    (<div className="project-section special">

                        <div className="project">
                            <img src='medibridge.png' alt='project' />
                            <Link to={'https://medibridge-frontend.onrender.com/'} target='_blank' className='btn'>Visit</Link>
                            <Link to={'https://github.com/cjabhi/Medibridge'} className='btn btn-light' target='_blank' >code</Link>
                            <div className="describe">
                            MediBridge is a web application designed to streamline the process of booking medical appointments. Users can register, log in, and book appointments with doctors, while doctors can manage their appointments and view patient information. The admin has the ability to manage all doctors and appointments in the system. 
                            </div>
                        </div>

                        <div className="project">
                            <img src='royalcafe.png' alt='project' />
                            <Link to={'https://royalcafe.onrender.com/'} target='_blank' className='btn'>Visit</Link>
                            <Link to={'https://github.com/cjabhi/Royal_Cafe'} className='btn btn-light' target='_blank' >code</Link>
                            <div className="describe">
                                This is food ordering and delivering web app with all functionalities made using reactjs , nodejs , expressjs , mongodb. It has all functionalities like signin , signup , add to cart , and then payment and track order. 
                            </div>
                        </div>

                        <div className="project">
                            <img src='school-data.png' alt='project' />
                            <Link to={'https://sample-school.netlify.app/'} target='_blank' className='btn'>Visit</Link>
                            <Link to={'https://github.com/cjabhi/school-database'} target='_blank' className='btn btn-light' >code</Link>
                            <div className="describe">
                                This is a backend oriented MERN project in which all CRUD operations can be performed . Actually this is school database system in which admin can login and and add a student , update students data , delete a student , etc . 
                            </div>
                        </div>
                        <div className="project">
                            <img src='netflix.png' alt='project' />
                            <Link className='btn' to={'https://netflix-clonebycj.netlify.app/'} target='_blank' >Visit</Link>
                            <Link className='btn btn-light' to={'https://github.com/cjabhi/netflix'}  target='_blank' >code</Link>
                            <div className="describe">
                                This is a react project which frontend of netflix , In this i have used an movie api and have arranged it on the website responsibly. In this project i have learnt about how to fetch api using react axios and how to use its data.
                            </div>
                        </div>

                        <div className="project">
                            <img src='movies-flix.png' alt='project' />
                            <Link to={'https://moviesflix-cjabhi.netlify.app/'} target='_blank' className='btn'>Visit</Link>
                            <Link to={'https://github.com/cjabhi/school-database'} target='_blank' className='btn btn-light' >code</Link>
                            <div className="describe">
                                This website is made using webscraping technology (cheerio.js and request.js) , this website scraps data from another website then shows the found data in my designed ui made using react and chakra ui.
                            </div>
                        </div>

                        <div className="project">
                            <img src='makenote.png' alt='project' />
                            <Link to={'https://make-note-bycjabhi.netlify.app/'} target='_blank' className='btn'>Visit</Link>
                            <Link className='btn btn-light' target='_blank' >code</Link>
                            <div className="describe">
                                This is fullstack project which SIGNUP and SIGNIN with google facilities . Here users make notes after login to the website . In this i learnt about firebase , firebase firestore is used as database and firebase authentication is used for authentication .    
                            </div>
                        </div>
                        {/* <Footer /> */}
                    </div>) : null
                }
            </div>

        </>
    )
}

export default Menuitem